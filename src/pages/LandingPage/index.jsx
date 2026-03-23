import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const DEFAULT_TOPIC_ROWS = [
  [
    'Data Science',
    'Scientific Computing',
    'Artificial intelligence',
    'Computer Vision',
    'Core Python',
    'Machine Learning',
    'Video games',
    'Community',
    'Devops',
    'MCP',
    'clean architecture'
  ],
  [
    'Data Science',
    'Core Python',
    'Machine Learning',
    'Video games',
    'Scientific Computing',
    'Artificial intelligence',
    'Computer Vision',
    'Community',
    'Devops',
    'MCP',
    'clean architecture'
  ]
];

const LandingPage = ({ dataTranslate }) => {
  const h = dataTranslate?.landing?.hero ?? {};
  const topicRows = dataTranslate?.landing?.topics?.rows ?? DEFAULT_TOPIC_ROWS;

  return (
    <>
      <div className="content-wrapper top-section">
        <div className="description">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <section className="landing-hero" aria-labelledby="landing-hero-title">
                  <div className="landing-hero__bottom-glow" aria-hidden />
                  <div className="landing-hero__stage">
                    <div className="landing-hero__deco landing-hero__deco--tl" aria-hidden />
                    <img
                      className="landing-hero__wordmark"
                      src="/figma-assets/hero-pycon-wordmark.svg"
                      alt={h.wordmarkAlt ?? 'PYCON'}
                      width={1155}
                      height={305}
                    />
                    <div className="landing-hero__content-row">
                      <div className="landing-hero__meta">
                        <h1 className="landing-hero__title" id="landing-hero-title">
                          {h.conferenceTitle ?? 'pycon COLOMBIA'}
                        </h1>
                        <p className="landing-hero__tagline">
                          {h.tagline ??
                            'The most and biggest Python conference in Colombia.'}
                        </p>
                      </div>
                      <div className="landing-hero__visual">
                        <div className="landing-hero__deco landing-hero__deco--blob-sm" aria-hidden />
                        <img
                          className="landing-hero__portrait"
                          src="/figma-assets/python-hero.png"
                          alt=""
                          width={407}
                          height={362}
                        />
                        <div className="landing-hero__deco landing-hero__deco--blob-lg" aria-hidden />
                        <img
                          className="landing-hero__year-mark"
                          src="/figma-assets/hero-26.svg"
                          alt=""
                          width={67}
                          height={59}
                        />
                      </div>
                    </div>
                    <div className="landing-hero__date">
                      <span>{h.dateLine1 ?? 'medellin, colombia'}</span>
                      <span>{h.dateLine2 ?? '24, 25 & 26 JULY - 2026'}</span>
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <section
        className="content-topics"
        aria-label={dataTranslate?.landing?.topics?.sectionAriaLabel ?? 'Conference topic tracks'}
      >
        <Container fluid="xxl" className="content-topics__container px-0">
          <Row className="justify-content-center g-0">
            <Col xs={12}>
              <div className="topics-marquee">
                <div className="topics-marquee__fade topics-marquee__fade--left" aria-hidden />
                <div className="topics-marquee__fade topics-marquee__fade--right" aria-hidden />
                <div className="topics-marquee__stack">
                  {topicRows.map((labels, rowIndex) => (
                    <div
                      key={labels.join('|')}
                      className={`topics-marquee__row topics-marquee__row--${rowIndex % 2 === 0 ? 'ltr' : 'rtl'}`}
                    >
                      <div className="topics-marquee__track">
                        {['primary', 'repeat'].map((groupId) => (
                          <div
                            key={groupId}
                            className="topics-marquee__group"
                            aria-hidden={groupId === 'repeat'}
                          >
                            {labels.map((label) => (
                              <div key={`${groupId}-${label}`} className="topic-badge">
                                <span className="topic-badge__label">{label}</span>
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
  dataTranslate: PropTypes.object.isRequired
};

export default LandingPage;
