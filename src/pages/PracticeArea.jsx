import React from 'react'
import '../styles/PracticeArea.css'
import ContactUsHome from '../components/ContactUsHome';


const PracticeArea = () => {
  return (
    <div>

      {/* CSS in Header.css */}
      <div className='container-fluid'>
        <div className="row">
          <div className="headerContent">
            <div id='head-image-PracticeArea' className='overlayImageHeader'></div>
            <p className="text-center">Practice Areas</p>
            <h5 className="fw-bold">Lorem ipsum dolor sit amet.</h5>
          </div>
        </div>
      </div>


      <div className='practiceAreaMainContent page-section my-5'>
      
        <div className='practiceAreaMainImage'></div>
        
        <div className='container'>
      
          <div className='practiceAreaContent1 mb-5'>
            {/* <p className="text-decoration-underline text-center text-danger text-uppercase fw-bold">OUR TEAM</p> */}
            <h1 className='text-center'>Our Practice</h1>
          </div>
      
          <div className="row row-cols-1 row-cols-md-2 g-5">
      
            <div className="col">
              <div className='card'>
                <div className="practiceAreaContent card-body">
                  <div id='practiceAreaImg-01' className='practiceArea-images'></div>
                </div>
              </div>
              <div className="practiceAreaContentInfo text-center mt-5">
                {/* <p className="text-uppercase text-danger">FOUNDER</p> */}
                <h3 className="text-capitalize fw-bold">Practice Areas</h3>
                <ul className='text-start'>
                  <li>Personal Injury</li>
                  <li>Workplace Harassment</li>
                  <li>Wrongful Death</li>
                  <li>Civil Settlements</li>
                  <li>Business Litigation</li>
                  <li>Environmental Litigation</li>
                </ul>

              </div>
            </div>
      
            <div className="col">
              <div className='card'>
                <div className="practiceAreaContent card-body">
                  <div id='practiceAreaImg-02' className='practiceArea-images'></div>
                </div>
              </div>
              <div className="practiceAreaContentInfo text-center mt-5">
                {/* <p className="text-uppercase text-danger">FOUNDER</p> */}
                <h3 className="text-capitalize fw-bold">Our Approach</h3>
                <p className='mt-4'>At Law Firm, we specialize in bringing the law to your corner. We are dedicated to understanding what results you want and to helping you understand what actions we can take on your behalf. We will work with you every step of the way to make sure that you understand the choices you are making and feel empowered to make them.</p>
              </div>
            </div>
      
            <div className="col">
              <div className='card'>
                <div className="practiceAreaContent card-body">
                  <div id='practiceAreaImg-03' className='practiceArea-images'></div>
                </div>
              </div>
              <div className="practiceAreaContentInfo text-center mt-5">
                {/* <p className="text-uppercase text-danger">SENIOR PARTNER</p> */}
                <h3 className="text-capitalize fw-bold">A Team in Your Corner</h3>
                <p className='mt-4'>Every morning, our legal team has a meeting to discuss our cases. This means that no matter who you go with in our firm, the expertise of the whole team weighs in on your case. </p>
              </div>
            </div>

            <div className="col">
              <div className='card'>
                <div className="practiceAreaContent card-body">
                  <div id='practiceAreaImg-04' className='practiceArea-images'></div>
                </div>
              </div>
              <div className="practiceAreaContentInfo text-center mt-5">
                {/* <p className="text-uppercase text-danger">SENIOR PARTNER</p> */}
                <h3 className="text-capitalize fw-bold">Legacy of Success</h3>
                <p className='mt-4'>Law Firm has been working together for 30 years and has a proven track record of success. We use that experience to help you down a path to the results you need. Check out our success stories, and then schedule your free phone consultation today.</p>
              </div>
            </div>
      
            
          </div>
        </div>
      </div>

      <ContactUsHome />

    </div>
  )
}

export default PracticeArea
