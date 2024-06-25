import React from 'react'
import Navbar from '../components/Landings/Navbar'
import Home from '../components/Landings/Home'
import Courses from '../components/Landings/Courses'
import Testimonial from '../components/Landings/Testimonial'
import AboutUs from '../components/Landings/Aboutus'
import ContactUs from '../components/Landings/Contact'

const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Courses />
      <Testimonial />
      <AboutUs />
      <ContactUs />
    </>
  )
}

export default Landing;

