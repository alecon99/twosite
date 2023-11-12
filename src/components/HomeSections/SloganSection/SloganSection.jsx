import React from 'react'

import '../SloganSection/SloganSections.css'

import { Zoom } from "react-awesome-reveal";

const SloganSection = () => {
  return (
    <div className='fullScreen' id='slogan_bg'>
      <div id='slogan_lg' className='d-none d-md-flex'>
        <Zoom>
          <div>The world of cycling</div>
        </Zoom>
      </div>
      <div id='slogan_sm' className='d-md-none'>
        <Zoom>
          <div>The</div>
          <div>world</div>
          <div>of</div>
          <div>cycling</div>
        </Zoom>
      </div>
    </div>
  )
}

export default SloganSection