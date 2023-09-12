import React from 'react'
import '../styles/Footer.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerContent'>
      
      <div className='container'>

        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0 text-center">
            <div>
              <h3 className='py-4 fw-bold'>About Us</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus suscipit quisquam animi neque explicabo ut unde corrupti sunt blanditiis.</p>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <div>
              <h3 className='py-4 fw-bold'>Contact Us</h3>
              <div>
                <>742 de Evergreen Terrace, Springfield,</>
                <br />
                <>NY 10000, US</>
              </div>
              <div className='py-3'>
                <>+1 800 111 2222</>
                <br />
                <>contact@example.com</>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <h3 className='py-4 fw-bold'>Quick Links</h3>
            <div className="footCardLinks">
              <Link to="/people">Our People</Link>
              <Link to="/our-clients">Our Clients</Link>
              <Link to="/news">Our Clients</Link>
              <Link to="/practice-area">Practice Areas</Link>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="footCard">
              <p>2023 © AA Staffing, Designed by<a href="https://github.com/DiferoX" target='_blank'>DiferoX</a></p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footCard">
              <div className="footCardIcons">
                <a href="#"><FaFacebookF /></a>
              </div>
              <div className="footCardIcons">
                <a href="#"><FaTwitter /></a>
              </div>
              <div className="footCardIcons">
                <a href="#"><FaLinkedinIn /></a>
              </div>
              {/* <div className="footCardIcons">
                <a href="#" className="btn btn-primary rounded-circle"><FaFacebookF /></a>
              </div> */}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footCard">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
