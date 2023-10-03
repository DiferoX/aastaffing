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
            <h2>ABOGADOS</h2>
            <h2>AMERICANOS</h2>
            <h2 className='mb-5'>STAFFING</h2>
            {/* <h1>T1 slide label</h1> */}
            <p className='fs-4'>Your pre-trained, bilingual, remote legal staffing solution.</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Find More</button>
          </div>
        </div>

        <div className="itemContent carousel-item" data-bs-interval="5000">
          <div id='carousel-item-02' className='overlay-image'></div>
          <div className="headContent container">
            <h1>Pre-trained on Personal Injury</h1>
            <p className='fs-4'>All of our staff goes through a hands-on training program at a personal injury law firm, working on real personal injury cases, and are ready to join your team as a legal assistant, case manager, paralegal, remote receptionist, intake specialist... whatever you need!</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Find More</button>
          </div>
        </div>

        <div className="itemContent carousel-item" data-bs-interval="5000">
          <div id='carousel-item-03' className='overlay-image'></div>
          <div className="headContent container">
            <h1>Transparent Pricing</h1>
            <p className='fs-4'>AAS provides a competitive, transparent pricing model, starting at $2250/month ($12.98/hour), plus a $750 onboarding fee. We pay above-market rates in Colombia, attracting the best talent around, with great attitudes and great English!</p>
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
