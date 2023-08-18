import React from 'react'
import '../styles/AboutHome.css'
import { BsShieldShaded } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
import { VscLaw } from 'react-icons/vsc';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const AboutHome = () => {
  return (
    <section id='aboutHome' className='serviceMainContent page-section my-5'>
      <div className='container'>
        <div className="row">
          <div className='col-md-6 text-start pe-5'>
            <p className="text-decoration-underline text-danger">ABOUT</p>
            <h1 className="section-heading text-capitalize mb-3 fs-1 fw-bolder">International law firm based in ???</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores atque reprehenderit ea vero nam ipsa et repellat asperiores nobis ratione dolor, laboriosam vitae deserunt facilis omnis ad corrupti, esse molestias quis! Fugit itaque nisi impedit laboriosam unde beatae nemo optio laborum possimus pariatur exercitationem, adipisci illo soluta quae aut magnam?</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Find More</button>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="serviceContent col-md-6">
                <span className="iconContent fa-stack fa-4x">
                  <VscLaw className='serviceIcon' />
                </span>
                <h4 className="my-3">Excellence</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="serviceContent col-md-6">
                <span className="iconContent fa-stack fa-4x">
                  <BsShieldShaded className='serviceIcon' />
                </span>
                <h4 className="my-3">Commitment</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
            <div className="row">
              <div className="serviceContent col-md-6">
                <span className="iconContent fa-stack fa-4x">
                  <FaTrophy className='serviceIcon' />
                </span>
                <h4 className="my-3">Professionalism</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="serviceContent col-md-6">
                <span className="iconContent fa-stack fa-4x">
                  <BsFillBriefcaseFill className='serviceIcon' />
                </span>
                <h4 className="my-3">Experience</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHome