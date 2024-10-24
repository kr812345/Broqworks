import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo.webp";
import home_img from "../../assets/home_img.svg";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import hero_graphic from "../../assets/hero_graphic.svg"
const Hero = () => {
  return (
    
    <>

      <div className="home">
        <div className="left-side">
          <h1>90% of Businesses fail because of poor marketing</h1>
          <p className="para">
            But don’t worry, BroqWorks equips businesses with everything they need
            to attract more clients and thrive in a competitive market.
          </p>
          <div className="contact-details">
            <h5>
              <a href="tel:8178584661">
                <img className="icon_" src={call_icon} alt="" />
                <p>+91-8178-584-661</p>
              </a>
            </h5>
            <h5>
              <a href="mailto:getintouch@broqworks.com">
                <img className="icon_" src={mail_icon} alt="" />
                <p>getintouch@broqworks.com</p>
              </a>
            </h5>
          </div>
          <div className="connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <h5>Book appointment</h5>
            </AnchorLink>
          </div>
        </div>
          <div className="right-side">
          <img src={hero_graphic} alt="" />
          </div>

      </div>
    </>
  );
};

export default Hero;