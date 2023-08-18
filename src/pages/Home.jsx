import React from 'react'
import Header from '../components/Header';
import AboutHome from '../components/AboutHome';
import CardsHome from '../components/CardsHome';
import Services from '../components/ServicesHome';
import CounterHome from '../components/CounterHome';

const Home = () => {
  return (
    <div>
      <Header />
      
      <div className='homeContainer'>
        <AboutHome />
        <CardsHome />
        <Services />
        <CounterHome />
        <AboutHome />
      </div>
    </div>
  )
}

export default Home
