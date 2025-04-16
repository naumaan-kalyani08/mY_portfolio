import React from "react";
import PropTypes from "prop-types";

const ReusableComponents = ({ additionalStyle }) => {
  return (
    <div className={`first-scroll-icon ${additionalStyle}`}>
      <div className="mouse"> </div>
    </div>
  );
};

const ScrollAlert = ({ additionalStyle }) => {
  return (
    <div className={`first-scroll-icon ${additionalStyle}`}>
      <div className="mouse"> </div>
      <p className="mt-1 highlight"> scroll down to continue </p>
    </div>
  );
};

const SectionButton = ({ btnText, onClick }) => {
  return (
    <div className="d-flex align-items-center justify-content-center about-btn-wrapper py-3">
      <div className="button-wrapper">
        <button
          className="button"
          type="button"
          data-aos="fade-right "
          data-aos-duration="3000"
          onClick={onClick}
        >
          {btnText}
        </button>
        <div className="button-bg"></div>
      </div>
    </div>
  );
};

ReusableComponents.propTypes = {
  additionalStyle: PropTypes.string,
};

ScrollAlert.propTypes = {
  additionalStyle: PropTypes.string,
};

SectionButton.propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};

export { ReusableComponents, ScrollAlert, SectionButton };
