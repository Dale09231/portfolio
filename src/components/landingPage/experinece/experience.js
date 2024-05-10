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
              <h1>Senior Lead FullStack Engineer - Frontend and Backend</h1>
              <p>Whitepages</p>
              <ul>
                <li>
                  Worked on a development team to create new, awesome features
                  for millions of users.
                </li>
                <li>
                  Lead the developers of development team to extend the
                  functionality and performance of applications. Provided third
                  level assistance and support on developed applications.
                </li>
                <li>
                  Provided ongoing feedback to upper management on the current
                  status of projects.
                </li>
                <li>
                  Provided architectural leadership by leading design,
                  implementation, code reviews and drive teams to the highest
                  standards.
                </li>
                <li>Developed UI, management layer and Services, and APIs</li>
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
              <h1>
                Senior FullStack Engineer - React/Angular/Vue, PHP/Laravel,
                Python, AWS
              </h1>
              <p>Contix</p>
              <ul>
                <li>
                  Build and maintain REST APIs used by our internal tools to
                  gain access to the data
                </li>
                <li>
                  Assist project/program/product managers, providing technical
                  information to do project scoping and scheduling
                </li>
                <li>
                  Work with the operations team to improve monitoring on all
                  backend systems and APIs
                </li>
                <li>
                  Continuously design, develop and deploy backend services with
                  focus on high availability, low latency and scalability
                </li>
                <li>
                  Collaborate with developers across product and services teams
                  to integrate with backend APIs
                </li>
              </ul>
            </div>
          </div>
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>MAY 2011 - JUN 2014</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Senior Frontend Developer</h1>
              <p>OpenArc</p>
              <ul>
                <li>
                  Build applications using a variety of languages to include
                </li>
                <li>
                  Familiarity with common patterns in building distributed
                  systems, such as service registration and discovery, routing,
                  load balancing and circuit breakers
                </li>
                <li>
                  Supports Sales team with product modifications and engineering
                </li>
                <li>
                  Think through complex problems and work with a team to
                  implement real-world solutions
                </li>
                <li>
                  Build web applications that work equally well on desktop and
                  mobile devices
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
