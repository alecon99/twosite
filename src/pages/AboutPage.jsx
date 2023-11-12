import React from 'react'

import NavigatioBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import JumbotronAboutSection from '../components/AboutSections/JumbotronAboutSection/JumbotronAboutSection'
import Biography1 from '../components/AboutSections/BiographySection/Biography1/Biography1'
import Biography2 from '../components/AboutSections/BiographySection/Biography2/Biography2'
import Biography3 from '../components/AboutSections/BiographySection/Biography3/Biography3'

const AboutPage = () => {
  return (
    <>
     <NavigatioBar/>
     <JumbotronAboutSection/>
     <Biography1/>
     <Biography2/>
     <Biography3/>
     <Footer/>
    </>
  )
}

export default AboutPage