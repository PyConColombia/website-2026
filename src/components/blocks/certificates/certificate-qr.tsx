"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type CertificateQrProps = {
  url: string;
  className?: string;
  /** Visible QR module area in CSS pixels (padding is added outside). */
  size?: number;
};

/** Matches certificate-pycon design: lavender tile, purple modules, soft border. */
const QR_DARK = "#6155f5";
const QR_LIGHT = "#d3d4f6";
const QR_BORDER = "rgb(97 85 245 / 0.3)";

const CertificateQr = ({ url, className, size = 56 }: CertificateQrProps) => {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!url) {
      setDataUrl(null);
      return;
    }

    QRCode.toDataURL(url, {
      width: Math.max(size * 4, 256),
      margin: 1,
      color: {
        dark: QR_DARK,
        light: QR_LIGHT,
      },
      errorCorrectionLevel: "H",
    })
      .then((value) => {
        if (!cancelled) {
          setDataUrl(value);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDataUrl(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [url, size]);

  const box = size;

  if (!dataUrl) {
    return (
      <div
        className={cn(className)}
        style={{
          width: box,
          height: box,
          backgroundColor: QR_LIGHT,
          borderRadius: 8,
          border: `1px solid ${QR_BORDER}`,
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={cn(className)}
      style={{
        width: box,
        height: box,
        backgroundColor: QR_LIGHT,
        borderRadius: 8,
        border: `1px solid ${QR_BORDER}`,
        overflow: "hidden",
        padding: 4,
        boxSizing: "border-box",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: QR is a generated data URL */}
      <img
        src={dataUrl}
        alt=""
        width={size}
        height={size}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          borderRadius: 4,
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};

export default CertificateQr;
