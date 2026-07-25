"use client";

import type { CertificateRole } from "@/assets/data/certificates";
import CertificateQr from "@/components/blocks/certificates/certificate-qr";
import { useLanguage } from "@/contexts/language-context";
import { assetPath, cn } from "@/lib/utils";

type CertificateCardProps = {
  recipientName: string;
  role: CertificateRole;
  verificationUrl: string;
  className?: string;
};

const roleLabels = {
  en: {
    attendee: "Attendee",
    volunteer: "Volunteer",
    speaker: "Speaker",
    organizer: "Organizer",
  },
  es: {
    attendee: "Asistente",
    volunteer: "Voluntario",
    speaker: "Ponente",
    organizer: "Organizador",
  },
} as const;

const copy = {
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

const CertificateCard = ({
  recipientName,
  role,
  verificationUrl,
  className,
}: CertificateCardProps) => {
  const { locale } = useLanguage();
  const text = copy[locale];
  const roleLabel = roleLabels[locale][role];

  return (
    <article
      className={cn(
        "certificate-print-root relative flex aspect-[1123/794] w-full flex-col overflow-hidden rounded-sm text-white shadow-lg",
        className,
      )}
      style={{
        background:
          "linear-gradient(180deg, #e83a8c 0%, #f06a3d 42%, #f5b429 78%, #f7c84a 100%)",
      }}
    >
      {/* Sky decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="absolute top-[12%] left-[8%] size-10 rounded-full border-2 border-white/55 opacity-80 sm:size-14" />
        <span className="absolute top-[18%] left-[18%] h-5 w-14 rounded-full bg-white/25 blur-[1px] sm:h-7 sm:w-20" />
        <span className="absolute top-[14%] right-[22%] h-4 w-12 rounded-full bg-white/20 blur-[1px] sm:h-6 sm:w-16" />
        <span className="absolute top-[8%] left-[42%] size-1.5 rounded-full bg-white/70" />
        <span className="absolute top-[22%] left-[55%] size-1 rounded-full bg-white/60" />
        <span className="absolute top-[11%] right-[38%] size-1.5 rounded-full bg-white/65" />
        <span className="absolute top-[28%] right-[12%] size-1 rounded-full bg-white/55" />

        {/* Hot air balloons */}
        <svg
          className="absolute top-[18%] left-[5%] h-16 w-10 opacity-90 sm:h-24 sm:w-14"
          viewBox="0 0 56 96"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="34" rx="22" ry="28" fill="#6b2d8b" />
          <ellipse cx="28" cy="34" rx="14" ry="20" fill="#8b3fad" />
          <path d="M18 58 L28 72 L38 58" stroke="#f5c84a" strokeWidth="2" />
          <rect x="24" y="72" width="8" height="10" rx="1" fill="#f5c84a" />
        </svg>
        <svg
          className="absolute top-[22%] right-[6%] h-14 w-9 opacity-90 sm:h-20 sm:w-12"
          viewBox="0 0 56 96"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="34" rx="22" ry="28" fill="#6b2d8b" />
          <ellipse cx="28" cy="34" rx="14" ry="20" fill="#8b3fad" />
          <path d="M18 58 L28 72 L38 58" stroke="#f5c84a" strokeWidth="2" />
          <rect x="24" y="72" width="8" height="10" rx="1" fill="#f5c84a" />
        </svg>

        {/* Mountains */}
        <svg
          className="absolute inset-x-0 bottom-10 h-[28%] w-full sm:bottom-12"
          viewBox="0 0 1123 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 220 V120 L140 70 L280 140 L420 40 L560 130 L700 55 L840 125 L980 60 L1123 110 V220 Z"
            fill="#7a2a6e"
            opacity="0.55"
          />
          <path
            d="M0 220 V150 L120 100 L250 160 L390 85 L530 155 L680 95 L820 150 L960 105 L1123 145 V220 Z"
            fill="#5c1f5c"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Header brand */}
      <div className="relative z-10 flex items-center justify-center gap-3 pt-5 sm:gap-4 sm:pt-8">
        <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-[#4a1a6b]/90 ring-2 ring-white/30 sm:size-16">
          {/* biome-ignore lint/performance/noImgElement: print/PDF capture needs a plain img */}
          <img
            src={assetPath("/favicon/apple-touch-icon.png")}
            alt=""
            width={64}
            height={64}
            className="size-full object-cover"
          />
        </div>
        <div className="text-left leading-none">
          <p className="[font-family:var(--font-display)] text-2xl font-bold tracking-[0.04em] text-[#3b1460] sm:text-4xl">
            PYCON 2026
          </p>
          <p className="[font-family:var(--font-button)] mt-0.5 text-[0.65rem] tracking-[0.35em] text-[#3b1460]/90 sm:text-sm">
            COLOMBIA
          </p>
        </div>
      </div>

      {/* Body copy */}
      <div className="relative z-10 mx-auto flex max-w-[85%] flex-col items-center px-4 pt-6 text-center sm:pt-10">
        <p className="text-sm italic text-white/95 sm:text-lg">
          {text.certifies}
        </p>
        <h2 className="[font-family:var(--font-display)] mt-2 text-2xl font-bold tracking-wide text-white drop-shadow-sm sm:mt-3 sm:text-5xl">
          {recipientName}
        </h2>
        <p className="mt-4 text-sm italic text-white/95 sm:mt-6 sm:text-lg">
          {text.participatedAs}
        </p>
        <p className="[font-family:var(--font-display)] mt-1 text-xl font-bold tracking-wide text-white sm:mt-2 sm:text-4xl">
          {roleLabel}
        </p>
        <p className="mt-3 max-w-2xl text-xs leading-relaxed italic text-white/95 sm:mt-5 sm:text-base">
          {text.eventLine}
        </p>
      </div>

      {/* Signature + QR */}
      <div className="relative z-10 mt-auto flex items-end justify-between gap-4 px-4 pb-14 sm:px-8 sm:pb-16">
        <div className="flex flex-col items-start gap-1">
          <CertificateQr url={verificationUrl} size={140} />
          <span className="text-[0.55rem] font-medium tracking-wide text-white/85 uppercase sm:text-[0.65rem]">
            {text.verify}
          </span>
        </div>

        <div className="mb-1 flex flex-1 flex-col items-center text-center">
          <p
            className="text-2xl text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-serif), cursive" }}
          >
            John Roa
          </p>
          <div className="mt-1 h-px w-36 bg-white/80 sm:w-48" />
          <p className="mt-1 text-xs font-semibold sm:text-sm">
            {text.signatoryName}
          </p>
          <p className="text-[0.65rem] text-white/90 sm:text-xs">
            {text.signatoryTitle}
          </p>
        </div>

        <div className="w-40" aria-hidden="true" />
      </div>

      {/* Footer bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center justify-center bg-[#3b1460] sm:h-12">
        <p className="[font-family:var(--font-button)] text-sm tracking-[0.28em] text-white sm:text-base">
          WWW.PYCON.CO
        </p>
      </div>
    </article>
  );
};

export default CertificateCard;
