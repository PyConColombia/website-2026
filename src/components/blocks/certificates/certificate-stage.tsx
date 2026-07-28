"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { CERTIFICATE_CANVAS_WIDTH_PX } from "@/lib/download-certificate-pdf";
import { cn } from "@/lib/utils";

const ASPECT = 22 / 17;
const CANVAS_HEIGHT = CERTIFICATE_CANVAS_WIDTH_PX / ASPECT;

type CertificateStageProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Lays the certificate out at a fixed design width, then scales it to fit
 * the available space. Layout/fonts stay identical at every viewport size.
 */
const CertificateStage = ({ children, className }: CertificateStageProps) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) {
      return;
    }

    const update = () => {
      const width = outer.clientWidth;
      if (width > 0) {
        setScale(Math.min(1, width / CERTIFICATE_CANVAS_WIDTH_PX));
      }
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
      className={cn("relative w-full", className)}
      style={{ height: CANVAS_HEIGHT * scale }}
    >
      <div
        className="origin-top-left"
        style={{
          width: CERTIFICATE_CANVAS_WIDTH_PX,
          height: CANVAS_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CertificateStage;
