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
              Technical Specifications:
              <br />
              JavaScript, Typescript, PHP, Python, Golang, Ruby, C/C++, Java
              <br />
              React/Next, Angular, Vue/Nuxt, Gatsby, Tailwind CSS, GraphQL, D3,
              ThreeJS
              <br />
              Node/Express, Python/Django, PHP/Laravel/Symfony, Golang, Ruby on
              Rails
              <br />
              Wordpress, Webflow, Wix, Joomla, Drupal, Squarespace, Shopify
              <br />
              Swift/SwiftUI, Java/Kotlin, React Native/Flutter/Ionic/Xamarin
              <br />
              Stripe, Paypal, Google, Firebase
            </p>

            <p>
              My strong technical skills and business experience give me the
              ability to communicate with and create alignment between
              developers, product owners, stakeholders, and executives.
            </p>
            <p>
              Please contact me at any time when it is convenient for you to
              discuss further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
