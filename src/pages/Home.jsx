import React from 'react'
import Header from '../components/Header';
import AboutHome from '../components/AboutHome';
import CardsHome from '../components/CardsHome';
import Services from '../components/ServicesHome';
import CounterHome from '../components/CounterHome';
import ContactUsHome from '../components/ContactUsHome';
import TestimonialsHome from '../components/TestimonialsHome';
import CaseStudies from '../components/CaseStudies';
import OurClientsHome from '../components/OurClientsHome';

const Home = () => {
  return (
    <div>
      <Header />
      
      <div className='homeContainer'>
        <AboutHome />
        <CardsHome />
        <Services />
        <CounterHome />
        {/* <CaseStudies /> */}
        <OurClientsHome />
        <TestimonialsHome />
        <ContactUsHome />
      </div>
    </div>
  )
}

export default Home
