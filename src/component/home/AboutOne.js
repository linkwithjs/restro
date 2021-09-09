import React from "react";
import { Link } from "react-router-dom";
import about1 from "../../img/about/1.png";
import testimonial1 from "../../img/testimonial/testimonial1.png";

const AboutOne = () => {
  return (
    <>
      {/* <!-- about Area Start--> */}
      <section
        className="about-area pd-top-120 pd-bottom-90"
        style={{
          backgroundImage: `url(${testimonial1})`,
          backgroundColor: "#faf7f2",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="about-default-thumb">
                <img src={about1} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10 order-lg-first align-self-center">
              <div className="section-title text-lg-start text-center">
                <h3 className="sub-title">Why choose us</h3>
                <h2 className="title">
                  We Have Excellent Of Quality Japanese Food
                </h2>
                <p>
                  A, blandit euismod ullamcorper vestibulum enim habitasse.
                  Ultrices tincidunt scelerisque elit enim. A neque malesuada in
                  tortor eget justo mauris nec dolor. Consequat risus vitae, ac
                  ac et preparation. He wanted to serve burgers, fries and
                  beverages that tasted .
                </p>
                <Link className="btn btn-secondary" to="/menu-list">
                  CHECK OUR MENU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about Area End --> */}
    </>
  );
};

export default AboutOne;
