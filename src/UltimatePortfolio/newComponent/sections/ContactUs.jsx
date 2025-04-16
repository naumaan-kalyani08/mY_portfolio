import React from "react";
import Globe from "../components/Globe";
import { SectionButton } from "../components/ReusableComponents";
const ContactUs = () => {
  return (
    <section>
      <div className="container">
        <SectionButton btnText="Contact Us" />
        <div className="row border-warning ">
          <div className="col-lg-6">
            <Globe />
          </div>
          <div className="col-lg-6">
            <div className="row justify-content-center mx-auto">
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Name">Name</label>
                  <input type="text" className="w-100 common-input-design" />
                </span>
              </div>
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Email">Email</label>
                  <input type="text" className="w-100 common-input-design" />
                </span>
              </div>
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Phone">Phone</label>
                  <input type="text" className="w-100 common-input-design" />
                </span>
              </div>
              <div className="col-lg-8">
                <span>
                  <label htmlFor="Message">Message</label>
                  <textarea rows="4" className="w-100 common-input-design" />
                </span>
              </div>
              <div className="col-lg-8">
                <SectionButton btnText="Submit Details" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
