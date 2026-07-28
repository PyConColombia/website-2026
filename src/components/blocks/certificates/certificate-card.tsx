"use client";

import { useId } from "react";
import type { CertificateRole } from "@/assets/data/certificates";
import CertificateQr from "@/components/blocks/certificates/certificate-qr";
import { useLanguage } from "@/contexts/language-context";
import { assetPath, cn } from "@/lib/utils";

type CertificateCardProps = {
  recipientName: string;
  role: CertificateRole;
  verificationUrl: string;
  certificateId: string;
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
    brandSub: "Medellín · Universidad EAFIT",
    editionLabel: "EDITION · 2026",
    locationBadge: "MEDELLIN, COLOMBIA  ·  24, 25 & 26 JULY - 2026",
    eyebrow: "Certificate of Participation",
    certifies: "PyCon Colombia certifies that",
    participatedAs: "Has participated as",
    eventStrong: "10th edition of PyCon Colombia",
    eventRest: "held from July 24 to 26 in Medellín, Colombia.",
    metaEvent: "Event",
    metaDates: "Dates",
    metaLocation: "Location",
    metaVenue: "Venue",
    metaEventValue: "PyCon Colombia 2026",
    metaDatesValue: "July 24 – 26, 2026",
    metaLocationValue: "Medellín, Colombia",
    metaVenueValue: "Universidad EAFIT",
    verify: "Verify",
    certIdLabel: "Certification ID",
  },
  es: {
    brandSub: "Medellín · Universidad EAFIT",
    editionLabel: "EDICIÓN · 2026",
    locationBadge: "MEDELLÍN, COLOMBIA  ·  24, 25 Y 26 DE JULIO - 2026",
    eyebrow: "Certificado de participación",
    certifies: "PyCon Colombia certifica que",
    participatedAs: "Ha participado como",
    eventStrong: "10.ª edición de PyCon Colombia",
    eventRest: "realizada del 24 al 26 de julio en Medellín, Colombia.",
    metaEvent: "Evento",
    metaDates: "Fechas",
    metaLocation: "Ubicación",
    metaVenue: "Sede",
    metaEventValue: "PyCon Colombia 2026",
    metaDatesValue: "24 – 26 de julio, 2026",
    metaLocationValue: "Medellín, Colombia",
    metaVenueValue: "Universidad EAFIT",
    verify: "Verificar",
    certIdLabel: "ID de certificación",
  },
} as const;

const Diamond = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="12"
    height="14"
    viewBox="0 0 10 12"
    fill="none"
    aria-hidden="true"
  >
    <path d="M5 0L10 6L5 12L0 6L5 0Z" fill="#6155f5" />
  </svg>
);

