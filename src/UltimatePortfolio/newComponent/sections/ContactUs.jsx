import React, { useState } from "react";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleContactDetailSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
      }),
    })
      .then(() => {
        message.success("Details have been submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        message.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="get_in_touch">
      <div className="container">
        <SectionButton btnText="Get in Touch" />
        <div className="row border-warning align-items-center">
          <div className="col-lg-6">
            <Globe />
          </div>
          <div className="col-lg-6">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleContactDetailSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="row justify-content-center mx-auto">
                <div className="col-lg-8">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    className="w-100 common-input-design"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Enter your name"
                  />
                  {error.name && <p className="text-danger">{error.name}</p>}
                </div>

                <div className="col-lg-8">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-100 common-input-design"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Enter your email"
                  />
                  {error.email && <p className="text-danger">{error.email}</p>}
                </div>

                <div className="col-lg-8">
                  <label>Phone</label>
                  <input
                    name="phone"
                    type="text"
                    className="w-100 common-input-design"
                    onChange={handleChange}
                    value={formData.phone}
                    placeholder="Enter your phone number"
                  />
                  {error.phone && <p className="text-danger">{error.phone}</p>}
                </div>

                <div className="col-lg-8">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-100 common-input-design"
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Enter your message"
                  />
                  {error.message && (
                    <p className="text-danger">{error.message}</p>
                  )}
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
