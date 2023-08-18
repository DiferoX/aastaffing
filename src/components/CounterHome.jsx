import React from 'react'
import '../styles/CounterHome.css'

const CounterHome = () => {
  return (
    <section id='counterHome' className='CounterMainContent page-section my-5'>
      <div className='container'>

        <div className="row text-start px-4 d-flex justify-content-center">
          <div className="counterContent col-md-3">
            <p className="text-muted">10k</p>
            <h4 className="text-danger fw-bold">Global Customers</h4>
          </div>
          <div className="counterContent col-md-3">
            <p className="text-muted">30</p>
            <h4 className="text-danger fw-bold">Years of Experience</h4>
          </div>
          <div className="counterContent col-md-3">
            <p className="text-muted">24</p>
            <h4 className="text-danger fw-bold">Team Experts</h4>
          </div>
          <div className="counterContent col-md-3">
            <p className="text-muted">17</p>
            <h4 className="text-danger fw-bold">Awards & Honors</h4>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CounterHome