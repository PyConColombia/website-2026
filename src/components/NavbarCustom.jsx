import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

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
  const t = dataTranslate?.navbar ?? {};
  const years = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const linkClass = ({ isActive }) =>
    `navbar-custom__link${isActive ? " navbar-custom__link--active" : ""}`;

  return (
    <Navbar expand="lg" fixed="top" variant="light" className="navbar-custom">
      <Container className="d-flex flex-wrap align-items-center gap-2 gap-lg-3">
        <Navbar.Brand as={NavLink} to="/">
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
                  <NavLink to="/" end className={linkClass}>
                    {t.home ?? "Home"}
                  </NavLink>
                  <NavLink to="/sponsors" className={linkClass}>
                    {t.sponsors ?? "Sponsors"}
                  </NavLink>
                  <NavLink to="/keynotes" className={linkClass}>
                    {t.keynotes ?? "Keynotes"}
                  </NavLink>
                  <NavLink to="/speakers" className={linkClass}>
                    {t.speakers ?? "Speakers"}
                  </NavLink>
                  <NavLink to="/team" className={linkClass}>
                    {t.team ?? "Team"}
                  </NavLink>
                  <NavDropdown
                    className="navbar-custom__dropdown"
                    title={
                      <span className="d-inline-flex align-items-center gap-2">
                        {t.schedule ?? "Schedule"}
                        <ChevronDownIcon />
                      </span>
                    }
                    id="navbar-schedule-dropdown"
                    align="end"
                  >
                    {years.map((year) => (
                      <NavDropdown.Item
                        key={year}
                        href={`https://${year}.pycon.co`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        PyCon Colombia {year}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </Nav>
              </div>
            </div>

            <a
              className="navbar-custom__cta"
              href={t.ticketsUrl ?? "#"}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.getTickets ?? "GET YOUR TICKETS"}
              <ArrowUpRightIcon />
            </a>
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
