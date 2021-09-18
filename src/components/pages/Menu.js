import React from "react";

import { Link } from "react-router-dom";

import category1 from "../../img/category/1.png";
import category2 from "../../img/category/2.png";
import category3 from "../../img/category/3.png";
import category4 from "../../img/category/4.png";
import category5 from "../../img/category/5.png";
import category6 from "../../img/category/6.png";

import pizza1 from "../../img/product/pizza/1.png";
import pizza2 from "../../img/product/pizza/2.png";
import pizza3 from "../../img/product/pizza/3.png";
import pizza4 from "../../img/product/pizza/4.png";
import pizza5 from "../../img/product/pizza/5.png";
import pizza6 from "../../img/product/pizza/6.png";

import burger1 from "../../img/product/burger/1.png";
import burger2 from "../../img/product/burger/2.png";

import ad from "../../img/ad.png";
import BreadCrumb from "../common/BreadCrumb";

const Menu = () => {
  return (
    <>
      <BreadCrumb name="Choose you items" description="Our Menu" />
      {/* <!-- category Area Start--> */}
      <section className="category-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 align-self-center">
              <ul className="category-menu">
                <li className="category-wrap">
                  <Link to="/shop">
                    <img src={category1} alt="category" />
                    Ramen
                  </Link>
                </li>
                <li className="category-wrap">
                  <Link to="#">
                    <img src={category2} alt="category" />
                    Pizza
                  </Link>
                  <div className="category-sub-menu">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img src={pizza1} alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to="/shop">Margherita Pizza</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img src={pizza2} alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to="/shop">Maxican Pizza Test Better</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img src={pizza3} alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to="/shop">Margherita Pizza</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <Link to="#">
                          <img src={pizza4} alt="img" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="category-wrap">
                  <Link to="#">
                    <img src={category3} alt="category" />
                    Burger
                  </Link>
                  <div className="category-sub-menu">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img src={burger1} alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to="/shop">Patty Buns Burgers</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img src={burger1} alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to="/shop">Maxican Pizza Test Better</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="single-item-wrap text-center">
                          <div className="thumb">
                            <img src={burger1} alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <Link to="/shop">Margherita Pizza</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <Link to="#">
                          <img src={ad} alt="img" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="category-wrap">
                  <Link to="/shop">
                    <img src={category4} alt="category" />
                    French fries
                  </Link>
                </li>
                <li className="category-wrap">
                  <Link to="/shop">
                    <img src={category5} alt="category" />
                    Fast food
                  </Link>
                </li>
                <li className="category-wrap">
                  <Link to="/shop">
                    <img src={category6} alt="category" />
                    Soft drinks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category Area End -->  */}

      {/* <!-- populer Area Start--> */}
      <section className="populer-area pd-top-50 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src={pizza3} alt="img" />
                  <Link className="fav-btn" to="#">
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to="/shop-detail">Roasted Garlic Chicken Pizza</Link>
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
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src={pizza4} alt="img" />
                  <Link className="fav-btn" to="#">
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to="/shop-detail">All Season Gulliver Pizza</Link>
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
                    <h6 className="price">$29.00</h6>
                  </div>
                </div>
                <div className="btn-area">
                  <Link className="btn btn-secondary" to="/shop-detail">
                    CHOOSE OPTIONS
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src={pizza5} alt="img" />
                  <Link className="fav-btn" to="#">
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to="/shop-detail">Chicken Fajita Pizza Large</Link>
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
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src={pizza6} alt="img" />
                  <Link className="fav-btn" to="#">
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to="/shop-detail">
                      BBQ Chicken ClassNameic Pizza Large
                    </Link>
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
                      (602)
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
              <div className="single-item-wrap">
                <div className="thumb">
                  <img src={burger2} alt="img" />
                  <Link className="fav-btn" to="#">
                    <i className="ri-heart-line"></i>
                  </Link>
                </div>
                <div className="wrap-details">
                  <h5>
                    <Link to="/shop-detail">Double Burger</Link>
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-12">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="ri-arrow-left-s-line"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- populer Area End --> */}
    </>
  );
};

export default Menu;
