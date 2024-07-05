import React from "react";


function Blogs(){
    return(
    <>
    <div className="blog-container mt-5">
          <h1 className="text-center mb-4">Recent Blog</h1>
          <div id="blogAccordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Best Hotel in Ahmedabad
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#blogAccordion">
                <div className="card-body">
                  <p>ADMIN DEC. 23, 2020 3 COMMENTS</p>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Best Hotel in Ahmedabad
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#blogAccordion">
                <div className="card-body">
                  <p>ADMIN DEC. 23, 2020 3 COMMENTS</p>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Best Hotel in Ahmedabad
                  </button>
                </h5>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#blogAccordion">
                <div className="card-body">
                  <p>ADMIN DEC. 23, 2020 3 COMMENTS</p>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Best Hotel in Ahmedabad
                  </button>
                </h5>
              </div>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#blogAccordion">
                <div className="card-body">
                  <p>ADMIN DEC. 23, 2020 3 COMMENTS</p>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
    );
}
export default Blogs;