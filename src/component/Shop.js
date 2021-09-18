import React from "react";
import { Link } from "react-router-dom";

import category1 from "../img/category/1.png";
import category2 from "../img/category/2.png";
import category3 from "../img/category/3.png";
import category4 from "../img/category/4.png";
import category5 from "../img/category/5.png";
import category6 from "../img/category/6.png";

import pizza1 from "../img/product/pizza/1.png";
import pizza2 from "../img/product/pizza/2.png";
import pizza3 from "../img/product/pizza/3.png";
import pizza4 from "../img/product/pizza/4.png";
import pizza5 from "../img/product/pizza/5.png";
import pizza6 from "../img/product/pizza/6.png";

import burger1 from "../img/product/burger/1.png";
import burger2 from "../img/product/burger/2.png";

import widget03 from "../img/widget/03.png";
import widget01 from "../img/widget/01.png";
import widget02 from "../img/widget/02.png";
// import widget4 from "../img/widget/4.png";
import widget04 from "../img/widget/04.png";

import ad from "../img/ad.png";
import BreadCrumb from "./common/BreadCrumb";

const Shop = () => {
  return (
    <>
      <BreadCrumb name="Choose you items" description="Shop Page" />
      {/* <!-- shop Area Start--> */}
      <section className="shop-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row justify-content-center">
                <div className="col-sm-6 align-self-center pb-4">
                  <p className="mb-0">Showing 1–8 of 12 results</p>
                </div>
                <div className="col-sm-6 align-self-center pb-4">
                  <select className="single-select float-sm-end">
                    <option>Default sorting</option>
                    <option value="asc">Pizza</option>
                    <option value="desc">Burger</option>
                    <option value="pop">Ramen</option>
                  </select>
                </div>
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src={pizza3} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/shop-detail">
                          Roasted Garlic Chicken Pizza
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
                <div className="col-md-6">
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
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src={pizza5} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-line"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/shop-detail">
                          Chicken Fajita Pizza Large
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
              </div>
            </div>
            <div className="col-lg-4 order-lg-first">
              <div className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <div className="form-group">
                      <input type="text" placeholder="Search your items" />
                    </div>
                    <button className="submit-btn" type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories style-2">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={category1} alt="img" /> Ramen <span>(5)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={category2} alt="img" /> Pizza <span>(9)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={category3} alt="img" /> Burger
                        <span>(18)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={category4} alt="img" /> French fries
                        <span>(14)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={category5} alt="img" /> Fast food
                        <span>(10)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={category6} alt="img" /> Soft drinks
                        <span>(28)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_filter">
                  <h4 className="widget-title">Filter by Price</h4>
                  <div className="side-bar-range">
                    <div id="slider-range"></div>
                    <div className="row g-0">
                      <div className="col-lg-6 align-self-center">
                        <Link className="btn btn-base" to="#">
                          Filter
                        </Link>
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <p>
                          Price:
                          <input type="text" id="amount" readonly />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget-recent-post style-2">
                  <h4 className="widget-title">Today’s Best Deals</h4>
                  <ul>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget01} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">Patty Buns Burgers</Link>
                          </h6>
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
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget02} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">Garlic Chicken Pizza</Link>
                          </h6>
                          <div className="rating">
                            4.9
                            <span className="rating-inner">
                              <i className="ri-star-fill ps-0"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-line pe-0"></i>
                            </span>
                            (262)
                          </div>
                          <h6 className="price">$20.00</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget03} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">BBQ Chicken Pizza</Link>
                          </h6>
                          <div className="rating">
                            4.9
                            <span className="rating-inner">
                              <i className="ri-star-fill ps-0"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-line pe-0"></i>
                            </span>
                            (262)
                          </div>
                          <h6 className="price">$27.00</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget04} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">Margherita Pizza</Link>
                          </h6>
                          <div className="rating">
                            4.9
                            <span className="rating-inner">
                              <i className="ri-star-fill ps-0"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-line pe-0"></i>
                            </span>
                            (262)
                          </div>
                          <h6 className="price">$35.00</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link className="d-block mb-5" to="#">
                  <img className="w-100" src={ad} alt="img" />
                </Link>
              </div>
            </div>
            <div className="col-12">
              <nav className="text-end">
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
      {/* <!-- shop Area End --> */}
    </>
  );
};

export default Shop;
