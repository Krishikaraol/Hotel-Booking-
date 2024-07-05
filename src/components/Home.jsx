import React from 'react';

function Home() {
  return (
    <div className='hotel'>
    <section className="hero">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Newsletter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Rooms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="heroCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-caption d-none d-md-block">
              <h1>Discover Extraordinary Comfort in Hotels</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="booking-section d-flex bg-dark text-white p-3">
      <div className="booking-container d-flex justify-content-between align-items-center">
        <div className="form-group m-0">
          <label htmlFor="checkin" className="d-block">CHECK-IN</label>
          <input type="text" id="checkin" className="form-control" placeholder="Check-In Date" />
        </div>
        <div className="form-group m-0">
          <label htmlFor="checkout" className="d-block">CHECK-OUT</label>
          <input type="text" id="checkout" className="form-control" placeholder="Check-Out Date" />
        </div>
        <div className="form-group m-0">
          <label htmlFor="rooms" className="d-block">ROOMS</label>
          <select id="rooms" className="form-control">
            <option>Suite</option>
            <option>Deluxe</option>
            <option>Standard</option>
          </select>
        </div>
        <div className="form-group m-0">
          <label htmlFor="guests" className="d-block">GUESTS</label>
          <select id="guests" className="form-control">
            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary">CHECK AVAILABILITY</button>
        </div>
      </div>
    </div>
</div>
  );
}

export default Home