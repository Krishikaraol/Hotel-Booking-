import React from "react";

function Review(){
    return(
    <>
    <section className="testimonial-section py-5 text-center">
          <div className="guest-container">
            <h2 className="section-title mb-5 text-center">Happy Guests</h2>
            <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="testimonial-card p-4 justify-content-center">
                        <h3 className="name">Roger Scott</h3>
                        <p className="position text-muted">MARKETING MANAGER</p>
                        <p className="testimonial-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="testimonial-card p-4 justify-content-center">
                        <h3 className="name">Maharsh Patel</h3>
                        <p className="position text-muted">MARKETING MANAGER</p>
                        <p className="testimonial-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa fugit dolor ipsum ut quo alias tempora iusto tempore voluptas, aliquam, saepe illum dignissimos asperiores non nulla. Ut nesciunt repudiandae nisi.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="testimonial-card p-4">
                        <h3 className="name">Roger Scott</h3>
                        <p className="position text-muted">MARKETING MANAGER</p>
                        <p className="testimonial-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
    </>
    );
}
export default Review