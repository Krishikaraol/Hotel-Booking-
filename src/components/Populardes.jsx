import React from "react";
import taj from "../Photos/Taj/202011191500502487-5cba545865fd11eb8aae0242ac110003.avif";
import bloom from "../Photos/Bloom/642d8d6c52e011ea87ff0242ac110002.avif";
import crowneplaza from "../Photos/Crowneplaza/crowne-plaza-gujarat-3886826057-4x3.avif";
import leftArrow from "../Photos/Left.svg";
import rightArrow from "../Photos/Left (1).svg";

function Populardes(){
    return(
        <>
        <section className="popular-destinations mb-5">
          <h1 className="text-center">Popular Destinations</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="slider mb-5">
              
                <div className="slides">
                  <div className="slide"><img src={taj} alt="Image 1" /></div>
                  <div className="slide"><img src={bloom} alt="Image 3" /></div>
                  <div className="slide"><img src={crowneplaza} alt="Image 3" /></div>
                </div>
                
                <button className="prev"><img src={leftArrow} alt="" /></button>
                <button className="next"><img src={rightArrow} alt="" /></button>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}

export default Populardes