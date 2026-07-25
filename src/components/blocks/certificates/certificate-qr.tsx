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

const CertificateQr = ({ url, className, size = 140 }: CertificateQrProps) => {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!url) {
      setDataUrl(null);
      return;
    }

    QRCode.toDataURL(url, {
      width: 512,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#ffffff",
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
  }, [url]);

  if (!dataUrl) {
    return (
      <div
        className={cn("animate-pulse rounded-sm bg-white p-2", className)}
        style={{ width: size + 16, height: size + 16 }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={cn(
        "rounded-sm bg-white p-2 shadow-[0_0_0_3px_rgba(255,255,255,0.95)]",
        className,
      )}
      style={{ width: size + 16, height: size + 16 }}
    >
      {/* biome-ignore lint/performance/noImgElement: QR is a generated data URL */}
      <img
        src={dataUrl}
        alt=""
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          display: "block",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};

export default CertificateQr;
