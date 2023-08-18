import React from 'react'
import '../styles/ServicesHome.css'
import img01 from '../assets/0018.jpg'

const ServicesHome = () => {
  return (
    <section id='services' className='servicesMainConten page-section my-5'>
      <div className='container'>
        
        <div className='row'>
          <img src={img01} className="col-md-6 w-50 px-4" alt={img01} />
          
          <div className="containerTwo col-md-6 text-start px-4">
            <div className="serviceContent">
              <p className="text-decoration-underline text-danger fw-bold">01</p>
              <h3>Dispute Resolutions</h3>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="serviceContent">
              <p className="text-decoration-underline text-danger fw-bold">02</p>
              <h3>Comercial Litigation</h3>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="serviceContent">
              <p className="text-decoration-underline text-danger fw-bold">03</p>
              <h3>Security Law</h3>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHome