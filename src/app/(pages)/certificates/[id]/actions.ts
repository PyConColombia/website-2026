"use server";

import {
  certificateKeysMatch,
  loadCertificateRegistry,
} from "@/lib/certificate-registry";
import { setCertificateUnlockCookie } from "@/lib/certificate-unlock";

export type UnlockCertificateResult = "ok" | "invalid" | "not_found";

export async function unlockCertificate(
  certificateId: string,
  key: string,
): Promise<UnlockCertificateResult> {
  const trimmedId = certificateId.trim();
  const trimmedKey = key.trim();

  if (!trimmedId || !trimmedKey) {
    return "invalid";
  }

  const registry = await loadCertificateRegistry();
  const record = registry.get(trimmedId);

  if (!record) {
    return "not_found";
  }

  if (!certificateKeysMatch(record.key, trimmedKey)) {
    return "invalid";
  }

  await setCertificateUnlockCookie(trimmedId, record.key);
  return "ok";
}
