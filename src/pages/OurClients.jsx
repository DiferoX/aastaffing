import React from 'react'
import '../styles/OurClients.css'
import OurClientsHome from '../components/OurClientsHome';

const OurClients = () => {
  return (
    <div className='container'>
      <OurClientsHome />

      <div className="row text-center px-4 py-5">
        <div className="OurClientsContent2">
          <h6 className="text-decoration-underline text-danger fw-bold">WORK WITH US</h6>
          <h3 className="fw-bold py-5">We are always looking for new clients</h3>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum voluptatem quis tempore assumenda sit, asperiores eum repellendus illo pariatur neque omnis accusantium rerum aspernatur fuga ipsa dolorum officia consequuntur.</p>
          <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Make an Appointment</button>
        </div>
      </div>

    </div>
  )
}

export default OurClients
