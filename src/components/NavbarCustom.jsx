import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import LanguageContext from "@/LanguageContext";
import { localizePath } from "@/languageRouting";

const ArrowUpRightIcon = () => (
  <svg
    width="18"
    height="18"
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

const ChevronDownIcon = () => (
  <svg
    className="navbar-custom__chevron"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden={true}
  >
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NavbarCustom = ({ dataTranslate }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const t = dataTranslate?.navbar ?? {};
  const languageOptions = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const years = [
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
  ];

  const linkClass = ({ isActive }) =>
    `navbar-custom__link${isActive ? " navbar-custom__link--active" : ""}`;
  const homePath = localizePath("/", language);
  const sponsorsPath = localizePath("/sponsors", language);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="light"
      className={`navbar-custom${scrolled ? " navbar-custom--scrolled" : ""}`}
    >
      <Container className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2 gap-lg-3">
        <Navbar.Brand as={NavLink} to={homePath}>
          PYCON COLOMBIA 2026
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-custom-collapse"
          className="ms-auto"
        />

        <Navbar.Collapse
          id="navbar-custom-collapse"
          className="navbar-custom__collapse"
        >
          <div className="navbar-custom__collapse-inner">
            <div className="navbar-custom__pill-outer">
              <div className="navbar-custom__pill-inner">
                <Nav as="div" className="navbar-custom__nav-links">
                  <NavLink to={homePath} end className={linkClass}>
                    {t.home ?? "Home"}
                  </NavLink>
                  {/* <NavLink to="/call-for-proposals" className={linkClass}>
                    {t.callForProposals ?? "Call for proposals"}
                  </NavLink> */}
                  <NavLink to={sponsorsPath} className={linkClass}>
                    {t.sponsors ?? "Sponsors"}
                  </NavLink>
                  {/* <NavLink to="/keynotes" className={linkClass}>
                    {t.keynotes ?? "Keynotes"}
                  </NavLink> */}
                  {/* <NavLink to="/speakers" className={linkClass}>
                    {t.speakers ?? "Speakers"}
                  </NavLink>
                  <NavLink to={teamPath} className={linkClass}>
                    {t.team ?? "Team"}
                  </NavLink> */}
                </Nav>
              </div>
            </div>

            <div className="navbar-custom__actions">
              <a
                className="navbar-custom__cta"
                href={t.ticketsUrl ?? "#"}
                rel="noopener noreferrer"
                target="_blank"
              >
                {t.getTickets ?? "GET YOUR TICKETS"}
                <ArrowUpRightIcon />
              </a>
              <NavDropdown
                className="navbar-custom__dropdown"
                title={
                  <span className="d-inline-flex align-items-center gap-2">
                    2026
                    <ChevronDownIcon />
                  </span>
                }
                id="navbar-schedule-dropdown"
                align="end"
                renderMenuOnMount
              >
                {years.map((year) => (
                  <NavDropdown.Item
                    key={year}
                    href={`https://${year}.pycon.co`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {year}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <fieldset className="navbar-custom__lang-toggle">
                <legend className="visually-hidden">Language</legend>
                {(() => {
                  const nextLanguage =
                    language === "en" ? languageOptions[1] : languageOptions[0];
                  return (
                    <button
                      type="button"
                      className="navbar-custom__lang-btn"
                      aria-label={`Switch language to ${nextLanguage.label}`}
                      onClick={() => setLanguage(nextLanguage.code)}
                    >
                      {nextLanguage.label}
                    </button>
                  );
                })()}
              </fieldset>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarCustom.propTypes = {
  dataTranslate: PropTypes.object,
};

export default NavbarCustom;
