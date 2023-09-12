import React from 'react'
import '../styles/OurClientsHome.css'
import { Link } from 'react-router-dom'

const OurClientsHome = () => {
  return (
    <section id='ourClientsHome' className='ourClientsHomeMainContent page-section my-5'>

      <div className='ourClientsHomeMainImage'></div>
      
      <div className='container'>

        
        <div id='ourClientsHomeContent1' className='mb-5'>
          <div className="serviceContent">
            <p className="text-decoration-underline text-danger text-uppercase fw-bold">Lorem ipsum</p>
            <h1>Our Clients</h1>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className='d-flex justify-content-end align-items-center'>
            <Link to="/our-clients" className="btn btn-danger btn-lg fw-bold">View All</Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className='card'>
              <div className="ourClientsHomeContent card-body">
                <div id='ourClientsHomeImg-01' className='ourClientsHome-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="ourClientsHomeContent card-body">
                <div id='ourClientsHomeImg-02' className='ourClientsHome-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="ourClientsHomeContent card-body">
                <div id='ourClientsHomeImg-03' className='ourClientsHome-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="ourClientsHomeContent card-body">
                <div id='ourClientsHomeImg-04' className='ourClientsHome-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="ourClientsHomeContent card-body">
                <div id='ourClientsHomeImg-05' className='ourClientsHome-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="ourClientsHomeContent card-body">
                <div id='ourClientsHomeImg-06' className='ourClientsHome-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurClientsHome