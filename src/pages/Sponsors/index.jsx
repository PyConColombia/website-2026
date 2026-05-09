import PropTypes from "prop-types";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import SponsorsSection, {
  DEFAULT_SPONSORS_SECTION_COPY,
} from "@/components/SponsorsSection";
import LanguageContext from "@/LanguageContext";

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
  ...DEFAULT_SPONSORS_SECTION_COPY,
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
              <a className="cfp-btn cfp-btn--primary" href={sponsorMailto}>
                {s.becomeSponsorCta}
                <ArrowOutwardIcon />
              </a>
            </div>
          </header>

          <SponsorsSection copy={s} />
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
