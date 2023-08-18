import React from 'react'
import '../styles/ContactUsHome.css'

const ContactUsHome = () => {
  return (
    <section id='ContactUsHome' className='ContactUsMainContent page-section my-5'>
      <div className='container'>

        <div className="row text-start px-4">
          <div className="ContactUsContent">
            <h6 className="text-decoration-underline text-danger fw-bold">FREE CASE EVALUATION</h6>
            <p className="text-muted">Contact Us</p>
            <h3 className="fw-bold">1-800-000-111</h3>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Make an Appointment</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactUsHome