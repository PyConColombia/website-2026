"use client";

import { DownloadIcon, ExpandIcon, Link2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ResolvedCertificate } from "@/assets/data/certificates";
import CertificateCard from "@/components/blocks/certificates/certificate-card";
import CertificateStage from "@/components/blocks/certificates/certificate-stage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { getCertificateUrl } from "@/lib/certificates";
import {
  CERTIFICATE_CANVAS_WIDTH_PX,
  downloadCertificatePdf,
} from "@/lib/download-certificate-pdf";

type CertificateDetailProps = {
  certificate: ResolvedCertificate;
};

const CertificateDetail = ({ certificate }: CertificateDetailProps) => {
  const { t } = useTranslations();
  const { locale } = useLanguage();
  const exportRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const verificationUrl = getCertificateUrl(certificate.id);
  const roleLabel = t(`blocks.certificates.roles.${certificate.role}`);
  const fileSlug = certificate.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const cardProps = {
    recipientName: certificate.name,
    role: certificate.role,
    verificationUrl,
    certificateId: certificate.id,
    profileHref: certificate.profileHref,
  } as const;

  useEffect(() => {
    if (!linkCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setLinkCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [linkCopied]);

  const handleDownloadPdf = async () => {
    const element = exportRef.current?.querySelector<HTMLElement>(
      "[data-certificate-root]",
    );

    if (!element || isDownloading) {
      return;
    }

    setIsDownloading(true);
    setDownloadError(null);

    try {
      await downloadCertificatePdf({
        element,
        fileSlug,
      });
    } catch {
      setDownloadError(t("blocks.certificates.downloadError"));
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(verificationUrl);
      setLinkCopied(true);
    } catch {
      window.prompt(t("blocks.certificates.copyLink"), verificationUrl);
    }
  };

  return (
    <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
      {/* Fixed-size offscreen render used only for PDF — identical on every device */}
      <div
        ref={exportRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 -left-[14000px]"
        style={{ width: CERTIFICATE_CANVAS_WIDTH_PX }}
      >
        <CertificateCard {...cardProps} />
      </div>

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
                certificate.name,
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
                type="button"
                variant="outline"
                className="rounded-lg text-base shadow-none"
                onClick={handleCopyLink}
              >
                <Link2Icon />
                {linkCopied
                  ? t("blocks.certificates.linkCopied")
                  : t("blocks.certificates.copyLink")}
              </Button>
              <Button
                size="lg"
                type="button"
                variant="outline"
                className="rounded-lg text-base shadow-none md:hidden"
                onClick={() => setPreviewOpen(true)}
              >
                <ExpandIcon />
                {t("blocks.certificates.viewFull")}
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
          <div className="mx-auto hidden w-full max-w-5xl md:block">
            <CertificateStage>
              <CertificateCard {...cardProps} />
            </CertificateStage>
          </div>

          <div className="mx-auto w-full max-w-5xl md:hidden">
            <button
              type="button"
              className="w-full cursor-zoom-in text-left"
              onClick={() => setPreviewOpen(true)}
              aria-label={t("blocks.certificates.viewFull")}
            >
              <CertificateStage>
                <CertificateCard {...cardProps} />
              </CertificateStage>
            </button>
            <p className="text-muted-foreground mt-3 text-center text-sm">
              {t("blocks.certificates.tapToExpand")}
            </p>
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

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent
          className="max-h-[92vh] w-[min(100vw-1rem,72rem)] max-w-none overflow-y-auto p-3 sm:p-5"
          showCloseButton
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{t("blocks.certificates.viewFull")}</DialogTitle>
            <DialogDescription>
              {t("blocks.certificates.tapToExpand")}
            </DialogDescription>
          </DialogHeader>
          {previewOpen ? (
            <CertificateStage>
              <CertificateCard {...cardProps} />
            </CertificateStage>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificateDetail;
