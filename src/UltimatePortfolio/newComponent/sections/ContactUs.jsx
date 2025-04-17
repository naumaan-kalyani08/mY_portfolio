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
    setError((prev) => ({ ...prev, [name]: "" })); // Clear error for the field
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

  const handleContactDetailSubmit = () => {
    if (validateForm()) {
      message.success("Details have been submitted successfully!");
      // Perform form submission logic here
      console.log("Form Data:", formData);
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
            <div className="row justify-content-center mx-auto">
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Name">Name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    className="w-100 common-input-design"
                  />
                  {error.name && <p className="text-danger ">{error.name}</p>}
                </span>
              </div>
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Email">Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    type="text"
                    className="w-100 common-input-design"
                  />
                  {error.email && <p className="text-danger">{error.email}</p>}
                </span>
              </div>
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Phone">Phone</label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    type="number"
                    className="w-100 common-input-design"
                  />
                  {error.phone && <p className="text-danger">{error.phone}</p>}
                </span>
              </div>
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Message">Message</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    rows="4"
                    className="w-100 common-input-design"
                  />
                  {error.message && (
                    <p className="text-danger">{error.message}</p>
                  )}
                </span>
              </div>
              <div className="col-lg-8">
                <button onClick={handleContactDetailSubmit} className="button">
                  Submit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
