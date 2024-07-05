import React from "react";

function Footer(){
    return(
        <>
        <footer className="footer-section py-5 text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h4 className="footer-title"><span>Hotel Booking</span></h4>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
              <div className="col-md-3">
                <h4 className="footer-title">Services</h4>
                <ul className="list-unstyled">
                  <li> Free Wifi</li>
                  <li> Easy Booking</li>     
                  <li> Restaurant</li>       
                  <li> Swimming Pool</li> 
                  <li> Beauty &amp; Health</li> 
                  <li> 60" Flatscreen TV</li>
                  <li> Cold Aircondition</li>
                  <li> Help &amp; Support</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="list-unstyled">
                  <li> Home</li>
                  <li> About</li>
                  <li> Rooms</li>
                  <li> Resto &amp; Bar</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="footer-title">Have a Questions?</h4>
                <ul className="list-unstyled">
                  <li>13 GTU Quarters,Ahmedabad,India</li>
                  <li>+91 0000000000</li>
                  <li>info@yourdomain.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="text-white text-center py-3">
          © 2024 Hotel Booking. All Rights Reserved.
        </footer>
        </>
    );
}
export default Footer;