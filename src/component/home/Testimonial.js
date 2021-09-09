import React from "react";

import testimonial from "../../img/testimonial/testimonial.png";

const Testimonial = () => {
  return (
    <>
      {/* <!-- testimonial Area Start--> */}
      <section className="testimonial-area-2 pd-top-110 pd-bottom-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="testimonial-slider owl-carousel">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="thumb">
                        <img src={testimonial} alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12 align-self-center">
                      <div className="testimonial-wrap">
                        <div className="section-title">
                          <h3 className="sub-title">Our Testimonials</h3>
                          <h2 className="title">
                            Over 10,000 Fool lover say Foodka are best
                          </h2>
                        </div>
                        <p>
                          “We have no regrets! I don't know what else to say. It
                          really saves me time and effort. Food is exactly what
                          our business has been lacking”
                        </p>
                        <h3>Julia R. Davis</h3>
                        <h6>Food Bloger</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="thumb">
                        <img src={testimonial} alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12 align-self-center">
                      <div className="testimonial-wrap">
                        <div className="section-title">
                          <h3 className="sub-title">Our Testimonials</h3>
                          <h2 className="title">
                            Over 10,000 Fool lover say Foodka are best
                          </h2>
                        </div>
                        <p>
                          “We have no regrets! I don't know what else to say. It
                          really saves me time and effort. Food is exactly what
                          our business has been lacking”
                        </p>
                        <h3>Julia R. Davis</h3>
                        <h6>Food Bloger</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonial Area End --> */}
    </>
  );
};

export default Testimonial;
