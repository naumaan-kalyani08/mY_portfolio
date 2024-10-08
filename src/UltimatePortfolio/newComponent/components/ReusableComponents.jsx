import React from 'react'


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

export {ReusableComponents , scrollDownGuide}