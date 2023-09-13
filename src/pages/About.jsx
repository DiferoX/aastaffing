import React from 'react'
import '../styles/About.css'
import AboutHome from '../components/AboutHome';
import CounterHome from '../components/CounterHome';
import ImageContent from '../components/ImageContent';
import OurClientsHome from '../components/OurClientsHome';
import img01 from '../assets/0010.jpg'

const About = () => {
  return (
    <div>

      {/* CSS in Header.css */}
      <div className='container-fluid'>
        <div className="row">
          <div className="headerContent">
            <div id='head-image-AboutUs' className='overlayImageHeader'></div>
            <p className="text-center">About Us</p>
            <h5 className="fw-bold">We offer the best legal services</h5>
          </div>
        </div>
      </div>


      <AboutHome />
      <OurClientsHome />
      <CounterHome />
      <ImageContent />

      <div className='container'>
        <div id='aboutUsOfficeMainContent' className='mb-0'>
          <img src={img01} className="col-md-5 w-50" alt={img01} />
          <div className="aboutUsOfficeContent col-md-7">
            <p className="text-decoration-underline text-danger text-uppercase fw-bold">FIND US</p>
            <h1 className='mb-4'>Our Offices</h1>
            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis minus, minima adipisci sunt quae inventore at est provident perferendis tempore, voluptate natus voluptatem libero excepturi impedit earum temporibus doloremque optio ipsum ipsam. Nisi cumque quas pariatur atque sapiente animi minima in fugiat sunt, tempore qui est, dolor id minus?</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
