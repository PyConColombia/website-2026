import {
  faBrain,
  faBullhorn,
  faCheck,
  faChevronDown,
  faCloud,
  faComments,
  faDatabase,
  faEnvelope,
  faFileLines,
  faFlask,
  faGlobe,
  faMicrochip,
  faPaperPlane,
  faRectangleList,
  faScrewdriverWrench,
  faShieldHalved,
  faTerminal,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DEFAULT_COPY = {
  metaTitle: "Call for Proposals | PyCon Colombia 2026",
  submitProposalHref: "https://forms.gle/vSGrrWfAf6nZZ5M86",
  hero: {
    badge: "Now Accepting Submissions",
    titleBefore: "Call for",
    titleAccent: "Proposals",
    titleYear: "2026",
    lead: "Share your knowledge, inspire the community, and help shape the future of Python in Latin America. Join us in the majestic Andes for PyCon Colombia 2026.",
    ctaPrimary: "Submit Your Proposal",
    ctaSecondary: "View Submission Guide",
    imageSrc: "/images/cfp.jpg",
    imageAlt: "Modern conference hall",
  },
  why: {
    title: "Why speak at PyCon Colombia?",
    paragraphs: [
      "PyCon Colombia is the largest gathering of Pythonistas in the region. Speaking here isn't just about sharing code—it's about building bridges, mentoring the next generation, and contributing to one of the most vibrant tech ecosystems in the world.",
      "We welcome speakers of all backgrounds and experience levels. Whether you're a first-time speaker or a seasoned professional, our community is here to support you.",
    ],
  },
  helpCard: {
    title: "Need Help?",
    body: "Read our speaker FAQ or reach out to our team for guidance on your submission.",
    faqLinkText: "Read the FAQ",
  },
  channels: {
    title: "Key Channels",
    items: [
      {
        icon: "mail",
        label: "speakers@pycon.co",
        href: "mailto:speakers@pycon.co",
      },
    ],
  },
  dates: {
    title: "Important Dates",
    subtitle: "Mark your calendars. Late submissions will not be accepted.",
    items: [
      {
        date: "MARCH 23, 2026",
        title: "CFP Opens",
        body: "Start drafting your session ideas and speaker bios.",
        dotPrimary: true,
        borderPrimary: false,
      },
      {
        date: "APRIL 28, 2026",
        title: "Submission Deadline",
        body: "All proposals must be submitted via the portal by midnight COT.",
        dotPrimary: false,
        borderPrimary: false,
      },
      {
        date: "JULY 24-26, 2026",
        title: "PyCon Colombia",
        body: "The main event takes place in Medellín.",
        dotPrimary: true,
        borderPrimary: true,
      },
    ],
  },
  formats: {
    title: "Session Formats",
    items: [
      {
        icon: "talk",
        title: "Talks",
        body: "Standard 30-minute presentations followed by Q&A. Perfect for case studies, new libraries, or deep dives into specific Python features.",
        tags: ["30 MINS", "Q&A INCLUDED"],
      },
      {
        icon: "workshop",
        title: "Workshops",
        body: "Intensive 3-hour hands-on sessions. Guided learning experiences where participants follow along on their own laptops.",
        tags: ["180 MINS", "HANDS-ON"],
      },
    ],
  },
  topics: {
    title: "What are we looking for?",
    lead: "We value diversity of thought. While we accept any Python-related topic, these are some themes the community is particularly excited about this year.",
    quoteBefore:
      "We prioritize content that is actionable, well-structured, and respectful of our ",
    quoteAfter: ".",
    codeOfConductLabel: "Code of Conduct",
    items: [
      { key: "ds", title: "Data Science & AI" },
      { key: "web", title: "Web Development" },
      { key: "devops", title: "DevOps & Infra" },
      { key: "sec", title: "Cybersecurity" },
      { key: "sci", title: "Scientific Python" },
      { key: "edu", title: "Education & Soft Skills" },
      { key: "iot", title: "IoT & Hardware" },
      { key: "core", title: "Core Python" },
      { key: "oss", title: "Open Source Culture" },
    ],
  },
  selection: {
    title: "The Selection Process",
    steps: [
      {
        title: "Anonymized Review",
        body: "To ensure fairness, initial reviews are done without seeing speaker names or affiliations.",
      },
      {
        title: "Community Feedback",
        body: "A panel of experts and community members provide scores based on technical depth and relevance.",
      },
      {
        title: "Final Curation",
        body: "The program committee selects a balanced mix of topics and experience levels for the final schedule.",
      },
    ],
  },
  benefits: {
    title: "Speaker Benefits",
    items: [
      "Full Conference Pass: Access to all talks, workshops, and social events.",
      "Exclusive Speaker Dinner: Network with keynote speakers and the core team.",
    ],
    cta: "Ready to Apply?",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about presenting at PyCon Colombia.",
    items: [
      {
        q: "In which language should I submit my proposal and give my talk?",
        a: "PyCon Colombia is a bilingual conference. We accept proposals in both Spanish and English. You are free to choose the language you feel most comfortable with for your presentation.",
      },
      {
        q: "Can I submit more than one proposal?",
        a: "Yes! You can submit multiple proposals. However, to ensure a diverse schedule, we usually limit speakers to one presentation in the final program.",
      },
      {
        q: "What criteria are used to evaluate the proposals?",
        a: "Proposals are evaluated based on their relevance to the community, technical quality, clarity of the abstract, and the educational value of the talk. We look for a balance of topics ranging from beginner to advanced.",
      },
      {
        q: "I have never spoken at a conference before. Can I apply?",
        a: "Absolutely! We love first-time speakers. We even offer speaker mentorship programs to help you refine your presentation and delivery before the big day.",
      },
      {
        q: "Are sessions recorded?",
        a: "Yes, unless specifically requested otherwise, all talks are recorded and published on our YouTube channel after the conference for the benefit of the global Python community.",
      },
    ],
    footerLead: "Still have questions? We're here to help.",
    footerLink: "Email the Speaker Committee",
  },
};

const CHANNEL_ICONS = {
  mail: faEnvelope,
  forum: faComments,
  doc: faFileLines,
};

const FORMAT_ICONS = {
  talk: faBullhorn,
  workshop: faScrewdriverWrench,
  poster: faRectangleList,
};

const TOPIC_ICONS = [
  faDatabase,
  faGlobe,
  faCloud,
  faShieldHalved,
  faFlask,
  faBrain,
  faMicrochip,
  faTerminal,
  faWandMagicSparkles,
];

function mergeCopy(raw) {
  const b = DEFAULT_COPY;
  if (!raw || typeof raw !== "object") return b;
  return {
    ...b,
    ...raw,
    hero: { ...b.hero, ...raw.hero },
    why: {
      ...b.why,
      ...raw.why,
      paragraphs: raw.why?.paragraphs ?? b.why.paragraphs,
    },
    helpCard: { ...b.helpCard, ...raw.helpCard },
    channels: {
      ...b.channels,
      ...raw.channels,
      items: raw.channels?.items ?? b.channels.items,
    },
    dates: {
      ...b.dates,
      ...raw.dates,
      items: raw.dates?.items ?? b.dates.items,
    },
    formats: {
      ...b.formats,
      ...raw.formats,
      items: raw.formats?.items ?? b.formats.items,
    },
    topics: {
      ...b.topics,
      ...raw.topics,
      items: raw.topics?.items ?? b.topics.items,
    },
    selection: {
      ...b.selection,
      ...raw.selection,
      steps: raw.selection?.steps ?? b.selection.steps,
    },
    benefits: {
      ...b.benefits,
      ...raw.benefits,
      items: raw.benefits?.items ?? b.benefits.items,
    },
    faq: {
      ...b.faq,
      ...raw.faq,
      items: raw.faq?.items ?? b.faq.items,
    },
  };
}

const CallForProposals = ({ dataTranslate = undefined }) => {
  const c = mergeCopy(dataTranslate?.callForProposalsPage);
  const handleFaqLinkClick = (event) => {
    event.preventDefault();
    const faqSection = document.getElementById("cfp-faq");
    if (!faqSection) return;
    faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.location.hash !== "#cfp-faq") {
      window.history.replaceState(null, "", "#cfp-faq");
    }
  };

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
      </Helmet>
      <div className="coc-page cfp-page">
        <Container fluid="xxl" className="coc-page__container">
          <header className="cfp-hero coc-page__hero--tracked">
            <div className="cfp-hero__glow" aria-hidden>
              <span className="cfp-hero__glow-blob" />
            </div>
            <Row className="cfp-hero__row align-items-center g-5 g-lg-0">
              <Col lg={7}>
                <div className="cfp-hero__badge">
                  <span className="cfp-hero__pulse" aria-hidden />
                  {c.hero.badge}
                </div>
                <h1 className="cfp-hero__title">
                  {c.hero.titleBefore}{" "}
                  <span className="cfp-hero__title-accent">
                    {c.hero.titleAccent}
                  </span>{" "}
                  {c.hero.titleYear}
                </h1>
                <p className="cfp-hero__lead">{c.hero.lead}</p>
                <div className="cfp-hero__actions">
                  <a
                    className="cfp-btn cfp-btn--primary"
                    href={c.submitProposalHref}
                  >
                    {c.hero.ctaPrimary}{" "}
                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden />
                  </a>
                  {/* <a className="cfp-btn cfp-btn--secondary" href="#cfp-formats">
                    {c.hero.ctaSecondary}
                  </a> */}
                </div>
              </Col>
              <Col lg={5}>
                <div className="cfp-hero__visual">
                  <img
                    src={c.hero.imageSrc}
                    alt={c.hero.imageAlt}
                    className="cfp-hero__img"
                    width={640}
                    height={640}
                  />
                  <div className="cfp-hero__img-overlay" aria-hidden />
                </div>
              </Col>
            </Row>
          </header>

          <section className="cfp-section" aria-labelledby="cfp-why-heading">
            <Row className="g-4 g-lg-4">
              <Col lg={8}>
                <div className="cfp-bento-main">
                  <h2 className="cfp-section__h2" id="cfp-why-heading">
                    {c.why.title}
                  </h2>
                  {c.why.paragraphs.map((p) => (
                    <p key={p} className="cfp-bento-main__p">
                      {p}
                    </p>
                  ))}
                </div>
              </Col>
              <Col lg={4}>
                <div className="cfp-help-block">
                  <FontAwesomeIcon
                    className="cfp-help-block__bg-icon"
                    icon={faComments}
                    aria-hidden
                  />
                  <h3 className="cfp-help-block__title">{c.helpCard.title}</h3>
                  <p className="cfp-help-block__body">{c.helpCard.body}</p>
                  <button
                    className="cfp-help-block__link"
                    type="button"
                    onClick={handleFaqLinkClick}
                  >
                    {c.helpCard.faqLinkText}
                  </button>
                </div>
                <div className="cfp-channels">
                  <h3 className="cfp-channels__title">{c.channels.title}</h3>
                  <ul className="cfp-channels__list">
                    {c.channels.items.map((item) => {
                      const Icon = CHANNEL_ICONS[item.icon] ?? faEnvelope;
                      const inner = (
                        <>
                          <span className="cfp-channels__icon" aria-hidden>
                            <FontAwesomeIcon icon={Icon} />
                          </span>
                          <span className="cfp-channels__label">
                            {item.label}
                          </span>
                        </>
                      );
                      return (
                        <li key={item.label}>
                          {item.href ? (
                            <a className="cfp-channels__row" href={item.href}>
                              {inner}
                            </a>
                          ) : (
                            <span className="cfp-channels__row cfp-channels__row--static">
                              {inner}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Col>
            </Row>
          </section>

          <section
            className="cfp-section cfp-section--alt"
            aria-labelledby="cfp-dates-heading"
          >
            <div className="cfp-section__intro cfp-section__intro--center">
              <h2
                className="cfp-section__h2 cfp-section__h2--xl"
                id="cfp-dates-heading"
              >
                {c.dates.title}
              </h2>
              <p className="cfp-section__sub">{c.dates.subtitle}</p>
            </div>
            <Row className="cfp-timeline g-4">
              {c.dates.items.map((item) => (
                <Col md={6} xl={4} key={item.date}>
                  <article
                    className={`cfp-timeline__item${item.borderPrimary ? " cfp-timeline__item--border-primary" : ""}${item.dotPrimary ? " cfp-timeline__item--dot-primary" : ""}`}
                  >
                    <span className="cfp-timeline__dot" aria-hidden />
                    <span className="cfp-timeline__date">{item.date}</span>
                    <h4 className="cfp-timeline__title">{item.title}</h4>
                    <p className="cfp-timeline__body">{item.body}</p>
                  </article>
                </Col>
              ))}
            </Row>
          </section>

          <section
            className="cfp-section"
            id="cfp-formats"
            aria-labelledby="cfp-formats-heading"
          >
            <h2
              className="cfp-section__h2 cfp-section__h2--center"
              id="cfp-formats-heading"
            >
              {c.formats.title}
            </h2>
            <Row className="g-4 mt-1">
              {c.formats.items.map((item) => {
                const Icon = FORMAT_ICONS[item.icon] ?? faBullhorn;
                return (
                  <Col md={6} key={item.title}>
                    <article className="cfp-format-card">
                      <div className="cfp-format-card__icon" aria-hidden>
                        <FontAwesomeIcon icon={Icon} />
                      </div>
                      <h3 className="cfp-format-card__title">{item.title}</h3>
                      <p className="cfp-format-card__body">{item.body}</p>
                      <div className="cfp-format-card__tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="cfp-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Col>
                );
              })}
            </Row>
          </section>

          <section
            className="cfp-section cfp-section--inverse"
            aria-labelledby="cfp-topics-heading"
          >
            <Row className="g-5 align-items-start">
              <Col lg={4}>
                <h2
                  className="cfp-section__h2 cfp-section__h2--inverse-xl"
                  id="cfp-topics-heading"
                >
                  {c.topics.title}
                </h2>
                <p className="cfp-section__lead-inverse">{c.topics.lead}</p>
                <blockquote className="cfp-quote">
                  <p>
                    {c.topics.quoteBefore}
                    <Link to="/code-of-conduct">
                      {c.topics.codeOfConductLabel}
                    </Link>
                    {c.topics.quoteAfter}
                  </p>
                </blockquote>
              </Col>
              <Col lg={8}>
                <Row className="g-3 g-md-3">
                  {c.topics.items.map((topic, i) => {
                    const Icon = TOPIC_ICONS[i] ?? faWandMagicSparkles;
                    return (
                      <Col xs={6} md={4} key={topic.key}>
                        <div className="cfp-topic-tile">
                          <FontAwesomeIcon
                            className="cfp-topic-tile__icon"
                            icon={Icon}
                            aria-hidden
                          />
                          <h4 className="cfp-topic-tile__title">
                            {topic.title}
                          </h4>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </section>

          <section
            className="cfp-section cfp-section--split"
            aria-labelledby="cfp-selection-heading"
          >
            <Row className="g-5">
              <Col lg={6}>
                <h2 className="cfp-section__h2" id="cfp-selection-heading">
                  {c.selection.title}
                </h2>
                <ol className="cfp-steps">
                  {c.selection.steps.map((step, index) => (
                    <li key={step.title} className="cfp-steps__item">
                      <span className="cfp-steps__num" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="cfp-steps__title">{step.title}</h4>
                        <p className="cfp-steps__body">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Col>
              <Col lg={6}>
                <div className="cfp-benefits">
                  <h2 className="cfp-section__h2">{c.benefits.title}</h2>
                  <ul className="cfp-benefits__list">
                    {c.benefits.items.map((line) => (
                      <li key={line} className="cfp-benefits__row">
                        <span className="cfp-benefits__check" aria-hidden>
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className="cfp-benefits__text">{line}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="cfp-benefits__cta" href={c.submitProposalHref}>
                    {c.benefits.cta}
                  </a>
                </div>
              </Col>
            </Row>
          </section>

          <section
            className="cfp-section cfp-section--faq"
            id="cfp-faq"
            aria-labelledby="cfp-faq-heading"
          >
            <div className="cfp-section__intro cfp-section__intro--center cfp-faq__intro">
              <h2
                className="cfp-section__h2 cfp-section__h2--xl"
                id="cfp-faq-heading"
              >
                {c.faq.title}
              </h2>
              <p className="cfp-section__sub">{c.faq.subtitle}</p>
            </div>
            <div className="cfp-faq__list">
              {c.faq.items.map((item) => (
                <details key={item.q} className="cfp-faq__item">
                  <summary className="cfp-faq__summary">
                    <span className="cfp-faq__q">{item.q}</span>
                    <FontAwesomeIcon
                      className="cfp-faq__chev"
                      icon={faChevronDown}
                      aria-hidden
                    />
                  </summary>
                  <div className="cfp-faq__a">{item.a}</div>
                </details>
              ))}
            </div>
            <div className="cfp-faq__footer">
              <p className="cfp-faq__footer-lead">{c.faq.footerLead}</p>
              <a
                className="cfp-faq__footer-link"
                href="mailto:speakers@pycon.co"
              >
                {c.faq.footerLink}{" "}
                <FontAwesomeIcon icon={faEnvelope} aria-hidden />
              </a>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

CallForProposals.propTypes = {
  dataTranslate: PropTypes.object,
};

export default CallForProposals;
