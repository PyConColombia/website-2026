import { jsPDF } from "jspdf";
import { domToPng, waitUntilLoad } from "modern-screenshot";

import { PRODUCTION_SITE_URL } from "@/lib/site-seo";

/** Fixed design width used for on-screen layout and PDF capture. */
export const CERTIFICATE_CANVAS_WIDTH_PX = 1100;
const CERTIFICATE_ASPECT = 22 / 17;
const CERTIFICATE_CANVAS_HEIGHT_PX =
  CERTIFICATE_CANVAS_WIDTH_PX / CERTIFICATE_ASPECT;

async function waitForImages(element: HTMLElement) {
  const images = Array.from(element.querySelectorAll("img"));

  await Promise.all(
    images.map(
      (image) =>
        new Promise<void>((resolve) => {
          if (image.complete && image.naturalWidth > 0) {
            resolve();
            return;
          }

          const done = () => resolve();
          image.addEventListener("load", done, { once: true });
          image.addEventListener("error", done, { once: true });
        }),
    ),
  );
}

function toAbsoluteUrl(href: string): string {
  if (/^https?:\/\//i.test(href)) {
    return href;
  }

  return `${PRODUCTION_SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
}

/**
 * Map a DOM node's box (relative to the certificate root) onto PDF content coords.
 */
function getPdfLinkBounds(args: {
  root: HTMLElement;
  target: HTMLElement;
  margin: number;
  contentWidth: number;
  contentHeight: number;
}): { x: number; y: number; w: number; h: number } | null {
  const { root, target, margin, contentWidth, contentHeight } = args;
  const rootRect = root.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  if (rootRect.width <= 0 || rootRect.height <= 0) {
    return null;
  }

  const scaleX = contentWidth / rootRect.width;
  const scaleY = contentHeight / rootRect.height;
  const pad = 2;

  return {
    x: margin + (targetRect.left - rootRect.left) * scaleX - pad,
    y: margin + (targetRect.top - rootRect.top) * scaleY - pad,
    w: targetRect.width * scaleX + pad * 2,
    h: targetRect.height * scaleY + pad * 2,
  };
}

/**
 * Capture a certificate node that is already laid out at the fixed canvas
 * size (not CSS-scaled). PDF output is identical on every device.
 */
export async function downloadCertificatePdf(args: {
  element: HTMLElement;
  fileSlug: string;
}): Promise<void> {
  const { element, fileSlug } = args;

  await document.fonts.ready;
  await waitForImages(element);
  await waitUntilLoad(element, { timeout: 12_000 });

  // Brief pause so webfonts / QR paint settle before capture.
  await new Promise((resolve) => window.setTimeout(resolve, 80));

  const dataUrl = await domToPng(element, {
    width: CERTIFICATE_CANVAS_WIDTH_PX,
    height: CERTIFICATE_CANVAS_HEIGHT_PX,
    scale: 2,
    backgroundColor: "#ffffff",
    quality: 1,
    timeout: 30_000,
    style: {
      transform: "none",
      opacity: "1",
      filter: "none",
      width: `${CERTIFICATE_CANVAS_WIDTH_PX}px`,
      height: `${CERTIFICATE_CANVAS_HEIGHT_PX}px`,
    },
    fetch: {
      requestInit: {
        mode: "cors",
        credentials: "omit",
      },
    },
  });

  const margin = 28; // pt on each side
  const contentWidth = 842;
  const contentHeight = contentWidth / CERTIFICATE_ASPECT;
  const pageWidth = contentWidth + margin * 2;
  const pageHeight = contentHeight + margin * 2;

  const pdf = new jsPDF({
    orientation: pageWidth >= pageHeight ? "landscape" : "portrait",
    unit: "pt",
    format: [pageWidth, pageHeight],
    compress: true,
  });

  pdf.setFillColor(241, 242, 252); // brand background (#f1f2fc)
  pdf.rect(0, 0, pageWidth, pageHeight, "F");
  pdf.addImage(
    dataUrl,
    "PNG",
    margin,
    margin,
    contentWidth,
    contentHeight,
    undefined,
    "FAST",
  );

  const nameLink = element.querySelector<HTMLAnchorElement>(".pcert-name a");
  const profilePath = nameLink?.getAttribute("href");

  if (nameLink && profilePath) {
    const bounds = getPdfLinkBounds({
      root: element,
      target: nameLink,
      margin,
      contentWidth,
      contentHeight,
    });

    if (bounds) {
      pdf.link(bounds.x, bounds.y, bounds.w, bounds.h, {
        url: toAbsoluteUrl(profilePath),
      });
    }
  }

  pdf.save(`pycon-colombia-2026-certificate-${fileSlug}.pdf`);
}
