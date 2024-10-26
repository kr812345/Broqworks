import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
    useEffect(() => {
      // Scroll to the top of the page on component mount
      window.scrollTo(0, 0);
    }, []);
  
    const navigate = useNavigate();
  
    const handleReadMore = (service) => {
      navigate("/ReadMore", { state: { service } });
    };
  
    const handleShowMore = () => {
      navigate("/MoreServices");
    };
  
    return (
        <>
        <hr/>
        <div className="services">
        <div className="CTA">
        <button type="button">Become a client</button>
        </div> 
        <div className="right">
            <div className="title">
            
            </div>
            <hr/>
            <div className="service">
                <div className="service-title">

                </div>

                <div className="service-details">

                </div>
            </div>
            <hr/>
        </div>
        </div>
        </>
    );
};

export default Services;
