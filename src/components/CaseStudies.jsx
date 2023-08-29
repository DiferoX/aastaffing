import React from 'react'
import '../styles/CaseStudies.css'

const CaseStudies = () => {
  return (
    <section id='caseStudies' className='caseStudiesMainContent page-section my-5'>

      <div className='caseStudiesMainImage'></div>
      
      <div className='container'>

        
        <div id='caseStudiesContent1' className='mb-5'>
          <div className="serviceContent">
            <p className="text-decoration-underline text-danger text-uppercase fw-bold">Lorem ipsum</p>
            <h1>Our Clients</h1>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className='d-flex justify-content-end align-items-center'>
            <button type="button" className="btn btn-danger btn-lg fw-bold">View All</button>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className='card'>
              <div className="caseStudiesContent card-body">
                <div id='caseStudiesImg-01' className='caseStudies-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="caseStudiesContent card-body">
                <div id='caseStudiesImg-02' className='caseStudies-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="caseStudiesContent card-body">
                <div id='caseStudiesImg-03' className='caseStudies-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="caseStudiesContent card-body">
                <div id='caseStudiesImg-04' className='caseStudies-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="caseStudiesContent card-body">
                <div id='caseStudiesImg-05' className='caseStudies-images'></div>
                <h6 className="text-uppercase">Lorem ipsum dolor.</h6>
                <h4 className="text-capitalize">Company Name</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card'>
              <div className="caseStudiesContent card-body">
                <div id='caseStudiesImg-06' className='caseStudies-images'></div>
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

export default CaseStudies