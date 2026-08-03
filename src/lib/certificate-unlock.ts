import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

import { loadCertificateRegistry } from "@/lib/certificate-registry";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function cookieName(certificateId: string): string {
  return `cert_unlock_${certificateId}`;
}

function cookiePath(certificateId: string): string {
  const basePath = process.env.BASEPATH ?? "";
  return `${basePath}/certificates/${certificateId}/`;
}

/** Proof-of-key token — never stores the raw key in the cookie. */
export function buildUnlockToken(certificateId: string, key: string): string {
  return createHmac("sha256", key).update(certificateId).digest("hex");
}

function tokensMatch(expected: string, provided: string): boolean {
  const left = Buffer.from(expected);
  const right = Buffer.from(provided);
  if (left.length !== right.length) {
    return false;
  }
  return timingSafeEqual(left, right);
}

export async function setCertificateUnlockCookie(
  certificateId: string,
  key: string,
): Promise<void> {
  const jar = await cookies();
  jar.set({
    name: cookieName(certificateId),
    value: buildUnlockToken(certificateId, key),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: cookiePath(certificateId),
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });
}

/** True when a valid unlock cookie is present for this certificate. */
export async function hasValidCertificateUnlock(
  certificateId: string,
): Promise<boolean> {
  const registry = await loadCertificateRegistry();
  const record = registry.get(certificateId);
  if (!record) {
    return false;
  }

  const jar = await cookies();
  const token = jar.get(cookieName(certificateId))?.value;
  if (!token) {
    return false;
  }

  const expected = buildUnlockToken(certificateId, record.key);
  return tokensMatch(expected, token);
}
