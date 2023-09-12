import React from 'react'
import '../styles/Header.css'
import HeadImg01 from '../assets/0001.jpg'
import HeadImg02 from '../assets/0002.jpg'
import HeadImg03 from '../assets/0003.jpg'

const Header = () => {
  return (

    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">

      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}

      <div className="carousel-inner">

        <div className="itemContent carousel-item active" data-bs-interval="5000">
          <div id='carousel-item-01' className='overlay-image'></div>
          <div className="headContent container">
            <h1>T1 slide label</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, velit maiores illum voluptatem dolorum praesentium magni unde cupiditate nostrum ratione.</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Find More</button>
          </div>
        </div>

        <div className="itemContent carousel-item" data-bs-interval="5000">
          <div id='carousel-item-02' className='overlay-image'></div>
          <div className="headContent container">
            <h1>T2 slide label</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae similique? Eveniet molestias consequuntur fuga molestiae quidem, at dolorum consequatur ut quasi ipsam dignissimos, quos cum perspiciatis ea ullam quas?</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Find More</button>
          </div>
        </div>

        <div className="itemContent carousel-item" data-bs-interval="5000">
          <div id='carousel-item-03' className='overlay-image'></div>
          <div className="headContent container">
            <h1>T3 slide label</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil amet, veniam qui doloribus in quaerat veritatis nulla eveniet vitae debitis quidem, quos, corrupti enim eum?</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Find More</button>
          </div>
        </div>




        
        {/* <div className="carousel-item">
          <img src={HeadImg02} className="col-6 d-block w-100" alt={HeadImg02} />
        </div>
        <div className="row carousel-item">
          <img src={HeadImg03} className="d-block w-100" alt={HeadImg03} />
        </div> */}
      </div>

      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  )
}

export default Header



    {/* <div className='header' >
      <img className='headerImg' src={HeadImg} alt={'Header image'} />
    </div> */}
