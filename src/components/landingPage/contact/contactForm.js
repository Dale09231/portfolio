import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormspark } from "@formspark/use-formspark";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const apiUrl = "https://submit-form.com/Rsqe681Uw";
      axios
        .post(apiUrl, formData)
        .then((response) => {
          toast.success("Request submitted successfully!");
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          }, 2000);
        })
        .catch((error) => {
          toast.error("Error submitting form. Please try again later.");
        });
    }
  };

  return (
    <div className="contact-form animated-element" data-aos="fade-down">
      <ToastContainer position="top-right" autoClose={700} theme="colored" />
      <h1>Have You Something to Say ?</h1>
      <p>Feel free to message me. I am here to help!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-field">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>
        <div className="mb-3 form-field">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="mb-3 form-field">
          <textarea
            className="form-control"
            placeholder="Write your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <span className="text-danger">{errors.message}</span>
          )}
        </div>
        <div className="mb-3 form-field">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
