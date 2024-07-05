import React from "react";


function Rooms(){
    return(
    <>
    <div className="room-container mt-5">
          <h1 className="text-center mb-4">Our Rooms</h1>
          
          <ul className="nav nav-tabs" id="roomTabs" role="tablist">
          
            <li className="nav-item">
           
              <a className="nav-link active" id="suite-room-tab" data-toggle="tab" href="#suite-room" role="tab" aria-controls="suite-room" aria-selected="true">Suite Room</a>
              
            </li>
            <li className="nav-item">
            
              <a className="nav-link" id="family-room-tab" data-toggle="tab" href="#family-room" role="tab" aria-controls="family-room" aria-selected="false">Family Room</a>
              
            </li>
            
            
            <li className="nav-item">
              <a className="nav-link" id="deluxe-room-tab" data-toggle="tab" href="#deluxe-room" role="tab" aria-controls="deluxe-room" aria-selected="false">Deluxe Room</a>
            </li>
           
          </ul>
        
          <div className="tab-content" id="roomTabsContent">
            <div className="tab-pane fade show active" id="suite-room" role="tabpanel" aria-labelledby="suite-room-tab">
              <div className="room-details">
                <h2>Suite Room</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="price">$450 / NIGHT</p>
                <a href="#" className="btn btn-primary">BOOK NOW</a>
              </div>
            </div>
            <div className="tab-pane fade" id="family-room" role="tabpanel" aria-labelledby="family-room-tab">
              <div className="room-details">
                <h2>Family Room</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="price">$450 / NIGHT</p>
                <a href="#" className="btn btn-primary">BOOK NOW</a>
              </div>
            </div>
            <div className="tab-pane fade" id="deluxe-room" role="tabpanel" aria-labelledby="deluxe-room-tab">
              <div className="room-details">
                <h2>Deluxe Room</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="price">$450 / NIGHT</p>
                <a href="#" className="btn btn-primary">BOOK NOW</a>
              </div>
            </div>
          </div>
        </div>
    </>
    );
}
export default Rooms;