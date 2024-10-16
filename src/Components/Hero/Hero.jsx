import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/logo.webp'
import home_img from '../../assets/home_img.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'

const Hero = () => {
  return (
    // <div id='home' className='hero'>
    //   <img src={logo} alt="" className='profile-img' />
    //   <h1><span>We are Broqworks</span></h1>
    //   <p>Leading social media marketing agency offering expert marketing, website building, social media management, and product photography services.</p>
    //   <div className="hero-action">
    //     <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Us</AnchorLink></div>
    //     {/* <div className="hero-resume">My resume</div> */}
    //   </div>
    // </div>
    <>
    <div className='home'>
    <div className='left-side'>
      <h1>
      90% of Businesses fail because of poor marketing
      </h1>
      <p>
      But don’t worry, from strategic marketing to custom designs and photography, BroqWorks equips businesses with everything they need to attract more clients and thrive in a competitive market.
      </p>
      <div className='contact-details'>
      <h5><a href="tel:8178584661"><img className='icon_' src={call_icon} alt="" /><p>+91-8178-584-661</p></a></h5>
      <h5><a href="mailto:getintouch@broqworks.com"><img className='icon_' src={mail_icon} alt="" /><p>getintouch@broqworks.com</p></a></h5>
      </div>
      <div className="connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><h5>Connect With Us</h5></AnchorLink></div>
    </div>

    <div className='right-side'>
    <img src={home_img} alt="" />
    </div>
    </div>
    </>
  )
}

export default Hero
