import React from "react";

import { Link } from "react-router-dom";

import shop1 from "../img/shop/1.png";
import shop2 from "../img/shop/2.png";
import shop3 from "../img/shop/3.png";
import shop4 from "../img/shop/4.png";
import shop5 from "../img/shop/5.png";

import single1 from "../img/shop/single-1.png";
import single2 from "../img/shop/single-2.png";
import single3 from "../img/shop/single-3.png";
import single4 from "../img/shop/single-4.png";
import single5 from "../img/shop/single-5.png";

// import blogsingle from "../img/blog/single.png";
import blogsingle2 from "../img/blog/single-2.png";
import blogsingle3 from "../img/blog/single-3.png";

import icon1 from "../img/icon/1.png";
import icon2 from "../img/icon/2.png";
import icon3 from "../img/icon/3.png";
import icon4 from "../img/icon/4.png";

import comment from "../img/blog/comment.png";
// import RelatedProduct from "./RelatedProduct";

const ShopDetail = () => {
  return (
    <>
      {/* <!-- shop-details Area Start--> */}
      <div className="shop-details-area pd-top-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="sticy-product">
                <div className="product-thumbnail-wrapper">
                  <div className="single-thumbnail-slider">
                    <div className="slider-item">
                      <img src={single1} alt="item" />
                    </div>
                    <div className="slider-item">
                      <img src={single2} alt="item" />
                    </div>
                    <div className="slider-item">
                      <img src={single3} alt="item" />
                    </div>
                    <div className="slider-item">
                      <img src={single4} alt="item" />
                    </div>
                    <div className="slider-item">
                      <img src={single5} alt="item" />
                    </div>
                  </div>
                  <div className="product-thumbnail-carousel">
                    <div className="single-thumbnail-item">
                      <img src={shop1} alt="item" />
                    </div>
                    <div className="single-thumbnail-item">
                      <img src={shop2} alt="item" />
                    </div>
                    <div className="single-thumbnail-item">
                      <img src={shop3} alt="item" />
                    </div>
                    <div className="single-thumbnail-item">
                      <img src={shop4} alt="item" />
                    </div>
                    <div className="single-thumbnail-item">
                      <img src={shop5} alt="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shop-item-details">
                <nav>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/homepage">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop Details
                    </li>
                  </ul>
                </nav>
                <h2 className="entry-title">Maxican Pizza Test Better</h2>
                <div className="row">
                  <div className="col-lg-6 order-lg-last align-self-center">
                    <div className="rating text-lg-end">
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
                  <div className="col-lg-6 align-self-center">
                    <h4 className="price">$27.00</h4>
                  </div>
                </div>
                <p className="mt-4">
                  Pizza is a savory dish of Italian origin consisting of a
                  usually round, flattened base of leavened wheat-based dough
                  topped with tomatoes, cheese, and often various other
                  ingredients, which is then baked at a high temperature,
                  traditionally in a wood-fired oven. A small pizza is sometimes
                  called a pizzetta.
                </p>
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div className="variation">
                      <h6>Select Size</h6>
                      <ul className="size">
                        <li>
                          <Link to="#">10"</Link>
                        </li>
                        <li>
                          <Link to="#">12"</Link>
                        </li>
                        <li>
                          <Link to="#">14"</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="variation">
                      <h6>Select Crust</h6>
                      <select className="single-select">
                        <option>--Choose youe Size--</option>
                        <option defaulValue="asc">Pizza</option>
                        <option defaulValue="desc">Burger</option>
                        <option defaulValue="pop">Ramen</option>
                      </select>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="quantity buttons_added">
                    <input type="button" defaulValue="-" className="minus" />
                    <input
                      type="number"
                      className="input-text qty text"
                      step="1"
                      min="1"
                      max="10000"
                      name="quantity"
                      defaulValue="1"
                    />
                    <input type="button" defaulValue="+" className="plus" />
                  </div>
                  <button type="submit" className="btn btn-secondary">
                    ADD TO CART
                  </button>
                </form>
                <ul className="cat">
                  <li>SKU: PZ2866</li>
                  <li>
                    Categories: <Link to="#">Pizza</Link>
                  </li>
                  <li>
                    Tags: <Link to="#">Boscaiola,</Link>
                    <Link to="#">Pizza</Link>
                  </li>
                </ul>
                <div className="shop-tabs">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Additional information
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Reviews (1)
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <p className="mb-4">
                        Pizza, dish of Italian origin consisting of a flattened
                        disk of bread dough topped with some combination of
                        olive oil, oregano, tomato, olives, mozzarella or other
                        cheese, and many other ingredients, baked
                        quickly—usually, in a commercial setting, using a
                        wood-fired oven heated to a very high temperature—and
                        served hot
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <img className="w-100" src={blogsingle2} alt="img" />
                        </div>
                        <div className="col-6">
                          <img className="w-100" src={blogsingle3} alt="img" />
                        </div>
                      </div>
                      <p className="mt-4">
                        One of the simplest and most traditional pizzas is the
                        Margherita, which is topped with tomatoes or tomato
                        sauce, mozzarella, and basil. Popular legend relates
                        that it was named for Queen Margherita, wife of Umberto
                        I, who was said to have liked its mild fresh flavour and
                        to have also noted that its topping colours—green,
                        white, and red—were those of the Italian flag.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <h6 className="title">About Product</h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centu but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <p>
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of lorem Ipsum.
                      </p>
                      <div className="quick-view mt-4">
                        <h6 className="title mb-4">Quick View</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="single-about-wrap style-2">
                              <img src={icon1} alt="img" />
                              Fresh food
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-about-wrap style-2">
                              <img src={icon2} alt="img" />
                              Fast Delivery
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-about-wrap style-2">
                              <img src={icon3} alt="img" />
                              Quality Maintain
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-about-wrap style-2">
                              <img src={icon4} alt="img" />
                              24/7 Service
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="comment-area">
                        <div className="media">
                          <div className="media-left">
                            <img src={comment} alt="img" />
                          </div>
                          <div className="media-body">
                            <h6>Haslida heris</h6>
                            <span>20 Feb 2020 at 4:00 pm</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo viverra maecenas
                              accumsan lacus vel facilisis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <form className="default-form-wrap style-2">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="single-input-wrap">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-input-wrap">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="single-textarea-wrap">
                              <textarea
                                rows="4"
                                placeholder="Review..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-base">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- shop-details Area End --> */}

      {/* Related Products */}
      {/* <RelatedProduct /> */}
    </>
  );
};

export default ShopDetail;
