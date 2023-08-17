import React from 'react'
import '../styles/CardsHome.css'
import { VscLaw } from 'react-icons/vsc';
import { GiShakingHands, GiBugleCall } from 'react-icons/gi';

const CardsHome = () => {
  return (
    <section id='cardsHome' className='cardHomeMainContent page-section'>

      <div className='mainImage'></div>
      
      <div className='container'>
        {/* <div className='text-center mb-5'>
          <h2 className="section-heading text-uppercase">cardHomes</h2>
          <h6>Lorem ipsum dolor sit amet consectetur.</h6>
        </div> */}
        <div className="card-group row text-center">
          <div className='card col-md-4 mx-4 py-5'>
            <div className="cardHomeContent card-body">
              <span className="iconCardContent fa-stack fa-4x">
                <VscLaw className='cardHomeIcon' />
              </span>
              <h4 className="my-3">About Us</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <button type="button" className="btn btn-danger mt-3 fw-bold">Read More</button>
            </div>
          </div>
          <div className='card col-md-4 mx-4 py-5'>
            <div className="cardHomeContent card-body">
              <span className="iconCardContent fa-stack fa-4x">
                <GiShakingHands className='cardHomeIcon' />
              </span>
              <h4 className="my-3">Our Team</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <button type="button" className="btn btn-danger mt-3 fw-bold">Read More</button>
            </div>
          </div>
          <div className='card col-md-4 mx-4 py-5'>
            <div className="cardHomeContent card-body">
              <span className="iconCardContent fa-stack fa-4x">
                <GiBugleCall className='cardHomeIcon' />
              </span>
              <h4 className="my-3">Contact Us</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <button type="button" className="btn btn-danger mt-3 fw-bold">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsHome