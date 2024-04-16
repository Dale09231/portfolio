import React from "react";
import "./contactmodal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PCimg from "../../../assets/images/computer.png";
import { NavLink } from "react-router-dom";
import scrollSection from "../../common/scrollSection/scrollSection";
const ContactModal = ({ show, onHide }) => {
  const handleClick = (sectionId) => {
    scrollSection(sectionId);
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header>
        <Button className="modal-close-button" onClick={onHide}>
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-content">
          <div className="modal-content-left">
            <h1>
              Do you need a website for your business, academic, or personal
              use?
            </h1>
            <p>
              Get expert guidance and support from experienced professionals for
              your website.
            </p>
            <NavLink onClick={() => handleClick("contact")}>
              Contact Now!
            </NavLink>
          </div>
          <div className="modal-content-right">
            <img src={PCimg} alt="" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
