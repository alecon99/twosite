import React from 'react'

import NavigationBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import EmailSection from '../components/ContactsSections/EmailSection/EmailSection'


const ContactsPage = () => {
  return (
    <>
        <NavigationBar/>
        <EmailSection/>
        <Footer/>
    </>
  )
}

export default ContactsPage