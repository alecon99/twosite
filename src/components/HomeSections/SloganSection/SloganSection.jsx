import React from 'react'

import '../SloganSection/SloganSections.css'

import Flip from 'react-reveal/Flip';

const SloganSection = () => {
  return (
    <div className='fullScreen' id='slogan_bg'>
        <Flip duration={1500} left cascade>
            <div id='slogan_lg' className='d-none d-md-flex'>The world of cycling</div>
            <div id='slogan_sm' className='d-md-none'>
              <div>The</div>
              <div>world</div>
              <div>of</div>
              <div>cycling</div>
            </div>
        </Flip>
    </div>
  )
}

export default SloganSection