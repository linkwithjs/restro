import React from "react";

import about from "../../img/about.png";
import icon1 from "../../img/icon/1.png";
import icon2 from "../../img/icon/2.png";
import icon3 from "../../img/icon/3.png";
import icon4 from "../../img/icon/4.png";

const AboutArea = () => {
  return (
    <>
      {/* <!-- about Area Start--> */}
      <section className="about-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="thumb mb-lg-0 mb-4">
                <img src={about} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title text-lg-start text-center">
                <h3 className="sub-title">Why choose us</h3>
                <h2 className="title">Why we are the best</h2>
                <p>
                  A, blandit euismod ullamcorper vestibulum enim habitasse.
                  Ultrices tincidunt scelerisque elit enim. A neque malesuada in
                  tortor eget justo mauris nec dolor. Consequat risus vitae, ac
                  ac et preparation. He wanted to serve burgers, fries and
                  beverages that tasted .
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-about-wrap style-2">
                    <img src={icon1} alt="img" />
                    Fresh food
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-about-wrap style-2">
                    <img src={icon2} alt="img" />
                    Fast Delivery
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-about-wrap style-2">
                    <img src={icon3} alt="img" />
                    Quality Maintain
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-about-wrap style-2">
                    <img src={icon4} alt="img" />
                    24/7 Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about Area End --> */}
    </>
  );
};

export default AboutArea;
