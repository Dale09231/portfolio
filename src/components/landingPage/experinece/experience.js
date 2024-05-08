import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="container-fluid experience-section">
      <div
        className="container experince container animated-element"
        data-aos="zoom-in"
      >
        <div className="common-heading">
          <h1>Working Experiences</h1>
        </div>
        <div className="experince-container-content">
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>JUL 2019 - OCT 2022</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Senior FullStack Engineer - Frontend and Backend</h1>
              <p>Whitepages</p>
              <ul>
                <li>
                  Web application development in .Net based development
                  environment and develop web application components using
                  JavaScript frameworks
                </li>
                <li>
                  Improved and maintained a core Ruby on Rails web app serving
                  80k+ page views per minute.
                </li>
                <li>
                  Work as part of the development team towards the application
                  in an aggressive deadline
                </li>
                <li>
                  Provide assistance to support engineers and customer service
                  staff in order to resolve production issues as quickly as
                  possible
                </li>
                <li>
                  Implement systems that are highly available, scalable, and
                  self-healing on the AWS platform
                </li>
                <li>
                  Experience in testing high-performance, highly-available and
                  scalable distributed systems
                </li>
                <li>Migrated the system to a microservice architecture.</li>
                <li>
                  Migrated the system to Kubernetes on AWS and helped build
                  tooling to automate deployments using Helm and Jenkins.
                </li>
              </ul>
            </div>
          </div>
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>APR 2015 - APR 2018</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Senior FullStack Engineer</h1>
              <p>Contix</p>
              <ul>
                <li>
                  Initiated, constructed, and launched two web applications from
                  inception to release.
                </li>
                <li>
                  Directed the deployment process and engineered resilient
                  serverless technologies to ensure high availability.
                </li>
                <li>
                  Conducted rigorous testing of customer-facing prototypes
                  pre-deployment, achieving a 99% success rate.
                </li>
                <li>
                  Optimized web page performance, doubling speed for enhanced
                  user experience and accessibility.
                </li>
                <li>
                  Ensured website compatibility across 99% of browsers,
                  fostering seamless user interactions.
                </li>
                <li>
                  Boosted mobile traffic by 20% through the implementation of a
                  mobile-first responsive design strategy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
