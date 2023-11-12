import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import SloganSection from '../components/HomeSections/SloganSection/SloganSection'
import ShopSection from '../components/HomeSections/ShopSection/ShopSection'
import AboutSection from '../components/HomeSections/AboutSection/AboutSection'
import Footer from '../components/Footer/Footer'
import ScrollToTopSection from '../components/HomeSections/ScrollToTopSection/ScrollToTopSection'


const HomePage = () => {
  return (
    <>
      <NavigationBar/>
      <SloganSection/>
      <AboutSection/>
      <ShopSection/>
      <ScrollToTopSection/>
      <Footer/>
    </>
  )
}

export default HomePage