import PropTypes from "prop-types";
import {
  GOLD_SPONSORS,
  PLATINO_SPONSORS,
  SILVER_PLUS_SPONSORS,
  SILVER_SPONSORS,
  VENUE_SPONSORS,
} from "@/data/sponsors";

export const DEFAULT_SPONSORS_SECTION_COPY = {
  venueLevel: "Venue",
  platinoLevel: "Platinum",
  goldPartners: "Gold",
  silverPlusPartners: "Silver +",
  silverPartners: "Silver",
};

const SponsorCard = ({ name, logoSrc, variant, href }) => (
  <a
    className="sponsors-page__sponsor-link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${name} (opens in a new tab)`}
  >
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
  </a>
);

SponsorCard.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["venue", "platino", "gold", "silver", "silverPlus"])
    .isRequired,
};

export default function SponsorsSection({ copy }) {
  const s = { ...DEFAULT_SPONSORS_SECTION_COPY, ...(copy ?? {}) };

  return (
    <section className="sponsors-page__sections" aria-label="Sponsors">
      <div className="sponsors-page__diamond-block">
        <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--diamond">
          <span className="sponsors-page__tier-rule-grey" aria-hidden={true} />
          <span className="sponsors-page__tier-label">{s.venueLevel}</span>
        </h2>
        <div className="sponsors-page__diamond-panel">
          <div className="sponsors-page__diamond-grid sponsors-page__diamond-grid--single">
            {VENUE_SPONSORS.map((item) => (
              <SponsorCard
                key={item.key}
                name={item.name}
                logoSrc={item.logoSrc}
                href={item.href}
                variant="venue"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="sponsors-page__platino">
        <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--gold">
          <span className="sponsors-page__tier-rule-grey" aria-hidden={true} />
          <span className="sponsors-page__tier-label">{s.platinoLevel}</span>
        </h2>
        <div className="sponsors-page__gold-grid sponsors-page__gold-grid--single">
          {PLATINO_SPONSORS.map((item) => (
            <SponsorCard
              key={item.key}
              name={item.name}
              logoSrc={item.logoSrc}
              href={item.href}
              variant="platino"
            />
          ))}
        </div>
      </div>

      <div className="sponsors-page__gold">
        <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--gold">
          <span className="sponsors-page__tier-rule-grey" aria-hidden={true} />
          <span className="sponsors-page__tier-label">{s.goldPartners}</span>
        </h2>
        <div className="sponsors-page__gold-grid sponsors-page__gold-grid--single">
          {GOLD_SPONSORS.map((item) => (
            <SponsorCard
              key={item.key}
              name={item.name}
              logoSrc={item.logoSrc}
              href={item.href}
              variant="gold"
            />
          ))}
        </div>
      </div>

      <div className="sponsors-page__silver-plus">
        <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--gold">
          <span className="sponsors-page__tier-rule-grey" aria-hidden={true} />
          <span className="sponsors-page__tier-label">
            {s.silverPlusPartners}
          </span>
        </h2>
        <div className="sponsors-page__gold-grid sponsors-page__gold-grid--single">
          {SILVER_PLUS_SPONSORS.map((item) => (
            <SponsorCard
              key={item.key}
              name={item.name}
              logoSrc={item.logoSrc}
              href={item.href}
              variant="silverPlus"
            />
          ))}
        </div>
      </div>

      <div className="sponsors-page__silver">
        <h2 className="sponsors-page__tier-heading sponsors-page__tier-heading--gold">
          <span className="sponsors-page__tier-rule-grey" aria-hidden={true} />
          <span className="sponsors-page__tier-label">{s.silverPartners}</span>
        </h2>
        <div className="sponsors-page__gold-grid sponsors-page__gold-grid--silver">
          {SILVER_SPONSORS.map((item) => (
            <SponsorCard
              key={item.key}
              name={item.name}
              logoSrc={item.logoSrc}
              href={item.href}
              variant="silver"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

SponsorsSection.propTypes = {
  copy: PropTypes.shape({
    venueLevel: PropTypes.string,
    platinoLevel: PropTypes.string,
    goldPartners: PropTypes.string,
    silverPlusPartners: PropTypes.string,
    silverPartners: PropTypes.string,
  }),
};

