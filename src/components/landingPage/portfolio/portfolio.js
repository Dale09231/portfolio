import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./portfolio.css";
import { NavLink } from "react-router-dom";
import portfolioData from "./portfolioData";
const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="container-fluid portfolio-section" id="portfolio">
      <div className="container portfolio-container">
        <div className="common-heading animated-element" data-aos="fade-up">
          <h1>Projects I have Built</h1>
        </div>
        <div className="portfolio-container-content">
          <div className="tab-content-wrapper">
            <div className="row">
              {portfolioData.map((item) => (
                <div className="col-md-4 mt-4" key={item.id}>
                  <div className="portfolio-card">
                    <div className="portfolio-content">
                      <div className="portfolio-img-wrapper">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="portfolio-body">
                        <h1 className="portfolio-heading">{item.title}</h1>
                        <p className="portfolio-description">
                          {item.description}
                        </p>
                        <div className="portfolio-tags">
                          {item.tags.map((tag) => (
                            <div className="tag-card" key={tag}>
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-card-btn">
                      <a href={item.websiteLink} target="_blank">
                        <svg
                          aria-labelledby="svg-inline--fa-title-wBsrgQ2DjvV4"
                          data-prefix="fas"
                          data-icon="external-link-alt"
                          class="svg-inline--fa fa-external-link-alt work-icon"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <title id="svg-inline--fa-title-wBsrgQ2DjvV4">
                            Visit Website
                          </title>
                          <path
                            fill="currentColor"
                            d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
