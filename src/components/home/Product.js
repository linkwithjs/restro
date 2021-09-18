//import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import category1 from "../../img/category/1.png";
// import category2 from "../../img/category/2.png";
// import category3 from "../../img/category/3.png";
// import category4 from "../../img/category/4.png";
// import category5 from "../../img/category/5.png";
// import category6 from "../../img/category/6.png";

import product01 from "../../img/product/01.png";
import product02 from "../../img/product/02.png";
import product03 from "../../img/product/03.png";
import product04 from "../../img/product/04.png";
import product05 from "../../img/product/05.png";
import product06 from "../../img/product/06.png";
import product07 from "../../img/product/07.png";
import product08 from "../../img/product/08.png";

//product json data
import ProductData from "./ProductData";
import Items from "./Items";
import { addItem } from "../common/AddToCart";

const Product = () => {
  return (
    <>
      {/* <!-- product Area Start--> */}
      <section className="product-area pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title">Our signature</h3>
                <h2 className="title">Delicious Deals for Delicious Meals</h2>
              </div>
              <ul
                className="product-nav style-2 nav nav-pills"
                id="pills-tab"
                role="tablist"
              >
                {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-ramen-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ramen"
                    type="button"
                    role="tab"
                    aria-controls="pills-ramen"
                    aria-selected="true"
                  >
                    <img src={category1} alt="img" />
                    Ramen
                  </button>
                </li> */}

                {ProductData.map((curElem, index) => {
                  const { id, target, controls, img, name } = curElem;
                  return (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className={
                          id === "pills-ramen-tab"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        id={id}
                        data-bs-toggle="pill"
                        data-bs-target={target}
                        type="button"
                        role="tab"
                        aria-controls={controls}
                        aria-selected={
                          id === "pills-ramen-tab" ? "true" : "false"
                        }
                      >
                        <img src={category1} alt="img" />
                        {name}
                      </button>
                    </li>
                  );
                })}

                {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-pizza-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-pizza"
                    type="button"
                    role="tab"
                    aria-controls="pills-pizza"
                    aria-selected="false"
                  >
                    <img src={category2} alt="img" />
                    Pizza
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-burger-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-burger"
                    type="button"
                    role="tab"
                    aria-controls="pills-burger"
                    aria-selected="false"
                  >
                    <img src={category3} alt="img" />
                    Burger
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-french-fry-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-french-fry"
                    type="button"
                    role="tab"
                    aria-controls="pills-french-fry"
                    aria-selected="false"
                  >
                    <img src={category4} alt="img" />
                    French fries
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-fast-food-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-fast-food"
                    type="button"
                    role="tab"
                    aria-controls="pills-fast-food"
                    aria-selected="false"
                  >
                    <img src={category5} alt="img" />
                    Fast food
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-drinks-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-drinks"
                    type="button"
                    role="tab"
                    aria-controls="pills-drinks"
                    aria-selected="false"
                  >
                    <img src={category6} alt="img" />
                    Soft drinks
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-ramen"
              role="tabpanel"
              aria-labelledby="pills-ramen-tab"
            >
              <div className="row justify-content-center">
                {Items.map((curElem, index) => {
                  const { id, name, rating, price, quantity } = curElem;
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                      <div className="single-item-wrap style-2">
                        <div className="thumb">
                          <img src={product01} alt="img" />
                          <Link className="fav-btn" to="#">
                            <i className="ri-heart-fill"></i>
                          </Link>
                        </div>
                        <div className="wrap-details">
                          <h5>
                            <Link to="/shop-detail">{name}</Link>
                          </h5>
                          <div className="wrap-footer">
                            <div className="rating">
                              {rating}
                              <span className="rating-inner">
                                <i className="ri-star-fill ps-0"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-line pe-0"></i>
                              </span>
                              (200)
                            </div>
                          </div>
                          <div className="btn-area">
                            <h6 className="price">${price}</h6>
                            {/* <Link className="btn btn-secondary" to="/shop-details">
                          Add to cart <i className="ri-add-line"></i>
                        </Link> */}
                            <button
                              className="btn btn-secondary"
                              onClick={() => {
                                addItem(id, name, price, quantity);
                              }}
                            >
                              Add to cart <i className="ri-add-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* 
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product02} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/shop-detail">Gulliver Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/shop-detail">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* 
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product03} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/shop-detail">Cheese Momos</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* 
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product04} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Patty Buns Burgers</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product05} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Margherita Pizza </Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product06} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Maxican Pizza</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product07} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Garlic Chicken Pizza</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product08} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">BBQ Chicken Pizza </Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-pizza"
              role="tabpanel"
              aria-labelledby="pills-pizza-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product05} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Margherita Pizza</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product06} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Maxican Pizza</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product07} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Garlic Chicken Pizza</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product08} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">BBQ Chicken Pizza </Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-burger"
              role="tabpanel"
              aria-labelledby="pills-burger-tab"
            >
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product01} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Double Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product02} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Gulliver Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product03} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Cheese Momos</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product04} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Patty Buns Burgers</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-french-fry"
              role="tabpanel"
              aria-labelledby="pills-french-fry-tab"
            >
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product01} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Double Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product02} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Gulliver Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product03} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Cheese Momos</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product04} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Patty Buns Burgers</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-fast-food"
              role="tabpanel"
              aria-labelledby="pills-fast-food-tab"
            >
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product01} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Double Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product02} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Gulliver Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product03} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Cheese Momos</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product04} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Patty Buns Burgers</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-drinks"
              role="tabpanel"
              aria-labelledby="pills-drinks-tab"
            >
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product01} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Double Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product02} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Gulliver Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product03} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Cheese Momos</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-item-wrap style-2">
                    <div className="thumb">
                      <img src={product04} alt="img" />
                      <Link className="fav-btn" to="#">
                        <i className="ri-heart-fill"></i>
                      </Link>
                    </div>
                    <div className="wrap-details">
                      <h5>
                        <Link to="/">Patty Buns Burger</Link>
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
                      </div>
                      <div className="btn-area">
                        <h6 className="price">$17.00</h6>
                        <Link className="btn btn-secondary" to="/">
                          Add to cart <i className="ri-add-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product Area End --> */}
    </>
  );
};

export default Product;
