import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import OpenMenuIcon from "../../../assets/images/open-menu.png";
import CloseMenuIcon from "../../../assets/images/close-menu.png";
import scrollSection from "../../common/scrollSection/scrollSection";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleClick = (sectionId) => {
    scrollSection(sectionId);
    setActiveSection(sectionId);
  };
  return (
    <div className="navbar-section">
      <div className="container navbar-container">
        <div className="navbar-logo-wrapper">
          <NavLink>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-link-wrapper">
          <ul className={`${isMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("home")}
                className={activeSection === "home" ? "nav-active" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("about")}
                className={activeSection === "about" ? "nav-active" : ""}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("skill")}
                className={activeSection === "skill" ? "nav-active" : ""}
              >
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("portfolio")}
                className={activeSection === "portfolio" ? "nav-active" : ""}
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("contact")}
                className={activeSection === "contact" ? "nav-active" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={isMenuOpen ? CloseMenuIcon : OpenMenuIcon} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
