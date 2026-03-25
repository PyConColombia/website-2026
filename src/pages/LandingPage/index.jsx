import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
                <div className="landing-hero__bottom-glow" aria-hidden />
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
    </>
  );
};

LandingPage.propTypes = {
  dataTranslate: PropTypes.object.isRequired,
};

export default LandingPage;
