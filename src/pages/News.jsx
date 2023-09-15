import React from 'react'
import UnderConstruction from '../components/UnderConstruction';

const News = () => {
  return (
    <div>

      {/* CSS in Header.css */}
      <div className='container-fluid'>
        <div className="row">
          <div className="headerContent">
            <div id='head-image-ourTeam' className='overlayImageHeader'></div>
            <p className="text-center">News</p>
            <h5 className="fw-bold">Lorem ipsum dolor sit amet.</h5>
          </div>
        </div>
      </div>

      <UnderConstruction />

    </div>
  )
}

export default News
