import {
  faGithubAlt,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Image } from "@/components/Image";
import SponsorsSection from "@/components/SponsorsSection";
import LandingPhotoCarousel from "./components/LandingPhotoCarousel";

const KEYNOTE_SOCIAL_ICONS = {
  github: faGithubAlt,
  instagram: faInstagram,
  linkedin: faLinkedin,
  twitter: faXTwitter,
  website: faGlobe,
  youtube: faYoutube,
};

function keynoteFlagAssetPath(code) {
  if (!code || typeof code !== "string") return "";
  return `/images/keynotes/flag-${code.toLowerCase()}.svg`;
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

const DEFAULT_CFP_HERO = {
  submitProposalHref: "/call-for-proposals",
  guideHref: "/call-for-proposals#cfp-formats",
  badge: "Now Accepting Submissions",
  titleBefore: "Call for",
  titleAccent: "Proposals",
  titleYear: "2026",
  lead: "Share your knowledge, inspire the community, and help shape the future of Python in Latin America. Join us in the majestic Andes for PyCon Colombia 2026.",
  ctaPrimary: "Submit Your Proposal",
  ctaSecondary: "View Submission Guide",
  imageSrc: "/images/cfp.jpg",
  imageAlt: "Modern conference hall",
};

function KeynotesRevealRow({ columns }) {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cols = root.querySelectorAll("[data-keynote-reveal]");
    if (!cols.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const name = entry.target.getAttribute("data-keynote-name");
          if (!name) continue;
          setVisible((prev) => (prev[name] ? prev : { ...prev, [name]: true }));
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const el of cols) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Row ref={rootRef} className="landing-keynotes__columns g-4">
      {columns.map((column, columnIndex) => {
        const photoBlock = (
          <div className="landing-keynotes__photo-card">
            <Image
              className="landing-keynotes__photo-img"
              src={column.photo.src}
              alt={column.photo.alt ?? ""}
              layout="fullWidth"
              aspectRatio={3 / 4}
              objectFit="cover"
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
                  <Image
                    className="landing-keynotes__flag-img"
                    src={keynoteFlagAssetPath(column.flag.code)}
                    alt=""
                    width={48}
                    height={48}
                    layout="fixed"
                  />
                </div>
              ) : null}
              <div className="landing-keynotes__speaker-meta">
                <p className="landing-keynotes__speaker-name">{column.name}</p>
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
            className={`landing-keynotes__column${visible[column.name] ? " landing-keynotes__column--visible" : ""}`}
            data-keynote-reveal
            data-keynote-name={column.name}
            style={{
              "--keynote-reveal-delay": `${columnIndex * 0.09}s`,
            }}
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
  );
}

KeynotesRevealRow.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const LandingPage = ({ dataTranslate }) => {
  const h = dataTranslate?.landing?.hero ?? {};
  const topicRows = dataTranslate?.landing?.topics?.rows ?? DEFAULT_TOPIC_ROWS;
  const cfpPage = dataTranslate?.callForProposalsPage ?? {};
  const cfpHero = {
    ...DEFAULT_CFP_HERO,
    submitProposalHref:
      cfpPage.submitProposalHref ?? DEFAULT_CFP_HERO.submitProposalHref,
    ...cfpPage.hero,
  };
  const keynotes = dataTranslate?.landing?.keynotes;
  const keynoteColumns = keynotes?.columns ?? keynotes?.rows ?? [];
  const keynotesRevealKey = keynoteColumns.map((c) => c.name).join("|");
  const gallery = dataTranslate?.landing?.gallery;

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
                <Image
                  className="landing-hero__wordmark"
                  src="/images/hero-decorative.svg"
                  alt={h?.wordmarkAlt ?? "PyCon 2026"}
                  width={1252}
                  height={420}
                  priority
                />
                <div className="landing-hero__visual">
                  <Image
                    className="landing-hero__portrait"
                    src="/images/python-hero.svg"
                    alt={h?.portraitAlt ?? "PyCon speaker portrait"}
                    width={430}
                    height={400}
                    priority
                  />
                </div>
                <Image
                  className="landing-hero__bottom-glow"
                  src="/images/hero-bottom-glow.svg"
                  alt=""
                  width={257}
                  height={220}
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

      <section aria-label={`${cfpHero.titleBefore} ${cfpHero.titleAccent}`}>
        <Container fluid="xxl">
          <header className="cfp-hero coc-page__hero--tracked">
            <div className="cfp-hero__glow" aria-hidden>
              <span className="cfp-hero__glow-blob" />
            </div>
            <Row className="cfp-hero__row align-items-center g-5 g-lg-0">
              <Col lg={7}>
                <div className="cfp-hero__badge">
                  <span className="cfp-hero__pulse" aria-hidden />
                  {cfpHero.badge}
                </div>
                <h2 className="cfp-hero__title">
                  {cfpHero.titleBefore}{" "}
                  <span className="cfp-hero__title-accent">
                    {cfpHero.titleAccent}
                  </span>{" "}
                  {cfpHero.titleYear}
                </h2>
                <p className="cfp-hero__lead">{cfpHero.lead}</p>
                <div className="cfp-hero__actions">
                  <a
                    className="cfp-btn cfp-btn--primary"
                    href={cfpHero.submitProposalHref}
                  >
                    {cfpHero.ctaPrimary}{" "}
                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden />
                  </a>
                  {/* <a className="cfp-btn cfp-btn--secondary" href={cfpHero.guideHref}>
                    {cfpHero.ctaSecondary}
                  </a> */}
                </div>
              </Col>
              <Col lg={5}>
                <div className="cfp-hero__visual">
                  <img
                    src={cfpHero.imageSrc}
                    alt={cfpHero.imageAlt}
                    className="cfp-hero__img"
                    width={640}
                    height={640}
                  />
                  <div className="cfp-hero__img-overlay" aria-hidden />
                </div>
              </Col>
            </Row>
          </header>
        </Container>
      </section>

      <LandingPhotoCarousel
        sectionAriaLabel={gallery?.sectionAriaLabel}
        modalCloseLabel={gallery?.modalCloseLabel}
        imageAltTemplate={gallery?.imageAltTemplate}
        altBySrc={gallery?.altBySrc}
      />

      <div className="landing-gallery__album-link-wrap">
        <p className="landing-gallery__album-link-text">
          Relive the best moments of PyCon Colombia by exploring our official
          photo album{" "}
          <a
            href="https://rebrand.ly/pycon-colombia-2025-photos"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>
          .
        </p>
      </div>

      {keynoteColumns.length ? (
        <section
          className="landing-keynotes"
          aria-label={keynotes.sectionAriaLabel ?? "Keynote speakers"}
        >
          <div className="landing-keynotes__panel">
            <Container fluid="xxl" className="landing-keynotes__container">
              <header className="landing-keynotes__header">
                <h2 className="landing-keynotes__title">{keynotes.title}</h2>
              </header>

              <KeynotesRevealRow
                key={keynotesRevealKey}
                columns={keynoteColumns}
              />
            </Container>
          </div>
        </section>
      ) : null}

      <div className="sponsors-page">
        <div className="sponsors-page__inner">
          <header className="landing-sponsors__header">
            <h2 className="landing-sponsors__title">
              {dataTranslate?.sponsors?.title ?? "Sponsors"}
            </h2>
          </header>
          <SponsorsSection copy={dataTranslate?.sponsors} />
        </div>
      </div>
    </>
  );
};

LandingPage.propTypes = {
  dataTranslate: PropTypes.object.isRequired,
};

export default LandingPage;
