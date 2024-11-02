import { TFunction } from "i18next";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import LanguagePicker from "./languagePicker";
import CustomButton from "./сustomButton";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  t: TFunction<"translation", undefined>;
  scrollToContactForm: () => void;
}

const NavigationBar: React.FC<Props> = ({ t, scrollToContactForm }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowNavbar(true);
    } else if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`py-3 w-full justify-between fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white`}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="flex flex-row items-center justify-center gap-3"
        >
          <img src="/images/logo.svg" alt="Logo" />
          <span className="flex-grow text-center font-suezOne text-xl md:text-3xl text-[#FF8006]">
            Lucky Starts
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex flex-row flex-wrap justify-end gap-7"
        >
          <Nav className="ms-auto flex flex-row gap-4 my-2 md:my-0">
            <Nav.Link
              href="#about"
              className="text-gray-950"
              onClick={handleNavClick}
            >
              {t("about")}
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className="text-gray-950"
              onClick={handleNavClick}
            >
              {t("pricing")}
            </Nav.Link>
          </Nav>
          <LanguagePicker />
          <CustomButton
            text={t("contact_us")}
            onClick={() => {
              handleNavClick();
              scrollToContactForm();
            }}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
