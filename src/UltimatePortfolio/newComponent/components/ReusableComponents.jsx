import React from 'react'
import PropTypes from 'prop-types';


const ReusableComponents = ({additionalStyle}) => {
  return (
    <div className={`first-scroll-icon ${additionalStyle}`}>
    <div className="mouse"> </div>
  </div>
  )
}

const ScrollAlert = ({additionalStyle}) => {
  return (
    <div className={`first-scroll-icon ${additionalStyle}`}>
    <div className="mouse"> </div>
      <p className='mt-1'> scroll down to scroll</p>
  </div>
  )
}

ReusableComponents.propTypes = {
  additionalStyle: PropTypes.string,
};

ScrollAlert.propTypes = {
  additionalStyle: PropTypes.string,
};

export {ReusableComponents , ScrollAlert}