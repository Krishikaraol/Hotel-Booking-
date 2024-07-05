import React from "react";
import cozy2 from "../Photos/cozy2.jpg";
import specialoffer from "../Photos/specialoffer.jpg";


function Aboutus() {
  return <>
  <section className="about-us py-5">
          <div className="about-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-text">
                  <h2>About Us</h2>
                  <h1>A Hotel Booking Agency</h1>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <a href="#" className="btn btn-primary">Book Your Room Now</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="cards">
                      <img src={cozy2} className="card-img-top" style={{borderRadius: '10%'}} alt="Cozy Room" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Cozy Room</h5>
                        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="cards">
                      <img src={specialoffer} className="card-img-top" alt="Special Offers" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Special Offers</h5>
                        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>;
}

export default Aboutus;
