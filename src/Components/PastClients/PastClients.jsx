import React from 'react'
import './PastClients.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import du from '../../assets/du.png'
import tulogo from '../../assets/tulogo.png'

const PastClients = () => {
  return (
    <div className='PastClients'>
      <div className="PasrClient-container">
        <div className="top">
          <h1>Our past clients</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className="clients">
          <img src={du} alt="" />
          <img src={tulogo} alt="" />
        </div>
      </div>

    </div>
  )
}

export default PastClients
