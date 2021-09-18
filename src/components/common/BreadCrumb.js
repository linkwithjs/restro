import React from "react";

import shape1 from "../../img/banner/shape-1.png";
import shape2 from "../../img/banner/shape-2.png";

const BreadCrumb = ({ name, description }) => {
  return (
    <>
      {/* <!-- bredcrumb Area Start--> */}
      <section className="breadcrumb-area">
        <div className="banner-bg-img"></div>
        <div className="banner-shape-1">
          <img src={shape1} alt="img" />
        </div>
        <div className="banner-shape-2">
          <img src={shape2} alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner text-center">
                <h3>{name}</h3>
                <h1>{description}</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="home-1.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {name}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- bredcrumb Area End --> */}
    </>
  );
};

export default BreadCrumb;
