import { jsPDF } from "jspdf";
import QRCode from "qrcode";

export type CertificatePdfCopy = {
  certifies: string;
  participatedAs: string;
  eventLine: string;
  signatoryName: string;
  signatoryTitle: string;
  verify: string;
};

export async function downloadCertificatePdf(args: {
  recipientName: string;
  roleLabel: string;
  verificationUrl: string;
  fileSlug: string;
  copy: CertificatePdfCopy;
}): Promise<void> {
  const { recipientName, roleLabel, verificationUrl, fileSlug, copy } = args;

  const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
    width: 320,
    margin: 2,
    errorCorrectionLevel: "H",
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const footerHeight = 42;

  const bands = [
    { color: [232, 58, 140] as const, y0: 0, y1: 0.3 },
    { color: [240, 106, 61] as const, y0: 0.3, y1: 0.55 },
    { color: [245, 180, 41] as const, y0: 0.55, y1: 0.8 },
    { color: [247, 200, 74] as const, y0: 0.8, y1: 1 },
  ];

  for (const band of bands) {
    pdf.setFillColor(band.color[0], band.color[1], band.color[2]);
    pdf.rect(
      0,
      pageHeight * band.y0,
      pageWidth,
      pageHeight * (band.y1 - band.y0),
      "F",
    );
  }

  // Back mountains
  pdf.setFillColor(122, 42, 110);
  pdf.triangle(
    0,
    pageHeight,
    pageWidth * 0.18,
    pageHeight * 0.58,
    pageWidth * 0.36,
    pageHeight,
    "F",
  );
  pdf.triangle(
    pageWidth * 0.28,
    pageHeight,
    pageWidth * 0.5,
    pageHeight * 0.52,
    pageWidth * 0.72,
    pageHeight,
    "F",
  );
  pdf.triangle(
    pageWidth * 0.64,
    pageHeight,
    pageWidth * 0.84,
    pageHeight * 0.56,
    pageWidth,
    pageHeight,
    "F",
  );

  // Front mountains
  pdf.setFillColor(92, 31, 92);
  pdf.triangle(
    0,
    pageHeight,
    pageWidth * 0.14,
    pageHeight * 0.68,
    pageWidth * 0.3,
    pageHeight,
    "F",
  );
  pdf.triangle(
    pageWidth * 0.24,
    pageHeight,
    pageWidth * 0.46,
    pageHeight * 0.64,
    pageWidth * 0.68,
    pageHeight,
    "F",
  );
  pdf.triangle(
    pageWidth * 0.6,
    pageHeight,
    pageWidth * 0.8,
    pageHeight * 0.7,
    pageWidth,
    pageHeight,
    "F",
  );

  // Footer
  pdf.setFillColor(59, 20, 96);
  pdf.rect(0, pageHeight - footerHeight, pageWidth, footerHeight, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.text("WWW.PYCON.CO", pageWidth / 2, pageHeight - footerHeight / 2 + 4, {
    align: "center",
  });

  // Header
  pdf.setTextColor(59, 20, 96);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(36);
  pdf.text("PYCON 2026", pageWidth / 2, 64, { align: "center" });
  pdf.setFontSize(12);
  pdf.text("COLOMBIA", pageWidth / 2, 84, { align: "center" });

  // Body
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "italic");
  pdf.setFontSize(14);
  pdf.text(copy.certifies, pageWidth / 2, 140, { align: "center" });

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(34);
  pdf.text(recipientName, pageWidth / 2, 188, { align: "center" });

  pdf.setFont("helvetica", "italic");
  pdf.setFontSize(14);
  pdf.text(copy.participatedAs, pageWidth / 2, 230, { align: "center" });

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(28);
  pdf.text(roleLabel, pageWidth / 2, 268, { align: "center" });

  pdf.setFont("helvetica", "italic");
  pdf.setFontSize(12);
  const eventLines = pdf.splitTextToSize(copy.eventLine, pageWidth * 0.7);
  pdf.text(eventLines, pageWidth / 2, 310, { align: "center" });

  // QR with quiet zone
  const qrSize = 96;
  const qrX = 40;
  const qrY = pageHeight - footerHeight - qrSize - 36;
  pdf.setFillColor(255, 255, 255);
  pdf.roundedRect(qrX - 8, qrY - 8, qrSize + 16, qrSize + 16, 4, 4, "F");
  pdf.addImage(qrDataUrl, "PNG", qrX, qrY, qrSize, qrSize);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);
  pdf.setTextColor(255, 255, 255);
  pdf.text(copy.verify.toUpperCase(), qrX + qrSize / 2, qrY + qrSize + 18, {
    align: "center",
  });

  // Signature
  pdf.setFont("times", "italic");
  pdf.setFontSize(28);
  pdf.setTextColor(255, 255, 255);
  pdf.text("John Roa", pageWidth / 2, pageHeight - footerHeight - 78, {
    align: "center",
  });
  pdf.setDrawColor(255, 255, 255);
  pdf.setLineWidth(1);
  pdf.line(
    pageWidth / 2 - 90,
    pageHeight - footerHeight - 66,
    pageWidth / 2 + 90,
    pageHeight - footerHeight - 66,
  );
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(11);
  pdf.text(copy.signatoryName, pageWidth / 2, pageHeight - footerHeight - 48, {
    align: "center",
  });
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.text(copy.signatoryTitle, pageWidth / 2, pageHeight - footerHeight - 34, {
    align: "center",
  });

  pdf.save(`pycon-colombia-2026-certificate-${fileSlug}.pdf`);
}
