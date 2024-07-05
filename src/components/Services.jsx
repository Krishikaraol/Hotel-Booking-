import React from "react";
import wifi from "../Photos/wifi.jpg";
import booking from "../Photos/booking.png";
import restaurant from "../Photos/restaurant.png";
import swimmin from "../Photos/swimmin.jpg";
import beauty from "../Photos/beauty.png";
import help from "../Photos/help.png";


function Services(){
    return(
        <>
        <div className="services-section">
          <h2 className="section-title">Explore Our Hotel Services</h2>
          <div className="services-container">
            <div className="service-item">
              <div className="service-icon">
                <img src={wifi} alt="Free Wifi" />
              </div>
              <h3>Free Wifi</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src={booking} alt="Easy Booking" />
              </div>
              <h3>Easy Booking</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src={restaurant} alt="Restaurant" />
              </div>
              <h3>Restaurant</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src={swimmin} alt="Swimming Pool" />
              </div>
              <h3>Swimming Pool</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src={beauty} alt="Beauty & Health" />
              </div>
              <h3>Beauty &amp; Health</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src={help} alt="Help & Support" />
              </div>
              <h3>Help &amp; Support</h3>
            </div>
          </div>
        </div>
        </>
    );
}

export default Services