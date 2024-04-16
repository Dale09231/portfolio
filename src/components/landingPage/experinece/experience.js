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
                <h1>JAN 2023 - Present</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Sr. Full Stack Developer && DevOps Engineer</h1>
              <p>Upwork</p>
              <ul>
                <li>
                  Orchestrated the end-to-end development lifecycle, from
                  architecture design to deployment, as a Senior Full Stack
                  Developer and DevOps Engineer.
                </li>
                <li>
                  Spearheaded the implementation of continuous integration and
                  continuous deployment (CI/CD) pipelines to streamline
                  development workflows and accelerate time to market.
                </li>
                <li>
                  Leveraged a comprehensive understanding of frontend and
                  backend technologies to architect scalable and responsive web
                  applications.
                </li>
                <li>
                  Established and maintained robust monitoring and alerting
                  systems to ensure the reliability and availability of critical
                  services.
                </li>
                <li>
                  Collaborated with cross-functional teams to optimize
                  application performance, troubleshoot issues, and implement
                  solutions for scalability and efficiency.
                </li>
              </ul>
            </div>
          </div>
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>JUL 2019 - OCT 2022</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Senior Full Stack Developer</h1>
              <p>Whitepages</p>
              <ul>
                <li>
                  Responsible for DevOps Architecture, Infrastructure
                  Automations (Terraform, ARM), Rearchitecture, transformation,
                  migration and implementation of (Customer’s) Custom
                  Application / Infrastructure on Azure IaaS and PaaS cloud
                  solutions.
                </li>
                <li>
                  Responsible for AWS & Azure Customer discovery, assessment,
                  technical engagement, service validation, monthly reviews.
                </li>
                <li>
                  Build and release, provisioning, capacity planning, Reporting,
                  Configuration Management and Manage continuous deployment of
                  custom Applications.
                </li>
                <li>
                  Administer & Manage: GCP Partner Portal, Microsoft Partner,
                  Microsoft Azure MSP CSP Subscription, Azure DevOps, JIRA,
                  CloudSphere, PRISMA, OPSRamp
                </li>
                <li>
                  Design and implement AWS/GCP & Azure IaaS and PaaS technology
                  solutions for client's business needs, security, and service
                  level requirement and conduct proof of concept (POC).
                </li>
                <li>
                  Building and deploying applications in Microsoft Azure, Amazon
                  Web Services and Google Compute Platform
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
              <h1>Senior Backend Developer</h1>
              <p>Contix</p>
              <ul>
                <li>
                  Publish Product new version on Microsoft Azure Marketplace.
                </li>
                <li>
                  Build DevOps Architecture in Azure DevOps and Maintained CI/CD
                  for the Application Infrastructure hosted in Azure.
                </li>
                <li>
                  Prepared test environment for the product on Hyper-V
                  (Application Server, Encoding Server, Storage Server, SQL
                  Server 2017 Enterprise, ADFS Server, ID-Connector Server,
                  ForgeRock Open-AM SSO Server, WOWZA Storage Server).
                </li>
                <li>
                  Deployed Staging environment of the Product new version on
                  Azure Cloud.
                </li>
                <li>
                  Deployed Virtual Machine Scale Set on Azure for Product.
                </li>
                <li>
                  Automated installation of new version Product with PowerShell.
                </li>
                <li>
                  SSO Integrations for (Azure AD, ForgeRock, Okta, PingID,
                  OneLogin, ADFS, SAML-P)
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
