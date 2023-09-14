import React from 'react'
import '../styles/OurTeamHome.css'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const OurTeamHome = () => {
  return (
    <section id='ourTeamHome' className='ourTeamHomeMainContent page-section my-5'>

      <div className='ourTeamHomeMainImage'></div>
      
      <div className='container'>

        <div className='ourTeamHomeContent1 mb-5'>
          <p className="text-decoration-underline text-center text-danger text-uppercase fw-bold">OUR TEAM</p>
          <h1 className='text-center'>Professional Team</h1>
          <div className='d-flex justify-content-end align-items-center'>
            <Link to="/people" className="btn btn-danger btn-lg fw-bold">View All</Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-5">

          <div className="col">
            <div className='card'>
              <div className="ourTeamHomeContent card-body">
                <div id='ourTeamHomeImg-01' className='ourTeamHome-images'></div>
              </div>
            </div>
            <div className="ourTeamHomeContentInfo text-center mt-5">
              <p className="text-uppercase text-danger">FOUNDER</p>
              <h3 className="text-capitalize fw-bold">Peter Parker</h3>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium molestias in alias hic quaerat dignissimos aliquid consectetur unde, quibusdam quasi.</p>
              <div className='mt-5'>
                <FaTwitter className='ourTeamIconInfo' />
                <FaFacebookF className='ourTeamIconInfo' />
                <FaLinkedinIn className='ourTeamIconInfo' />
                <FiMail className='ourTeamIconInfo' />
              </div>
            </div>
          </div>

          <div className="col">
            <div className='card'>
              <div className="ourTeamHomeContent card-body">
                <div id='ourTeamHomeImg-02' className='ourTeamHome-images'></div>
              </div>
            </div>
            <div className="ourTeamHomeContentInfo text-center mt-5">
              <p className="text-uppercase text-danger">FOUNDER</p>
              <h3 className="text-capitalize fw-bold">Natasha Romanoff</h3>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque expedita eveniet omnis a saepe unde architecto, nisi aliquam?</p>
              <div className='mt-5'>
                <FaTwitter className='ourTeamIconInfo' />
                <FaFacebookF className='ourTeamIconInfo' />
                <FaLinkedinIn className='ourTeamIconInfo' />
                <FiMail className='ourTeamIconInfo' />
              </div>
            </div>
          </div>

          <div className="col">
            <div className='card'>
              <div className="ourTeamHomeContent card-body">
                <div id='ourTeamHomeImg-03' className='ourTeamHome-images'></div>
              </div>
            </div>
            <div className="ourTeamHomeContentInfo text-center mt-5">
              <p className="text-uppercase text-danger">SENIOR PARTNER</p>
              <h3 className="text-capitalize fw-bold">Barry Allen</h3>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat earum exercitationem in possimus voluptatibus eaque ducimus asperiores, deleniti delectus quod.</p>
              <div className='mt-5'>
                <FaTwitter className='ourTeamIconInfo' />
                <FaFacebookF className='ourTeamIconInfo' />
                <FaLinkedinIn className='ourTeamIconInfo' />
                <FiMail className='ourTeamIconInfo' />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default OurTeamHome