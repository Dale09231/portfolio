import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./expertise.css";
import expertiseContent from "./expertiseData";
const Expertiese = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      className="container-fluid expertise-section animated-element"
      id="skill"
      data-aos="zoom-in"
    >
      <div className="container expertise-container">
        <div className="common-heading">
          <h1>What I Am Good At</h1>
        </div>
        <div className="expertise-container-content">
          {expertiseContent.map((category, index) => (
            <div className="expertise-card" key={index}>
              <div className="expertise-card-header">
                <h1>{category.title}</h1>
              </div>
              <div className="expertise-card-body">
                {category.skills.map((skill, idx) => (
                  <div className="skill-wrapper" key={idx}>
                    <div className="logo-wrapper">
                      <img src={skill.icon} alt="icon" />
                    </div>
                    <figcaption>{skill.description}</figcaption>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Expertiese;
