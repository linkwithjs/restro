import React from "react";
import { Link } from "react-router-dom";

import pizza1 from "../img/product/pizza/1.png";
import pizza2 from "../img/product/pizza/2.png";
import burger1 from "../img/product/burger/1.png";

const RelatedProduct = () => {
  return (
    <>
      {/* <!-- related-product Area Start--> */}
      <section className="related-product-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title mb-0">
                <h2 className="title">Related Products</h2>
              </div>
              <div className="related-product-slider owl-carousel style-2">
                <div className="item">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src={pizza1} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/shop-detail">Margherita Pizza</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link className="btn btn-secondary" to="/shop-detail">
                        CHOOSE OPTIONS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src={pizza2} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/shop-detail">Maxican Pizza Test Better</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <Link className="btn btn-secondary" to="/shop-detail">
                          CHOOSE OPTIONS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src={burger1} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/shop-detail">Patty Buns Burgers</Link>
                      </h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line pe-0"></i>
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link className="btn btn-secondary" to="/shop-detail">
                        CHOOSE OPTIONS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- related-product Area End --> */}
    </>
  );
};

export default RelatedProduct;
