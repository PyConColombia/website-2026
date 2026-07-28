import { jsPDF } from "jspdf";
import { domToPng, waitUntilLoad } from "modern-screenshot";

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

/**
 * Rasterize the live certificate DOM exactly as shown (fonts, colors, QR),
 * then embed that bitmap into a PDF page matching the certificate aspect ratio.
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

  const scale = Math.min(3, Math.max(2, window.devicePixelRatio || 2));

  const dataUrl = await domToPng(element, {
    scale,
    backgroundColor: "#ffffff",
    quality: 1,
    timeout: 30_000,
    // Capture the node as fully painted (ignore parent motion transforms).
    style: {
      transform: "none",
      opacity: "1",
      filter: "none",
    },
    fetch: {
      requestInit: {
        mode: "cors",
        credentials: "omit",
      },
    },
  });

  // Page follows certificate aspect ratio (22:17), with a white margin around it.
  const rect = element.getBoundingClientRect();
  const aspect = rect.height > 0 ? rect.width / rect.height : 22 / 17;
  const margin = 28; // pt on each side
  const contentWidth = 842; // ~A4 landscape width for the certificate itself
  const contentHeight = contentWidth / aspect;
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
  pdf.save(`pycon-colombia-2026-certificate-${fileSlug}.pdf`);
}
