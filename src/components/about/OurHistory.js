import React from "react";

import about2 from "../../img/about/about-2.png";

const OurHistory = () => {
  return (
    <>
      {/* <!-- about Area Start--> */}
      <section className="about-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-8">
              <div className="thumb mb-4 mb-lg-0">
                <img src={about2} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-first align-self-center">
              <div className="section-title mb-0 text-center text-lg-start">
                <h3 className="sub-title">Our History</h3>
                <h2 className="title">Origins of the restaurant</h2>
                <p>
                  Sharing knowledge and skills is what we do. With passion.
                  That’s why the Alimentarium organises daily culinary workshops
                  and classNamees led by qualified chefs. A neque malesuada in
                  tortor eget justo mauris nec dolor. Consequat risus vitae, ac
                  ac et preparation.
                </p>
                <p>
                  Nunc quam nibh diam in eget. Tortor amet, eleifend sed viverra
                  ac eu porta netus pulvinar. Quis sem donec pharetra viverra
                  consectetur aliquam, platea egestas. Egestas quis fringilla
                  cursus nullam. Nisl vulputate aliquam odio massa mattis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about Area End --> */}
    </>
  );
};

export default OurHistory;
