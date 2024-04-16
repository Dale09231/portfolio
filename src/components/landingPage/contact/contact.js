import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import MailIcon from "../../../assets/images/email.png";
import CallIcon from "../../../assets/images/call.png";
import HomeIcon from "../../../assets/images/home.png";
import LinkdinIcon from "../../../assets/images/linkedin.png";
import GitgubIcon from "../../../assets/images/github.png";
import MessengerIcon from "../../../assets/images/messenger.png";
import WhatsappIcon from "../../../assets/images/whatsapp.png";
import FacebookIcon from "../../../assets/images/facebook.png";
import GmailIcon from "../../../assets/images/gmail.png";
import TelegramIcon from "../../../assets/images/telegram.png";
import ContactForm from "./contactForm";
import { NavLink } from "react-router-dom";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="container-fluid contact-section" id="contact">
      <div className="container contact-container">
        <div className="common-heading">
          <h1>Contact Me</h1>
          <p>Let's Work Together</p>
        </div>
        <div
          className="contact-card-wrapper animated-element"
          data-aos="fade-up"
        >
          <div className="row">
            <div className="col-md-6 mt-3">
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <img src={MailIcon} alt="icon" />
                </div>
                <h1>EMAIL</h1>
                <p>dalenewbold2@gmail.com</p>
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <img src={HomeIcon} alt="icon" />
                </div>
                <h1>LOCATION</h1>
                <p>1435 Southwest 15th Avenue Ocala, FL 34471 United States</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
        <div className="contact-footer">
          <div className="social-wrappper">
            <a
              href="https://www.linkedin.com/in/dale-newbold/ "
              target="_blank"
            >
              <img src={LinkdinIcon} alt="icon" />
            </a>
            <a href=" https://github.com/Dale09231" target="_blank">
              <img src={GitgubIcon} alt="icon" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dalenewbold2@gmail.com"
              target="_blank"
            >
              <img src={GmailIcon} alt="icon" />
            </a>
          </div>
          <div className="copyright">
            <p>
              © 2024 All Rights Reserve to <NavLink>Dale Newbold</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
