import React from 'react'
import '../styles/ContactUs.css'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className='container'>

      <div className="row py-5">
        <div className="ContactUsContent">
          <p className="text-muted">Contact Us</p>
          <h3 className="fw-bold">1-800-000-111</h3>
        </div>
      </div>

      <section id='contact' className='container contactMainContent page-section'>
        <div className='row contactContainer'>

          <div className='col-5'>
            <div>
              <h1>Find Us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptatibus quidem a, dolore sequi ab mollitia id assumenda deserunt repellat quaerat nihil quasi nesciunt quod enim unde ratione necessitatibus fugiat blanditiis! Sit in ut adipisci.</p>
            </div>
            <div>
              <div className='d-flex align-items-center mt-5'>
                <FaMapMarkerAlt className='contactFormIcon' />
                <h6>OFFICE</h6>
              </div>
              <h4>742 de Evergreen Terrace, Springfiel</h4>
            </div>
            <div>
              <div className='d-flex align-items-center mt-4'>
                <FaPhoneAlt className='contactFormIcon' />
                <h6>PHONE</h6>
              </div>
              <h4>1-800-000-111</h4>
            </div>
            <div>
              <div className='d-flex align-items-center mt-4'>
                <FiMail className='contactFormIcon' />
                <h6>EMAIL</h6>
              </div>
              <h4>contact@example.com</h4>
            </div>
          </div>

          <form className="col-7 text-start">
            <div className='formContent mb-5'>
              <div className="mb-3">
                <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Name" />
                <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Email" />
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Message"></textarea>
              </div>
            </div>
            <button className="btn btn-danger btn-lg">Send Message</button>
          </form>

        </div>
      </section>

      <div className='container py-5'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2074356023488!2d-75.56906656099325!3d6.208883664921844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442820eb1fc6cd%3A0x4fae88b7c8f0b5a0!2sParque%20lleras!5e0!3m2!1ses-419!2sco!4v1694549265732!5m2!1ses-419!2sco" 
          width="100%" 
          height="500" 
          style={{ border:"0" }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  )
}

export default ContactUs
