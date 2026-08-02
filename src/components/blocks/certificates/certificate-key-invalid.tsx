"use client";

import { AlertTriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

const REDIRECT_DELAY_MS = 3500;

const CertificateKeyInvalid = () => {
  const { t } = useTranslations();
  const router = useRouter();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.replace("/");
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [router]);

  return (
    <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-lg space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="bg-background text-sm font-normal"
          >
            {t("blocks.certificates.eyebrow")}
          </Badge>
        </MotionPreset>

        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          delay={0.15}
          transition={{ duration: 0.5 }}
        >
          <div
            className="border-destructive/30 bg-destructive/5 text-destructive mx-auto flex max-w-md flex-col items-center gap-3 rounded-lg border px-6 py-8"
            role="alert"
          >
            <AlertTriangleIcon className="size-8" aria-hidden />
            <h1 className="text-xl font-semibold md:text-2xl">
              {t("blocks.certificates.invalidKeyTitle")}
            </h1>
            <p className="text-destructive/90 text-base">
              {t("blocks.certificates.invalidKeyMessage")}
            </p>
          </div>
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: "up", offset: 24 }}
          delay={0.3}
          transition={{ duration: 0.45 }}
        >
          <p className="text-muted-foreground text-sm">
            {t("blocks.certificates.invalidKeyRedirect")}
          </p>
        </MotionPreset>
      </div>
    </section>
  );
};

export default CertificateKeyInvalid;
