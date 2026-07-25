"use client";

import { DownloadIcon } from "lucide-react";
import { useState } from "react";

import CertificateCard from "@/components/blocks/certificates/certificate-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import {
  type CertificateWithUser,
  getCertificateUrl,
} from "@/lib/certificates";
import { downloadCertificatePdf } from "@/lib/download-certificate-pdf";

type CertificateDetailProps = {
  certificate: CertificateWithUser;
};

const certificateCopy = {
  en: {
    certifies: "PyCon Colombia certifies that",
    participatedAs: "Has participated as",
    eventLine:
      "in the 10th edition of PyCon Colombia, held from July 24 to 26 in Medellín, Colombia.",
    signatoryName: "John Jairo Roa Acuña",
    signatoryTitle: "Chief Organizer",
    verify: "Verify",
  },
  es: {
    certifies: "PyCon Colombia certifica que",
    participatedAs: "Ha participado como",
    eventLine:
      "en la 10.ª edición de PyCon Colombia, realizada del 24 al 26 de julio en Medellín, Colombia.",
    signatoryName: "John Jairo Roa Acuña",
    signatoryTitle: "Organizador principal",
    verify: "Verificar",
  },
} as const;

const CertificateDetail = ({ certificate }: CertificateDetailProps) => {
  const { t } = useTranslations();
  const { locale } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const verificationUrl = getCertificateUrl(certificate.id);
  const roleLabel = t(`blocks.certificates.roles.${certificate.role}`);
  const fileSlug = certificate.user.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const handleDownloadPdf = async () => {
    if (isDownloading) {
      return;
    }

    setIsDownloading(true);
    setDownloadError(null);

    try {
      await downloadCertificatePdf({
        recipientName: certificate.user.name,
        roleLabel,
        verificationUrl,
        fileSlug,
        copy: certificateCopy[locale],
      });
    } catch {
      setDownloadError(t("blocks.certificates.downloadError"));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:space-y-14 lg:px-8">
        <div className="space-y-4 text-center">
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
            <h1 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl">
              {t("blocks.certificates.title")}
            </h1>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
              {t("blocks.certificates.subtitle").replace(
                "{name}",
                certificate.user.name,
              )}
            </p>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-sm">
              {locale === "es" ? "Participación:" : "Participation:"}{" "}
              <span className="text-foreground font-medium">{roleLabel}</span>
            </p>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              <PrimaryFlowButton
                size="lg"
                type="button"
                disabled={isDownloading}
                onClick={handleDownloadPdf}
              >
                <DownloadIcon />
                {isDownloading
                  ? t("blocks.certificates.downloading")
                  : t("blocks.certificates.downloadPdf")}
              </PrimaryFlowButton>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg text-base shadow-none"
                asChild
              >
                <a href={verificationUrl} target="_blank" rel="noreferrer">
                  {t("blocks.certificates.openLink")}
                </a>
              </Button>
            </div>
            {downloadError ? (
              <p className="text-destructive mt-3 text-sm" role="alert">
                {downloadError}
              </p>
            ) : null}
          </MotionPreset>
        </div>

        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 40 }}
          delay={0.55}
          transition={{ duration: 0.55 }}
        >
          <div className="mx-auto w-full max-w-5xl">
            <CertificateCard
              recipientName={certificate.user.name}
              role={certificate.role}
              verificationUrl={verificationUrl}
            />
          </div>
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: "up", offset: 24 }}
          delay={0.65}
          transition={{ duration: 0.45 }}
          className="text-muted-foreground mx-auto max-w-2xl text-center text-sm"
        >
          <p>{t("blocks.certificates.verificationHint")}</p>
        </MotionPreset>
      </div>
    </section>
  );
};

export default CertificateDetail;
