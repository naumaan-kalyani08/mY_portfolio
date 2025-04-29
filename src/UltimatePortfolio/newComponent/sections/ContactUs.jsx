import React, { useState, useRef } from "react";
import Globe from "../components/Globe";
import { SectionButton } from "../components/ReusableComponents";
import { message } from "antd";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef(null); // Ref to the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    let isValid = true;
    const newError = {};

    if (!formData.name.trim()) {
      newError.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Invalid email format.";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newError.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newError.phone = "Phone number must contain only digits.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newError.message = "Message is required.";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleContactDetailSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      message.success("Details have been submitted successfully!");
      formRef.current.submit(); // Native form submit for Netlify
    }
  };

  return (
    <section>
      <div className="container">
        <SectionButton btnText="Contact Us" />
        <div className="row border-warning align-items-center">
          <div className="col-lg-6">
            <Globe />
          </div>
          <div className="col-lg-6">
            <form
              ref={formRef}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleContactDetailSubmit}
            >
              {/* Netlify hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field */}
              <p hidden>
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="row justify-content-center mx-auto">
                <div className="col-lg-8">
                  <span>
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      type="text"
                      className="w-100 common-input-design"
                      required
                      placeholder="Enter your name"
                    />
                    {error.name && <p className="text-danger">{error.name}</p>}
                  </span>
                </div>

                <div className="col-lg-8">
                  <span>
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-100 common-input-design"
                    />
                    {error.email && (
                      <p className="text-danger">{error.email}</p>
                    )}
                  </span>
                </div>

                <div className="col-lg-8">
                  <span>
                    <label htmlFor="phone">Phone</label>
                    <input
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      type="text"
                      required
                      placeholder="Enter your phone number"
                      className="w-100 common-input-design"
                    />
                    {error.phone && (
                      <p className="text-danger">{error.phone}</p>
                    )}
                  </span>
                </div>

                <div className="col-lg-8">
                  <span>
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                      rows="4"
                      className="w-100 common-input-design"
                      placeholder="Enter your message"
                      required
                    />
                    {error.message && (
                      <p className="text-danger">{error.message}</p>
                    )}
                  </span>
                </div>

                <div className="col-lg-8">
                  <button type="submit" className="button">
                    Submit Details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
