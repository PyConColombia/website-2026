import {
  faBriefcase,
  faCheck,
  faCircleInfo,
  faCommentSlash,
  faEnvelope,
  faFileLines,
  faFlag,
  faGavel,
  faHeart,
  faListCheck,
  faShieldHalved,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet";

const SECTION_IDS = ["intro", "content", "recommendations", "contact"];

const DEFAULT_COPY = {
  metaTitle: "Code of Conduct | PyCon Colombia 2026",
  sectionAriaLabel: "Code of conduct",
  eyebrow: "PyCon Colombia",
  titlePart1: "Code of",
  titlePart2: "Conduct",
  intro:
    "PyCon Colombia is a conference organized by the Python Colombia community created for the dissemination of the Python programming language in our country and Latin America, with the objective of sharing knowledge and expanding the spaces for interaction and collaboration of its members. We value the participation of each member of the community and we want each participant in the conference to enjoy and gain valuable experience full of knowledge and innovation. According to this code, all participants including organizers, speakers, volunteers and attendees are expected to show respect and courtesy among themselves in all aspects of the conference, its organization and the events taking place in the context of the conference. To be more explicit than is expected of any person participating in the event and the global and local community of Python and PyCon Colombia are required to comply with the following Code of Conduct. The organizers of this event and any event in the future are subject to enforce following and complying with international and Colombian laws and the spirit of the International Python Society (Python Software Foundation)",
  nav: {
    intro: "Introduction",
    content: "Code of Conduct Content",
    recommendations: "Our goal",
    contact: "Contact Information",
  },
  helpCard: {
    title: "Contact organizers",
    body: "If you have been harassed or need help, you can reach our organizers directly.",
    buttonText: "Open report form",
    buttonHref: "https://forms.gle/Q92DS8RvrzW8sUN67",
  },
  contentSection: {
    title: "Code of Conduct Content",
    body: "PyCon Colombia is dedicated to providing a conference free of harassment for all members, regardless of gender, sexual orientation, physical abilities, physical appearance, race or religion. No abuse will be tolerated by any conference participant. All communications should be focused on a professional audience including people with different backgrounds and experiences. Sexual language is not appropriate for any event organized under our rules, including talks.",
  },
  recommendations: {
    title: "Our goal as a community recommends:",
    inclusiveTitle: "Be Inclusive",
    inclusiveBody:
      "Acknowledge different backgrounds and perspectives. Foster a welcoming atmosphere for all participants.",
    respectfulTitle: "Be Respectful",
    respectfulBody:
      "Disagreement is no excuse for poor manners. Be kind in all interactions and communications.",
    items: [
      "Be kind to other members.",
      "Do not insult or demean the other participants.",
      "Behave professionally.",
      "Remember that any conduct of harassment, sexism, racism or political division or of any instance, is not appropriate for participation within the conference or community.",
      "Not attending the conference under the influence of alcoholic beverages.",
      "Participants of our community of any type (Organizers, Speakers, Volunteers and Assistants) who do not comply with any of these rules will be expelled from the conference without any reimbursement at the discretion of the organizing committee of the conference.",
    ],
    thankYou:
      "Thank you for being subject to these terms and welcome to PyCon Colombia. This is a friendly event for our entire community.",
  },
  contact: {
    title: "Contact Information",
    lead: "If you have been harassed, or realize that someone else is being harassed or is violating the International Terms of the PyCon Colombia or have any problems, please contact our organizers:",
    formLinkText: "Open report form",
    formLinkHref: "https://forms.gle/Q92DS8RvrzW8sUN67",
    contacts: [
      {
        name: "John Jairo Roa Acuña",
        email: "john@pycon.co",
        href: "mailto:john@pycon.co",
      },
    ],
    teamNote:
      "Our team at the conference will also be available to collaborate and contact local security or assist you to ensure your safety. We value your presence in our events.",
    organizerNote:
      "In case of any violation of the terms of this code of conduct by the organizers please contact the main organizer of the conference, John Roa or as a last resort to the PSF.",
    staffLanyardLead: "Staff wear",
    staffLanyardBold: "Yellow Lanyards",
    infoDeskLead: "Report at the",
    infoDeskBold: "Info Desk",
  },
};

const NAV_ICONS = {
  intro: faFlag,
  content: faFileLines,
  recommendations: faListCheck,
  contact: faEnvelope,
  more: faCircleInfo,
};

/** One icon per recommendation card, same order as `recommendations.items` in copy (EN/ES). */
const RECOMMENDATION_ITEM_ICONS = [
  faHeart, // kindness toward members
  faCommentSlash, // no insults or demeaning speech
  faBriefcase, // professional conduct
  faShieldHalved, // harassment / discrimination not tolerated
  faWineBottle, // alcohol policy
  faGavel, // enforcement / committee discretion
];

function mergeCopy(raw) {
  const b = DEFAULT_COPY;
  if (!raw || typeof raw !== "object") return b;
  return {
    metaTitle: raw.metaTitle ?? b.metaTitle,
    sectionAriaLabel: raw.sectionAriaLabel ?? b.sectionAriaLabel,
    eyebrow: raw.eyebrow ?? b.eyebrow,
    titlePart1: raw.titlePart1 ?? b.titlePart1,
    titlePart2: raw.titlePart2 ?? b.titlePart2,
    intro: raw.intro ?? b.intro,
    nav: { ...b.nav, ...raw.nav },
    helpCard: { ...b.helpCard, ...raw.helpCard },
    contentSection: { ...b.contentSection, ...raw.contentSection },
    recommendations: {
      ...b.recommendations,
      ...raw.recommendations,
      items: raw.recommendations?.items ?? b.recommendations.items,
    },
    contact: {
      ...b.contact,
      ...raw.contact,
      contacts: raw.contact?.contacts ?? b.contact.contacts,
    },
    more: { ...b.more, ...raw.more },
  };
}

const CodeOfConduct = ({ dataTranslate = undefined }) => {
  const c = mergeCopy(dataTranslate?.codeOfConductPage);
  const [activeSection, setActiveSection] = useState("intro");
  const sectionEls = useRef({});

  const registerSection = useCallback((id, el) => {
    if (el) sectionEls.current[id] = el;
    else delete sectionEls.current[id];
  }, []);

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => sectionEls.current[id]).filter(
      Boolean,
    );
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.dataset?.cocSection) {
          setActiveSection(visible[0].target.dataset.cocSection);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -50% 0px",
        threshold: [0, 0.2, 0.45],
      },
    );

    for (const n of nodes) observer.observe(n);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = sectionEls.current[id];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
      </Helmet>
      <div className="coc-page">
        <Container fluid="xxl" className="coc-page__container">
          <header
            ref={(el) => registerSection("intro", el)}
            data-coc-section="intro"
            className="coc-page__hero coc-page__hero--tracked coc-page__hero--with-glow"
          >
            <div className="coc-page__hero-glow" aria-hidden>
              <span className="coc-page__hero-glow__blob coc-page__hero-glow__blob--tl" />
              <span className="coc-page__hero-glow__blob coc-page__hero-glow__blob--br" />
            </div>
            <div className="coc-page__hero-inner">
              <h1 className="coc-page__title">
                <span className="coc-page__title-part">{c.titlePart1}</span>{" "}
                <span className="coc-page__title-accent">{c.titlePart2}</span>
              </h1>
              <p className="coc-page__intro">{c.intro}</p>
            </div>
          </header>

          <Row className="coc-page__grid g-4 g-lg-5">
            <Col lg={4} xl={3}>
              <aside className="coc-page__aside">
                <nav aria-label={c.sectionAriaLabel}>
                  <ul className="coc-nav">
                    {SECTION_IDS.map((id) => {
                      const Icon = NAV_ICONS[id];
                      const label = c.nav[id];
                      const isActive = activeSection === id;
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            className={`coc-nav__link${isActive ? " coc-nav__link--active" : ""}`}
                            onClick={() => scrollToSection(id)}
                            aria-current={isActive ? "location" : undefined}
                          >
                            <span className="coc-nav__icon" aria-hidden>
                              <FontAwesomeIcon icon={Icon} />
                            </span>
                            {label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="coc-help-card">
                  <p className="coc-help-card__title">{c.helpCard.title}</p>
                  <p className="coc-help-card__body">{c.helpCard.body}</p>
                  <a
                    className="coc-help-card__button"
                    href={c.helpCard.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.helpCard.buttonText}
                  </a>
                </div>
              </aside>
            </Col>

            <Col lg={8} xl={9}>
              <div className="coc-page__main">
                <section
                  id="coc-content"
                  ref={(el) => registerSection("content", el)}
                  data-coc-section="content"
                  className="coc-section"
                >
                  <div className="coc-section__rule" aria-hidden />
                  <h2 className="coc-section__heading">
                    {c.contentSection.title}
                  </h2>
                  <div className="landing-keynotes__speaker-card coc-section__card">
                    <p className="coc-section__text coc-section__text--last">
                      {c.contentSection.body}
                    </p>
                  </div>
                </section>

                <section
                  id="coc-recommendations"
                  ref={(el) => registerSection("recommendations", el)}
                  data-coc-section="recommendations"
                  className="coc-section"
                >
                  <h2 className="coc-section__heading">
                    {c.recommendations.title}
                  </h2>
                  <Row className="g-3 g-md-4 coc-guideline-cards">
                    {c.recommendations.items.map((item, index) => (
                      <Col md={6} key={`${index}-${item}`}>
                        <article className="coc-value-card">
                          <div className="coc-value-card__icon" aria-hidden>
                            <FontAwesomeIcon
                              icon={RECOMMENDATION_ITEM_ICONS[index] ?? faCheck}
                            />
                          </div>
                          <p className="coc-value-card__text">{item}</p>
                        </article>
                      </Col>
                    ))}
                  </Row>
                  <p className="coc-recommendations__thank-you">
                    {c.recommendations.thankYou}
                  </p>
                </section>

                <section
                  id="coc-contact"
                  ref={(el) => registerSection("contact", el)}
                  data-coc-section="contact"
                  className="coc-section"
                >
                  <h2 className="coc-section__heading">{c.contact.title}</h2>
                  <div className="coc-contact-cta">
                    <p className="coc-contact-cta__lead">{c.contact.lead}</p>

                    <a
                      className="coc-contact-cta__form-link"
                      href={c.contact.formLinkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.contact.formLinkText}
                    </a>
                    <p className="coc-contact-cta__note">
                      {c.contact.teamNote}
                    </p>
                    <p className="coc-contact-cta__note coc-contact-cta__note--last">
                      {c.contact.organizerNote}
                    </p>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

CodeOfConduct.propTypes = {
  dataTranslate: PropTypes.object,
};

export default CodeOfConduct;
