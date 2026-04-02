import {
  faGithubAlt,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const KEYNOTE_SOCIAL_ICONS = {
  github: faGithubAlt,
  instagram: faInstagram,
  twitter: faXTwitter,
  youtube: faYoutube,
};

function keynoteFlagAssetPath(code) {
  if (!code || typeof code !== "string") return "";
  const iso = code.slice(0, 2).toLowerCase();
  return `/figma-assets/keynotes/flag-${iso}.svg`;
}

const DEFAULT_TOPIC_ROWS = [
  [
    "Data Science",
    "Scientific Computing",
    "Artificial intelligence",
    "Computer Vision",
    "Core Python",
    "Machine Learning",
    "Video games",
    "Community",
    "Devops",
    "MCP",
    "clean architecture",
  ],
  [
    "Data Science",
    "Core Python",
    "Machine Learning",
    "Video games",
    "Scientific Computing",
    "Artificial intelligence",
    "Computer Vision",
    "Community",
    "Devops",
    "MCP",
    "clean architecture",
  ],
];

const LandingPage = ({ dataTranslate }) => {
  const h = dataTranslate?.landing?.hero ?? {};
  const topicRows = dataTranslate?.landing?.topics?.rows ?? DEFAULT_TOPIC_ROWS;
  const keynotes = dataTranslate?.landing?.keynotes;
  const keynoteColumns = keynotes?.columns ?? keynotes?.rows ?? [];

  return (
    <>
      <div className="content-wrapper top-section">
        <div className="description">
          <Container>
            <section
              className="landing-hero"
              aria-label={h?.conferenceTitle ?? "PyCon conference hero"}
            >
              <div className="landing-hero__stage">
                <img
                  className="landing-hero__wordmark"
                  src="/figma-assets/hero-decorative.svg"
                  alt={h?.wordmarkAlt ?? "PyCon 2026"}
                />
                <div className="landing-hero__visual">
                  <img
                    className="landing-hero__portrait"
                    src="/figma-assets/python-hero.svg"
                    alt={h?.portraitAlt ?? "PyCon speaker portrait"}
                  />
                </div>
                <img
                  className="landing-hero__bottom-glow"
                  src="/figma-assets/hero-bottom-glow.svg"
                  alt=""
                  aria-hidden
                />
                <div className="landing-hero__meta">
                  <div className="landing-hero__date">
                    <span>{h?.dateLine1 ?? "medellin, colombia"}</span>
                    <span>{h?.dateLine2 ?? "24, 25 & 26 JULY - 2026"}</span>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </div>
      </div>

      <section
        className="content-topics"
        aria-label={
          dataTranslate?.landing?.topics?.sectionAriaLabel ??
          "Conference topic tracks"
        }
      >
        <Container fluid="xxl" className="content-topics__container px-0">
          <Row className="justify-content-center g-0">
            <Col xs={12}>
              <div className="topics-marquee">
                <div
                  className="topics-marquee__fade topics-marquee__fade--left"
                  aria-hidden
                />
                <div
                  className="topics-marquee__fade topics-marquee__fade--right"
                  aria-hidden
                />
                <div className="topics-marquee__stack">
                  {topicRows.map((labels, rowIndex) => (
                    <div
                      key={labels.join("|")}
                      className={`topics-marquee__row topics-marquee__row--${rowIndex % 2 === 0 ? "ltr" : "rtl"}`}
                    >
                      <div className="topics-marquee__track">
                        {["primary", "repeat"].map((groupId) => (
                          <div
                            key={groupId}
                            className="topics-marquee__group"
                            aria-hidden={groupId === "repeat"}
                          >
                            {labels.map((label) => (
                              <div
                                key={`${groupId}-${label}`}
                                className="topic-badge"
                              >
                                <span className="topic-badge__label">
                                  {label}
                                </span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {keynoteColumns.length ? (
        <section
          className="landing-keynotes"
          aria-label={keynotes.sectionAriaLabel ?? "Keynote speakers"}
        >
          <div className="landing-keynotes__panel">
            <Container fluid="xxl" className="landing-keynotes__container">
              <header className="landing-keynotes__header">
                <p className="landing-keynotes__eyebrow">{keynotes.eyebrow}</p>
                <h2 className="landing-keynotes__title">{keynotes.title}</h2>
              </header>

              <Row className="landing-keynotes__columns g-4">
                {keynoteColumns.map((column) => {
                  const photoBlock = (
                    <div className="landing-keynotes__photo-card">
                      <img
                        className="landing-keynotes__photo-img"
                        src={column.photo.src}
                        alt={column.photo.alt ?? ""}
                      />
                    </div>
                  );

                  const speakerBlock = (
                    <article className="landing-keynotes__speaker-card">
                      <div className="landing-keynotes__speaker-head">
                        {column.flag?.code ? (
                          <div
                            className="landing-keynotes__flag-wrap"
                            role="img"
                            aria-label={column.flag.label}
                          >
                            <img
                              className="landing-keynotes__flag-img"
                              src={keynoteFlagAssetPath(column.flag.code)}
                              alt=""
                              width={48}
                              height={48}
                              decoding="async"
                            />
                          </div>
                        ) : null}
                        <div className="landing-keynotes__speaker-meta">
                          <p className="landing-keynotes__speaker-name">
                            {column.name}
                          </p>
                          <p className="landing-keynotes__speaker-handle">
                            {column.handle}
                          </p>
                        </div>
                      </div>
                      <p className="landing-keynotes__bio">{column.bio}</p>
                      <ul className="landing-keynotes__social">
                        {(column.social ?? []).map((link) => {
                          const icon = KEYNOTE_SOCIAL_ICONS[link.key];
                          if (!icon) return null;
                          return (
                            <li key={`${column.name}-${link.key}`}>
                              <a
                                className="landing-keynotes__social-link"
                                href={link.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={link.label}
                              >
                                <FontAwesomeIcon icon={icon} />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </article>
                  );

                  return (
                    <Col
                      key={column.name}
                      xs={12}
                      lg={4}
                      className="landing-keynotes__column"
                    >
                      <div
                        className={`landing-keynotes__stack${column.photoFirst ? "" : " landing-keynotes__stack--text-first-desktop"}`}
                      >
                        {photoBlock}
                        {speakerBlock}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </section>
      ) : null}
    </>
  );
};

LandingPage.propTypes = {
  dataTranslate: PropTypes.object.isRequired,
};

export default LandingPage;
