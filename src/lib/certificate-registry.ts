import type { Certificate, CertificateRole } from "@/assets/data/certificates";

type CertificateListEntry = {
  name: string;
  role: string;
};

type CertificateListFile = Record<string, CertificateListEntry>;

const ROLE_ALIASES: Record<string, CertificateRole> = {
  attendee: "attendee",
  asistente: "attendee",
  volunteer: "volunteer",
  voluntario: "volunteer",
  speaker: "speaker",
  ponente: "speaker",
  "keynote speaker": "speaker",
  keynote: "speaker",
  organizer: "organizer",
  organizador: "organizer",
};

const DRIVE_FILE_ID_PATTERNS = [
  /\/file\/d\/([a-zA-Z0-9_-]+)/,
  /[?&]id=([a-zA-Z0-9_-]+)/,
  /^([a-zA-Z0-9_-]{20,})$/,
];

let registryPromise: Promise<Map<string, Certificate>> | null = null;

/** Accepts a raw Drive file id or any common Drive share/view/open/download URL. */
export function extractDriveFileId(value: string): string | undefined {
  const trimmed = value.trim().replace(/^["']|["']$/g, "");
  if (!trimmed) {
    return undefined;
  }

  for (const pattern of DRIVE_FILE_ID_PATTERNS) {
    const match = trimmed.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return undefined;
}

function buildDriveDownloadUrl(fileId: string): string {
  return `https://drive.usercontent.google.com/download?id=${encodeURIComponent(fileId)}&export=download`;
}

function getCertificatesJsonUrl(): string | undefined {
  const explicit = process.env.CERTIFICATES_JSON_URL?.trim();
  if (explicit) {
    const driveId = extractDriveFileId(explicit);
    // Sharing/view links return HTML; always rewrite Drive links to the download endpoint.
    if (driveId) {
      return buildDriveDownloadUrl(driveId);
    }
    return explicit.replace(/^["']|["']$/g, "");
  }

  const fileIdRaw = process.env.CERTIFICATES_DRIVE_FILE_ID?.trim();
  if (fileIdRaw) {
    const fileId = extractDriveFileId(fileIdRaw);
    if (!fileId) {
      throw new Error(
        "CERTIFICATES_DRIVE_FILE_ID must be a Drive file id or Drive URL containing one.",
      );
    }
    return buildDriveDownloadUrl(fileId);
  }

  return undefined;
}

function parseRole(raw: string): CertificateRole | undefined {
  return ROLE_ALIASES[raw.trim().toLowerCase()];
}

function isCertificateListEntry(value: unknown): value is CertificateListEntry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Record<string, unknown>;
  return typeof entry.name === "string" && typeof entry.role === "string";
}

function parseCertificateList(payload: unknown): Map<string, Certificate> {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error(
      "Certificates JSON must be an object keyed by certificate id.",
    );
  }

  const registry = new Map<string, Certificate>();

  for (const [id, value] of Object.entries(payload as CertificateListFile)) {
    const certificateId = id.trim();
    if (!certificateId || !isCertificateListEntry(value)) {
      continue;
    }

    const role = parseRole(value.role);
    if (!role) {
      throw new Error(
        `Unknown certificate role "${value.role}" for id "${certificateId}".`,
      );
    }

    const name = value.name.trim();
    if (!name) {
      continue;
    }

    registry.set(certificateId, {
      id: certificateId,
      name,
      role,
    });
  }

  return registry;
}

function isHtmlBody(contentType: string, body: string): boolean {
  const trimmed = body.trimStart();
  return (
    contentType.includes("text/html") ||
    trimmed.startsWith("<!DOCTYPE") ||
    trimmed.startsWith("<html")
  );
}

async function fetchCertificateRegistry(): Promise<Map<string, Certificate>> {
  const url = getCertificatesJsonUrl();

  if (!url) {
    throw new Error(
      "Missing certificates source. Set CERTIFICATES_JSON_URL or CERTIFICATES_DRIVE_FILE_ID.",
    );
  }

  const response = await fetch(url, {
    // Build-time only; avoid Next Data Cache surprises across rebuilds.
    cache: "no-store",
    redirect: "follow",
    headers: {
      // Some Drive edges return an HTML interstitial without a browser-like UA.
      Accept: "application/json,text/plain,*/*",
      "User-Agent": "PyConColombiaWebsiteBuild/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch certificates JSON (${response.status} ${response.statusText}).`,
    );
  }

  const contentType = response.headers.get("content-type") ?? "";
  const body = await response.text();

  if (isHtmlBody(contentType, body)) {
    throw new Error(
      "Certificates source returned HTML instead of JSON. Use CERTIFICATES_DRIVE_FILE_ID with the file id (or any Drive link) — not a view/share page as CERTIFICATES_JSON_URL — and ensure the file is publicly readable.",
    );
  }

  try {
    return parseCertificateList(JSON.parse(body) as unknown);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("Certificates source is not valid JSON.");
    }
    throw error;
  }
}

/**
 * Loads the full certificate list once per build/process.
 * Only used on the server (build / RSC). Never import from client components.
 */
export function loadCertificateRegistry(): Promise<Map<string, Certificate>> {
  if (!registryPromise) {
    registryPromise = fetchCertificateRegistry();
  }

  return registryPromise;
}

/** Test helper — clears the in-memory cache between runs. */
export function resetCertificateRegistryCache(): void {
  registryPromise = null;
}
