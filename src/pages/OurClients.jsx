import React from 'react'
import '../styles/OurClients.css'
import OurClientsHome from '../components/OurClientsHome';
import ImageContent from '../components/ImageContent';

const OurClients = () => {
  return (
    <div>

      {/* CSS in Header.css */}
      <div className='container-fluid'>
        <div className="row">
          <div className="headerContent">
            <div id='head-image-ourTeam' className='overlayImageHeader'></div>
            <p className="text-center">Our Clients</p>
            <h5 className="fw-bold">Lorem ipsum dolor sit amet.</h5>
          </div>
        </div>
      </div>

      <OurClientsHome />

      <div className='my-5'>
        <ImageContent />
      </div>

      <div className='container'>
        <div className="row text-center px-4 py-5">
          <div className="OurClientsContent2">
            <h6 className="text-decoration-underline text-danger fw-bold">WORK WITH US</h6>
            <h3 className="fw-bold py-5">Lorem ipsum dolor sit amet.</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum voluptatem quis tempore assumenda sit, asperiores eum repellendus illo pariatur neque omnis accusantium rerum aspernatur fuga ipsa dolorum officia consequuntur.</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Contact Us</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OurClients
