import React from "react";
import gallery1 from "../Photos/Gallery/gallery-1.jpg.webp";
import gallery3 from "../Photos/Gallery/gallery-3.jpg.webp";
import gallery4 from "../Photos/Gallery/gallery-4.jpg.webp";
import gallery5 from "../Photos/Gallery/gallery-5.jpg.webp"

function Gallery(){
    return(
        <>
<section className="gallery mb-5">
          <h2 className="text-center">Gallery</h2>
          <div className="row">
            <div className="col-md-3">
              <img src={gallery1} className="img-fluid mb-3" alt="Gallery Image 1" />
            </div>
            <div className="col-md-3">
              <img src={gallery3} className="img-fluid mb-3" alt="Gallery Image 2" />
            </div>
            <div className="col-md-3">
              <img src={gallery4} className="img-fluid mb-3" alt="Gallery Image 3" />
            </div>
            <div className="col-md-3">
              <img src={gallery5} className="img-fluid mb-3" alt="Gallery Image 4" />
            </div>
          </div>
        </section>
        </>
    );
}
export default Gallery