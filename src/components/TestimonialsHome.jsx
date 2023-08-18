import React from 'react'
import '../styles/TestimonialsHome.css'

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
                  <p className='testimonialsText fst-italic mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias inventore corrupti voluptatum, ex accusamus nemo necessitatibus mollitia excepturi dicta esse.</p>
                  <img src={"https://i.pravatar.cc/80?img=1"} className="mb-3" alt='' />
                  <h5>Name</h5>
                  <p>Company</p>
                </div>
              </div>

              <div className="itemtestimonials carousel-item">
                <div className="headTestimonials container">
                  <h2 className='fst-italic'>"</h2>
                  <p className='testimonialsText fst-italic mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias inventore corrupti voluptatum, ex accusamus nemo necessitatibus mollitia excepturi dicta esse.</p>
                  <img src={"https://i.pravatar.cc/80?img=5"} className="mb-3" alt='' />
                  <h5>Name</h5>
                  <p>Company</p>
                </div>
              </div>

              <div className="itemtestimonials carousel-item">
                <div className="headTestimonials container">
                  <h2 className='fst-italic'>"</h2>
                  <p className='testimonialsText fst-italic mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias inventore corrupti voluptatum, ex accusamus nemo necessitatibus mollitia excepturi dicta esse.</p>
                  <img src={"https://i.pravatar.cc/80?img=11"} className="mb-3" alt='' />
                  <h5>Name</h5>
                  <p>Company</p>
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
              <button type="button" className="btn btn-light btn-lg mt-3 fw-bold">Find More</button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default TestimonialsHome