const CertificateCard = ({
  recipientName,
  role,
  verificationUrl,
  certificateId,
  className,
}: CertificateCardProps) => {
  const { locale } = useLanguage();
  const text = copy[locale];
  const roleLabel = roleLabels[locale][role];
  const uid = useId().replace(/:/g, "");
  const patternId = `pcert-dg-${uid}`;
  const gradientId = `pcert-of-${uid}`;
  const maskId = `pcert-fm-${uid}`;

  return (
    <article
      className={cn("certificate-print-root pcert", className)}
      data-certificate-root="true"
    >
      <style>{`
        .pcert {
          --pcert-bg: #ffffff;
          --pcert-fg: #000000;
          --pcert-primary: #6155f5;
          --pcert-primary-fg: #ffffff;
          --pcert-secondary: #d3d4f6;
          --pcert-secondary-fg: #6155f5;
          --pcert-muted: #737373;
          --pcert-border: #e5e5e5;
          --pcert-radius: 1.975rem;
          position: relative;
          width: 100%;
          aspect-ratio: 22 / 17;
          overflow: hidden;
          border-radius: var(--pcert-radius);
          background: var(--pcert-bg);
          border: 2px solid var(--pcert-primary);
          color: var(--pcert-fg);
          box-shadow: 0 1px 43px 0.5px rgb(211 212 246 / 0.95);
          font-family: var(--font-sans), system-ui, sans-serif;
        }
        .pcert * { box-sizing: border-box; }
        .pcert-dotted {
          position: absolute; inset: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 0;
        }
        .pcert-blob {
          position: absolute; border-radius: 50%;
          background: radial-gradient(88.84% 88.84% at 63.5% 12.5%, #fff 0%, #C2CCFF 100%);
          filter: blur(28px); pointer-events: none; z-index: 1;
        }
        .pcert-blob-tl { width: 18%; height: 24%; top: -8%; left: -6%; opacity: 0.65; }
        .pcert-blob-tr { width: 10%; height: 13%; top: -4%; right: 10%; opacity: 0.4; }
        .pcert-blob-br { width: 15%; height: 19%; bottom: -7%; right: -5%; opacity: 0.55; }
        .pcert-logo-vector {
          position: absolute; top: -1%; right: 5%;
          width: 15%; opacity: 0.04; pointer-events: none; z-index: 1;
        }
        .pcert-diamond { position: absolute; z-index: 5; }
        .pcert-d-tl { top: 2.6%; left: 2%; }
        .pcert-d-tr { top: 2.6%; right: 2%; }
        .pcert-d-bl { bottom: 2.6%; left: 2%; }
        .pcert-d-br { bottom: 2.6%; right: 2%; }
        .pcert-cta {
          position: absolute; bottom: 0; right: 0;
          width: 19%; transform: translate(10%, 16%);
          opacity: 0.5; pointer-events: none; z-index: 2;
        }
        .pcert-inner {
          position: relative; z-index: 10;
          height: 100%;
          padding: 3.5% 5.5% 4%;
          display: flex; flex-direction: column;
        }
        .pcert-header {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 2%; margin-bottom: 2%;
          border-bottom: 1px solid var(--pcert-secondary);
          flex-shrink: 0;
        }
        .pcert-brand { display: flex; align-items: center; gap: 0.75rem; }
        .pcert-logo-img { width: clamp(32px, 5.5%, 48px); height: auto; object-fit: contain; }
        .pcert-brand-name {
          font-family: var(--font-display), var(--font-button), sans-serif;
          font-size: clamp(14px, 2.5vw, 22px);
          letter-spacing: 0.06em; line-height: 1; color: var(--pcert-fg);
        }
        .pcert-brand-name span { color: var(--pcert-primary); }
        .pcert-brand-sub {
          font-family: var(--font-button), sans-serif;
          font-size: clamp(8px, 1.1vw, 10px);
          color: var(--pcert-muted); letter-spacing: 0.14em;
        }
        .pcert-edition-num {
          font-family: var(--font-display), var(--font-button), sans-serif;
          font-size: clamp(24px, 4.8vw, 42px);
          color: var(--pcert-primary); line-height: 1; letter-spacing: 0.04em; text-align: right;
        }
        .pcert-edition-label {
          font-family: var(--font-button), sans-serif;
          font-size: clamp(8px, 1.1vw, 10px);
          color: var(--pcert-muted); letter-spacing: 0.14em; text-align: right;
        }
        .pcert-hero { position: relative; text-align: center; flex-shrink: 0; line-height: 1; }
        .pcert-pycon {
          font-family: var(--font-display), var(--font-button), sans-serif;
          font-size: clamp(40px, 8.4vw, 74px);
          letter-spacing: 0.06em; line-height: 0.88;
          background: linear-gradient(to bottom, #BCC4F4, #EEEEF7 50%, #BCC4F4);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          user-select: none;
        }
        .pcert-float-logo {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, calc(-58% + 20px));
          width: clamp(34px, 5.7%, 50px); height: auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 20px rgba(97,85,245,0.22));
        }
        .pcert-badge-wrap { text-align: center; margin-top: 2.2%; flex-shrink: 0; }
        .pcert-badge {
          display: inline-block;
          background: var(--pcert-primary); color: var(--pcert-primary-fg);
          font-family: var(--font-button), sans-serif;
          font-size: clamp(7px, 0.9vw, 8px); letter-spacing: 0.14em;
          border-radius: 999px; padding: 3px 13px;
        }
        .pcert-eyebrow {
          font-size: clamp(8px, 1vw, 9px); letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--pcert-muted);
          text-align: center; margin-top: 7%; flex-shrink: 0;
        }
        .pcert-body {
          font-size: clamp(11px, 1.5vw, 13px); color: var(--pcert-muted);
          line-height: 1.7; text-align: center; flex-shrink: 0;
        }
        .pcert-body strong { color: var(--pcert-fg); font-weight: 600; }
        .pcert-sep {
          display: flex; align-items: center; gap: 10px;
          margin: 1% auto; max-width: 52%; width: 100%; flex-shrink: 0;
        }
        .pcert-sep::before, .pcert-sep::after {
          content: ''; flex: 1; height: 1px; background: var(--pcert-secondary);
        }
        .pcert-name {
          font-family: var(--font-display), var(--font-button), sans-serif;
          font-size: clamp(22px, 4.3vw, 38px); letter-spacing: 0.04em;
          color: var(--pcert-primary); line-height: 1.1; text-align: center;
          flex-shrink: 0;
        }
        .pcert-role {
          display: inline-block;
          background: var(--pcert-secondary); color: var(--pcert-secondary-fg);
          font-family: var(--font-button), sans-serif;
          font-size: clamp(12px, 1.6vw, 14px); letter-spacing: 0.06em;
          border-radius: 6px; padding: 1px 12px; margin: 0 4px;
        }
        .pcert-meta {
          display: flex; justify-content: center; gap: clamp(1rem, 4vw, 2.5rem);
          margin-top: auto; padding: 1.4% 0;
          border-top: 1px solid var(--pcert-border);
          border-bottom: 1px solid var(--pcert-border);
          flex-shrink: 0;
        }
        .pcert-meta-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .pcert-meta-label {
          font-size: clamp(8px, 1vw, 9px); text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--pcert-muted);
        }
        .pcert-meta-value {
          font-family: var(--font-button), sans-serif;
          font-size: clamp(11px, 1.5vw, 13px); letter-spacing: 0.06em;
          color: var(--pcert-fg);
        }
        .pcert-footer {
          display: flex; align-items: flex-end; justify-content: space-between;
          padding-top: 1.8%; border-top: 1px solid var(--pcert-secondary);
          flex-shrink: 0;
        }
        .pcert-verify-label {
          font-size: clamp(8px, 1vw, 9px); color: var(--pcert-muted);
          margin-top: 2px; letter-spacing: 0.1em; text-transform: uppercase;
          font-family: var(--font-button), sans-serif; text-align: center;
        }
        .pcert-id-label {
          font-size: clamp(8px, 1vw, 9px); text-transform: uppercase;
          letter-spacing: 0.1em; color: var(--pcert-muted);
          margin-bottom: 4px; text-align: right;
        }
        .pcert-id-value {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: clamp(10px, 1.4vw, 12px); font-weight: 600;
          color: var(--pcert-primary); background: var(--pcert-secondary);
          border: 1px solid rgb(97 85 245 / 0.3);
          border-radius: 6px; padding: 4px 12px; letter-spacing: 0.06em;
        }
      `}</style>

      {/* Dotted sheet */}
      <svg
        className="pcert-dotted"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={patternId}
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="12"
              y="12"
              width="5"
              height="5"
              fill="#6155f5"
              transform="rotate(45 13.6 13.6)"
            />
          </pattern>
          <radialGradient id={gradientId} cx="0%" cy="0%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
          mask={`url(#${maskId})`}
          opacity="0.22"
        />
      </svg>

      <div className="pcert-blob pcert-blob-tl" aria-hidden="true" />
      <div className="pcert-blob pcert-blob-tr" aria-hidden="true" />
      <div className="pcert-blob pcert-blob-br" aria-hidden="true" />

      <svg
        className="pcert-logo-vector"
        viewBox="0 0 217 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g opacity="0.3">
          <path
            d="M35.6629 67.8614C71.6052 68.0797 66.0488 67.4223 81.2418 67.2028C79.3408 79.721 77.4399 92.2392 75.4814 105.137C97.8055 104.094 120.13 103.05 143.13 101.976C139.161 137.943 129.85 153.197 123.039 155.645C116.229 158.093 106.842 157.873 88.3193 158.209C82.1699 158.36 76.0206 158.512 69.6849 158.668C64.9678 158.714 60.2506 158.759 55.3905 158.806C53.7664 167.272 53.7008 174.784 50.4688 184.46C43.9398 204.005 41.2537 213.482 22.9098 222.871C7.21463 230.904 -2.946 230.27 -24.1302 230.319C-10.9537 187.33 -0.279437 67.6431 35.6629 67.8614Z"
            fill="#6155f5"
          />
          <path
            d="M166.238 2.02078C177.453 1.70062 177.453 1.70062 188.894 1.37399C194.61 1.28172 200.325 1.18944 206.213 1.09437C204.874 22.8142 197.057 30.9456 190.798 42.1093C184.539 53.273 163.431 57.4395 132.141 58.228C123.967 58.474 115.792 58.7201 107.37 58.9736C97.9834 59.15 97.9834 59.15 88.4072 59.33C100.167 8.81662 114.343 3.22342 166.238 2.02078Z"
            fill="#6155f5"
          />
        </g>
      </svg>

      <Diamond className="pcert-diamond pcert-d-tl" />
      <Diamond className="pcert-diamond pcert-d-tr" />
      <Diamond className="pcert-diamond pcert-d-bl" />
      <Diamond className="pcert-diamond pcert-d-br" />

      {/* biome-ignore lint/performance/noImgElement: decorative certificate asset */}
      <img
        src={assetPath("/images/cta/soft-cylinder.png")}
        className="pcert-cta"
        alt=""
        aria-hidden="true"
      />

      <div className="pcert-inner">
        <div className="pcert-header">
          <div className="pcert-brand">
            {/* biome-ignore lint/performance/noImgElement: certificate asset for PDF capture */}
            <img
              src={assetPath("/images/pycon/logo-flotante.png")}
              className="pcert-logo-img"
              alt=""
              width={48}
              height={48}
            />
            <div>
              <div className="pcert-brand-name">
                PYCON 2026 <span>COLOMBIA</span>
              </div>
              <div className="pcert-brand-sub">{text.brandSub}</div>
            </div>
          </div>
          <div>
            <div className="pcert-edition-num">10TH</div>
            <div className="pcert-edition-label">{text.editionLabel}</div>
          </div>
        </div>

        <div className="pcert-hero">
          <div className="pcert-pycon">PYCON</div>
          {/* biome-ignore lint/performance/noImgElement: certificate asset for PDF capture */}
          <img
            src={assetPath("/images/pycon/logo-flotante.png")}
            className="pcert-float-logo"
            alt=""
            aria-hidden="true"
            width={50}
            height={50}
          />
        </div>

        <div className="pcert-badge-wrap">
          <span className="pcert-badge">{text.locationBadge}</span>
        </div>

        <p className="pcert-eyebrow">{text.eyebrow}</p>
        <p className="pcert-body" style={{ marginTop: 4 }}>
          {text.certifies}
        </p>

        <div className="pcert-sep">
          <Diamond />
        </div>

        <div className="pcert-name">{recipientName.toUpperCase()}</div>

        <div className="pcert-sep">
          <Diamond />
        </div>

        <p className="pcert-body">
          {text.participatedAs}{" "}
          <span className="pcert-role">{roleLabel.toUpperCase()}</span>{" "}
          {locale === "es" ? "en la" : "in the"}{" "}
          <strong>{text.eventStrong}</strong>,
          <br />
          {text.eventRest}
        </p>

        <div className="pcert-meta">
          <div className="pcert-meta-item">
            <span className="pcert-meta-label">{text.metaEvent}</span>
            <span className="pcert-meta-value">{text.metaEventValue}</span>
          </div>
          <div className="pcert-meta-item">
            <span className="pcert-meta-label">{text.metaDates}</span>
            <span className="pcert-meta-value">{text.metaDatesValue}</span>
          </div>
          <div className="pcert-meta-item">
            <span className="pcert-meta-label">{text.metaLocation}</span>
            <span className="pcert-meta-value">{text.metaLocationValue}</span>
          </div>
          <div className="pcert-meta-item">
            <span className="pcert-meta-label">{text.metaVenue}</span>
            <span className="pcert-meta-value">{text.metaVenueValue}</span>
          </div>
        </div>

        <div className="pcert-footer">
          <div style={{ textAlign: "center" }}>
            <CertificateQr url={verificationUrl} size={80} />
            <div className="pcert-verify-label">{text.verify}</div>
          </div>
          <div>
            <div className="pcert-id-label">{text.certIdLabel}</div>
            <div className="pcert-id-value">{certificateId}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CertificateCard;
