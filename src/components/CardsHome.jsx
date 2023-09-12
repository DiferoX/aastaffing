import React from 'react'
import '../styles/CardsHome.css'
import { VscLaw } from 'react-icons/vsc';
import { GiShakingHands, GiBugleCall } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const CardsHome = () => {
  return (
    <section id='cardsHome' className='cardHomeMainContent page-section my-5'>

      <div className='mainImage'></div>
      
      <div className='container'>
        <div className="card-group row text-center">
          <div className='card col-md-4 mx-4 py-5'>
            <div className="cardHomeContent card-body">
              <span className="iconCardContent fa-stack fa-4x">
                <VscLaw className='cardHomeIcon' />
              </span>
              <h4 className="my-3">About Us</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <Link to="/about" className="btn btn-danger mt-3 fw-bold">Read More</Link>
            </div>
          </div>
          <div className='card col-md-4 mx-4 py-5'>
            <div className="cardHomeContent card-body">
              <span className="iconCardContent fa-stack fa-4x">
                <GiShakingHands className='cardHomeIcon' />
              </span>
              <h4 className="my-3">Our Team</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <Link to="/people" className="btn btn-danger mt-3 fw-bold">Read More</Link>
            </div>
          </div>
          <div className='card col-md-4 mx-4 py-5'>
            <div className="cardHomeContent card-body">
              <span className="iconCardContent fa-stack fa-4x">
                <GiBugleCall className='cardHomeIcon' />
              </span>
              <h4 className="my-3">Contact Us</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <Link to="/contact" className="btn btn-danger mt-3 fw-bold">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsHome
