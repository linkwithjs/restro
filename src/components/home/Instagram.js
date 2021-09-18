import React from "react";

import insta1 from "../../img/instagram/1.png";
import insta2 from "../../img/instagram/2.png";
import insta3 from "../../img/instagram/3.png";
import insta4 from "../../img/instagram/4.png";
import insta5 from "../../img/instagram/5.png";

const Instagram = () => {
  return (
    <>
      {/* <!-- instagram Area Start--> */}
      <section className="instagram-area pd-bottom-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h3 className="sub-title">What we make</h3>
                <h2 className="title">Our Gallery On Instagram</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="thumb">
                <img className="" src={insta3} alt="img" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="thumb">
                <img src={insta4} alt="img" />
              </div>
              <div className="thumb mb-lg-0">
                <img src={insta5} alt="img" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 order-lg-first">
              <div className="thumb">
                <img src={insta1} alt="img" />
              </div>
              <div className="thumb mb-lg-0">
                <img src={insta2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- instagram Area End --> */}
    </>
  );
};

export default Instagram;
