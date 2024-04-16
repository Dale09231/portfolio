import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import ProfileImage from "../../../assets/images/profile-img-two.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="container-fluid about-section" id="about">
      <div className="container about-container ">
        <div className="common-heading">
          <h1>About Me</h1>
          <p>
            Become a world's no 1 full-stack web developer. That's why I am
            learning and mastering web development. I will not stop until I
            become the Web Development Hero.
          </p>
        </div>
        <div
          className="about-container-content animated-element"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="about-container-left">
            <img src={ProfileImage} alt="img" />
          </div>
          <div className="about-container-right">
            <h1>
              Hi There<span>✌</span>
            </h1>
            <p>
              I am a senior full-stack developer with more than 10 years of
              extensive experience in web application development using multiple
              languages and frameworks. I am proficient in all stages of
              application development including requirement analysis, designing,
              coding, testing, and debugging.
            </p>
            <p>
              As a Senior Fullstack Developer, I am highly proficient in both
              front-end and back-end technologies, and I have worked on various
              projects, ranging from small-scale applications to complex
              enterprise solutions.
            </p>
            <p>
              In my previous role, I was responsible for developing and
              maintaining a large-scale web application. I also worked on a
              variety of projects, including developing a new user interface,
              improving the performance of the application, and adding new
              features. I am confident that I have the skills and experience
              necessary to be successful in a FullStack engineer role. I am a
              hard worker and I am always willing to go the extra mile.{" "}
            </p>
            <p>
              I am eager to take on new challenges and I am always looking for
              ways to improve my skills. I am confident that I can make a
              significant contribution to your team or build your projects with
              the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
