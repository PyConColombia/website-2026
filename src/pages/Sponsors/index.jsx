import PropTypes from "prop-types";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import LanguageContext from "@/LanguageContext";

const VENUE_SPONSORS = [
  {
    key: "eafit",
    name: "Universidad EAFIT",
    logoSrc: "/images/sponsors/eafit.svg",
  },
];

const PLATINO_SPONSORS = [
  {
    key: "aimpoint",
    name: "Aimpoint",
    logoSrc: "/images/sponsors/aimpoint.svg",
  },
];

const GOLD_SPONSORS = [
  { key: "loka", name: "Loka", logoSrc: "/images/sponsors/loka.svg" },
];

const SILVER_SPONSORS = [
  {
    key: "genlogs",
    name: "Genlogs",
    logoSrc: "/images/sponsors/genlogs.svg",
  },
  {
    key: "provectus",
    name: "Provectus",
    logoSrc: "/images/sponsors/provectus.svg",
  },
];

const SponsorTextCard = ({ name, logoSrc, variant }) => (
  <article
    className={`sponsors-page__sponsor-card${variant ? ` sponsors-page__sponsor-card--${variant}` : ""}`}
  >
    <img
      src={logoSrc}
      alt={name}
      className="sponsors-page__sponsor-card-logo"
      loading="lazy"
      decoding="async"
    />
  </article>
);

SponsorTextCard.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["venue", "platino", "gold", "silver"]),
};

const ArrowOutwardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden={true}
  >
    <path
      d="M7 17 17 7M17 7H7M17 7v10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DEFAULT_SPONSORS_COPY = {
  metaTitle: "PyCon Colombia 2026 - Sponsors",
  heroTitleTrustedBy: "Trusted by",
  heroTitleIndustry: "industry",
  heroTitleLeaders: "leaders.",
  heroLead:
    "PyCon Colombia is made possible through the generous support of organizations dedicated to advancing the Python ecosystem and fostering technological innovation in Latin America.",
  becomeSponsorCta: "Become a Sponsor",
  venueLevel: "Venue",
  platinoLevel: "Platinum",
  goldPartners: "Gold",
  silverPartners: "Silver",
};

const Sponsors = ({ dataTranslate }) => {
  const { language } = useContext(LanguageContext);
  const s = { ...DEFAULT_SPONSORS_COPY, ...dataTranslate?.sponsors };
  const email = dataTranslate?.footer?.email ?? "hello@pycon.co";
  const sponsorMailto = `mailto:${email}?subject=${encodeURIComponent(
    language === "es"
      ? "Patrocinio PyCon Colombia 2026"
      : "PyCon Colombia 2026 Sponsorship",
  )}`;

  return (
    <>
      <Helmet>
        <title>{s.metaTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="sponsors-page">
        <div className="sponsors-page__inner">
          <header className="sponsors-page__hero">
            <div className="sponsors-page__hero-copy">
              <h1 className="sponsors-page__title">
                {s.heroTitleTrustedBy}{" "}
                <span className="sponsors-page__title-accent">
                  {s.heroTitleIndustry}
                </span>{" "}
                {s.heroTitleLeaders}
              </h1>
              <p className="sponsors-page__lead">{s.heroLead}</p>
            </div>
            <div className="sponsors-page__hero-cta-wrap">
              <a className="sponsors-page__cta" href={sponsorMailto}>
                {s.becomeSponsorCta}
                <ArrowOutwardIcon />
              </a>
            </div>
          </header>

          <section className="sponsors-page__sections" aria-label="Sponsors">
            <div className="sponsors-page__diamond-block">
              <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--diamond">
                <span
                  className="sponsors-page__tier-rule-grey"
                  aria-hidden={true}
                />
                <span className="sponsors-page__tier-label">
                  {s.venueLevel}
                </span>
              </h2>
              <div className="sponsors-page__diamond-panel">
                <div className="sponsors-page__diamond-grid sponsors-page__diamond-grid--single">
                  {VENUE_SPONSORS.map((item) => (
                    <SponsorTextCard
                      key={item.key}
                      name={item.name}
                      logoSrc={item.logoSrc}
                      variant="venue"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="sponsors-page__platino">
              <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--gold">
                <span
                  className="sponsors-page__tier-rule-grey"
                  aria-hidden={true}
                />
                <span className="sponsors-page__tier-label">
                  {s.platinoLevel}
                </span>
              </h2>
              <div className="sponsors-page__gold-grid sponsors-page__gold-grid--single">
                {PLATINO_SPONSORS.map((item) => (
                  <SponsorTextCard
                    key={item.key}
                    name={item.name}
                    logoSrc={item.logoSrc}
                    variant="platino"
                  />
                ))}
              </div>
            </div>

            <div className="sponsors-page__gold">
              <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--gold">
                <span
                  className="sponsors-page__tier-rule-grey"
                  aria-hidden={true}
                />
                <span className="sponsors-page__tier-label">
                  {s.goldPartners}
                </span>
              </h2>
              <div className="sponsors-page__gold-grid sponsors-page__gold-grid--single">
                {GOLD_SPONSORS.map((item) => (
                  <SponsorTextCard
                    key={item.key}
                    name={item.name}
                    logoSrc={item.logoSrc}
                    variant="gold"
                  />
                ))}
              </div>
            </div>

            <div className="sponsors-page__silver">
              <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--gold">
                <span
                  className="sponsors-page__tier-rule-grey"
                  aria-hidden={true}
                />
                <span className="sponsors-page__tier-label">
                  {s.silverPartners}
                </span>
              </h2>
              <div className="sponsors-page__gold-grid sponsors-page__gold-grid--silver">
                {SILVER_SPONSORS.map((item) => (
                  <SponsorTextCard
                    key={item.key}
                    name={item.name}
                    logoSrc={item.logoSrc}
                    variant="silver"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

Sponsors.propTypes = {
  dataTranslate: PropTypes.shape({
    sponsors: PropTypes.object,
    footer: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
};

export default Sponsors;
