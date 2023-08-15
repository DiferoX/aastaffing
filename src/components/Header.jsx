import React from 'react'
import '../styles/Header.css'
import HeadImg01 from '../assets/0001.jpg'
import HeadImg02 from '../assets/0002.jpg'
import HeadImg03 from '../assets/0003.jpg'

const Header = () => {
  return (

    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={HeadImg01} className="d-block w-100" alt={HeadImg01} />
        </div>
        <div className="row carousel-item">
          <div className="col-6 carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
          <img src={HeadImg02} className="col-6 d-block w-100" alt={HeadImg02} />
        </div>
        <div className="row carousel-item">
          <img src={HeadImg03} className="d-block w-100" alt={HeadImg03} />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Header



    {/* <div className='header' >
      <img className='headerImg' src={HeadImg} alt={'Header image'} />
    </div> */}
