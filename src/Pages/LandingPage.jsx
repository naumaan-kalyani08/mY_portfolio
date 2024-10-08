
import  Fullpage,{FullPageSections , FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import React from 'react'


const FullPageScroll = () => {
  return (
    <Fullpage>
        {/* <FullpageNavigation/> */}
        <FullPageSections>
            <FullpageSection  className="slide-1-test">
                <p className='text-white'>
                    slide 1 
                </p>
            </FullpageSection>

            <FullpageSection >
                <p>
                    slide 2
                </p>
            </FullpageSection>


            <FullpageSection>
                <p>
                    slide 3
                </p>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll