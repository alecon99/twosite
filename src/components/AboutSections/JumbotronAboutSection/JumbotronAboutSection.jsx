import React from 'react'

import { Zoom } from "react-awesome-reveal";

import '../JumbotronAboutSection/JumbotronAboutSection.css'

const JumbotronAboutSection = () => {
  return (
    <div className='fullScreen' id='jumbotronAbout_bg'>
      <div id='jumbotronAbout_lg' className='d-none d-md-flex'>
        <Zoom>
          <div>Who we are</div>
        </Zoom>
      </div>
      <div id='jumbotronAbout_sm' className='d-md-none'>
        <Zoom>
          <div>Who</div>
          <div>we</div>
          <div>are</div>
        </Zoom>
      </div>
    </div>
  )
}

export default JumbotronAboutSection