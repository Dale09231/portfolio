import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualification = () => {
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
          <h1>Academic Qualifications</h1>
        </div>
        <div className="experince-container-content">
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>Jul 2012 - Dec 2016</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Bachelor of Architecture (BArch), Computer science</h1>
              <p>University of West Florida</p>
              <ul>
                <li>GPA: 5.00 out of 5.00 (Science Studies)</li>
              </ul>
            </div>
          </div>
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>JUL 2006 - NOV 2010</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Master of Computer Applications (MCA)</h1>
              <p>Florida Atlantic University</p>
              <ul>
                <li>GPA: 5.00 out of 5.00 (Science Studies)</li>
                <li>Recipient of General Grade Scholarship in JSC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
