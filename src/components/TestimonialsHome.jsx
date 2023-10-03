import React from 'react'
import '../styles/TestimonialsHome.css'
import { Link } from 'react-router-dom'

const TestimonialsHome = () => {
  return (
    <section id='cardsHome' className='testimonialsHomeMainContent page-section my-5'>

      <div className='mainImageTestimonials'></div>
      
      <div className='container'>
        <div className="row text-center">

          <div id="carouselExampleFade" className="carousel slide col-md-6 p-5" data-bs-ride="carousel" data-bs-pause="false">

            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            <div className="carousel-inner">

              <div className="itemtestimonials carousel-item active">
                <div className="headTestimonials container">
                  <h2 className='fst-italic'>"</h2>
                  <p className='testimonialsText fst-italic mb-5'>I hired two assistants in Colombia and they accomplished more in 2 hours than my paralegal did in 2 weeks at a 1/3 of the pay and none of the American "I am special, don't hurt my feelings" modern bs. Just need to figure out how to make them stop calling me sir! I am finally a little less stressed.</p>
                  <img src={"https://i.pravatar.cc/80?img=1"} className="mb-3" alt='' />
                  <h5>Amir Abbasi</h5>
                  <p>Abbasi Law</p>
                </div>
              </div>

              <div className="itemtestimonials carousel-item">
                <div className="headTestimonials container">
                  <h2 className='fst-italic'>"</h2>
                  <p className='testimonialsText fst-italic mb-5'>Every time I reach out, Maria responds immediately with the best attitude; "Thank you so much. I'll be happy to take care of that for you right away." I wish you saw that sort of enthusiastic rapid response more often in America. Plus she just helped me settle a huge Spanish case. Worth every penny!</p>
                  <img src={"https://i.pravatar.cc/80?img=5"} className="mb-3" alt='' />
                  <h5>Shaun Capps</h5>
                  <p>Shaun Capps Injury Law</p>
                </div>
              </div>

              <div className="itemtestimonials carousel-item">
                <div className="headTestimonials container">
                  <h2 className='fst-italic'>"</h2>
                  <p className='testimonialsText fst-italic mb-5'>Can't say enough about AA Staffing, from the training program to the seamless onboarding process (of course to the candidates themselves).  As a small firm, we were struggling to handle our workload. But with AA Staffing, we were able to hit the ground running and haven't looked back.</p>
                  <img src={"https://i.pravatar.cc/80?img=11"} className="mb-3" alt='' />
                  <h5>Maha Amircani</h5>
                  <p>Amircani Law</p>
                </div>
              </div>

              <div className="itemtestimonials carousel-item">
                <div className="headTestimonials container">
                  <h2 className='fst-italic'>"</h2>
                  <p className='testimonialsText fst-italic mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias inventore corrupti voluptatum, ex accusamus nemo necessitatibus mollitia excepturi dicta esse.</p>
                  <img src={"https://i.pravatar.cc/80?img=10"} className="mb-3" alt='' />
                  <h5>Name</h5>
                  <p>Company</p>
                </div>
              </div>

            </div>
          </div>

          {/* <div className='col-md-6 p-5'>
            <div className="testimonialsHomeContent">
              <h4 className="my-3">About Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <button type="button" className="btn btn-danger mt-3 fw-bold">Read More</button>
            </div>
          </div> */}

          <div className='col-md-6 p-5'>
            <div id='testimonialContent2' className="testimonialsHomeContent">
              <h6 className="text-decoration-underline fw-bold">TESTIMONIALS</h6>
              <h1 className="my-3">Our Customers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum.</p>
              <Link to="/our-clients" className="btn btn-light btn-lg mt-3 fw-bold">Find More</Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default TestimonialsHome