import React from 'react'
import Header from '../components/Header';
import AboutHome from '../components/AboutHome';

const Home = () => {
  return (
    <div>
      <Header />
      
      <div className='container'>
        <AboutHome />
      </div>
    </div>
  )
}

export default Home
