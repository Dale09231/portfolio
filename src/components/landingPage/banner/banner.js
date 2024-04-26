import React, { useState, useEffect } from "react";
import "./banner.css";
import { NavLink } from "react-router-dom";
import UserIcon from "../../../assets/images/user-icon.png";
import ProfilImage from "../../../assets/images/profile-img.png";
import scrollSection from "../../common/scrollSection/scrollSection";

const Banner = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const words = [
    "passionate",
    "fast-learner",
    "self-taugth",
    "experienced",
    "committed",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const handleClick = (sectionId) => {
    scrollSection(sectionId);
  };
  const openPdf = () => {
    const file = process.env.PUBLIC_URL + "/cv.pdf";
    console.log(file);
    window.open(file, "_blank");
  };
  return (
    <>
      <div className="container-fluid banner-section" id="home">
        <div className="container banner-container">
          <div className="banner-container-left">
            <p>WELCOME TO MY CREATIVE JOURNEY!</p>
            <h1>
              Hi, I’m Dale <span class="wave">👋</span>
            </h1>
            <h2>
              A{" "}
              <div className="animated-word-wrapper">
                <span className={fade ? "animated-word fade" : "animated-word"}>
                  {words[wordIndex]}
                </span>
              </div>{" "}
              software engineer
            </h2>
            <div className="banner-btn-wrapper">
              <NavLink onClick={openPdf}>Resume</NavLink>
              <NavLink onClick={() => handleClick("contact")}>
                <img src={UserIcon} alt="img" />
              </NavLink>
            </div>
          </div>
          <div className="banner-container-right ">
            <img src={ProfilImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
