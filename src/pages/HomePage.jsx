import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import SloganSection from '../components/HomeSections/SloganSection/SloganSection'
import ShopSection from '../components/HomeSections/ShopSection/ShopSection'
import AboutSection from '../components/HomeSections/AboutSection/AboutSection'
import Footer from '../components/Footer/Footer'


const HomePage = () => {
  return (
    <>
      <NavigationBar/>
      <SloganSection/>
      <AboutSection/>
      <ShopSection/>
      <Footer/>
    </>
  )
}

export default HomePage