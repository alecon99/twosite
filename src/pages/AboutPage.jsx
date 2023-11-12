import React from 'react'

import NavigatioBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import JumbotronAboutSection from '../components/AboutSections/JumbotronAboutSection/JumbotronAboutSection'
import BiographySection from '../components/AboutSections/BiographySection/BiographySection'

const AboutPage = () => {
  return (
    <>
     <NavigatioBar/>
      <JumbotronAboutSection/>
      <BiographySection/>
     <Footer/>
    </>
  )
}

export default AboutPage