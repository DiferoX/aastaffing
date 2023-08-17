import React from 'react'
import Header from '../components/Header';
import AboutHome from '../components/AboutHome';
import CardsHome from '../components/CardsHome';

const Home = () => {
  return (
    <div>
      <Header />
      
      <div className='homeContainer'>
        <AboutHome />
        <CardsHome />
        <AboutHome />
      </div>
    </div>
  )
}

export default Home
