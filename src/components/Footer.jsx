import {
  faGithubAlt,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

// import { NavLink } from "react-router-dom";

const Footer = ({ dataTranslate }) => {
  const f = dataTranslate?.footer ?? {};

  const socialLinks = [
    {
      icon: faGithubAlt,
      href: "https://github.com/PyConColombia",
      label: "GitHub",
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/pyconcolombia/",
      label: "Instagram",
    },
    { icon: faXTwitter, href: "https://twitter.com/pyconcolombia", label: "X" },
    {
      icon: faYoutube,
      href: "https://www.youtube.com/@PyConColombia",
      label: "YouTube",
    },
  ];

  // const legalLinks = [
  //   { to: "/code-of-conduct", label: f.codeOfConduct },
  //   { to: "/coc-enforcement", label: f.codeOfConductEnforcementProcedure },
  //   { to: "/health-safety", label: f.HealthSafetyPolicy },
  // ];

  return (
    <footer className="footer-container">
      <Container fluid className="footer-container__outer">
        <div className="footer-inner">
          <Row className="footer-inner__row gy-4">
            <Col xs={12} lg={5}>
              <div className="footer-brand">
                <div className="footer-brand__logo">
                  <img
                    src="/figma-assets/footer-logo-mark.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="footer-brand__mark"
                  />
                  <span className="footer-brand__title">{f.brandName}</span>
                </div>
                <p className="footer-brand__description">{f.description}</p>
                <ul className="footer-social">
                  {socialLinks.map(({ icon, href, label }) => (
                    <li key={label}>
                      <a
                        className="footer-social__link"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                      >
                        <FontAwesomeIcon icon={icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            {/* <Col xs={12} sm={6} lg={3}>
              <div className="footer-column">
                <div className="footer-column__header">{f.legal}</div>
                <nav className="footer-column__links" aria-label={f.legal}>
                  {legalLinks.map(({ to, label }) => (
                    <NavLink key={to} className="footer-column__link" to={to}>
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </Col> */}
            <Col xs={12} sm={6} lg={4}>
              <div className="footer-column">
                <div className="footer-column__header">{f.contact}</div>
                <a className="footer-column__email" href={`mailto:${f.email}`}>
                  {f.email}
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  dataTranslate: PropTypes.object,
};

export default Footer;
