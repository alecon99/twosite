import React from 'react'

import NavigatioBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import JumbotronAboutSection from '../components/AboutSections/JumbotronAboutSection/JumbotronAboutSection'
import BiographySection from '../components/AboutSections/BiographySection/BiographySection'
import ScrollToTopSection from '../components/HomeSections/ScrollToTopSection/ScrollToTopSection'


const AboutPage = () => {
  return (
    <>
     <NavigatioBar/>
      <JumbotronAboutSection/>
      <BiographySection/>
      <ScrollToTopSection/>
     <Footer/>
    </>
  )
}

export default AboutPage