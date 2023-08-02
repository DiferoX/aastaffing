import React from 'react'
import '../styles/UnderConstruction.css'
import ConstructionLogo from '../assets/ConstructionLogo.png'

const UnderConstruction = () => {
  return (
    <div className='headerConstruction' >
      <img className='ConstructionImg' src={ConstructionLogo} alt={'Construction image'} />
      {/* <img className='ConstructionImg' src={ConstructionLogo} alt={'Construction image'} /> */}
    </div>
  )
}

export default UnderConstruction
