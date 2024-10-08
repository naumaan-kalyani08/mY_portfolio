import React from 'react'
import PropTypes from 'prop-types';

const scrollDownGuide = () =>{
    return(

        <div className="first-scroll-icon">
        <div className="mouse"> mouse</div>
      </div>
    )
}
const ReusableComponents = ({additionalStyle}) => {
  return (
    <div className={`first-scroll-icon ${additionalStyle}`}>
    <div className="mouse"> </div>
  </div>
  )
}

ReusableComponents.propTypes = {
  additionalStyle: PropTypes.string,
};

export {ReusableComponents , scrollDownGuide}