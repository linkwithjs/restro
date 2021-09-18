import React from "react";

import img1 from "../../img/1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* <!-- Banner Area Start--> */}
      <section className="banner-area banner-area-2">
        <div className="banner-thumb">
          <img src={img1} alt="img" />
        </div>
        <div className="banner-bg">
          <div className="banner-bg-img"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 align-self-center">
              <div className="banner-inner">
                <h3>Japanese Test</h3>
                <h1>Different spice for a Different taste</h1>
                <p>
                  You need not only Just Food Stalls with Persons but also
                  specialized equipment start the Fast Food
                </p>
                <Link className="btn btn-secondary" to="/shop">
                  GET IT NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Area End --> */}
    </>
  );
};

export default Banner;
