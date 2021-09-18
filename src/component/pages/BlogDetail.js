import React from "react";
import BreadCrumb from "../common/BreadCrumb";
import { Link } from "react-router-dom";

import blogsingle from "../../img/blog/single.png";
import blogsingle2 from "../../img/blog/single-2.png";
import blogsingle3 from "../../img/blog/single-3.png";
import comment from "../../img/blog/comment.png";
import widget1 from "../../img/widget/1.png";
import widget2 from "../../img/widget/2.png";
import widget3 from "../../img/widget/3.png";
import widget4 from "../../img/widget/4.png";

const BlogDetail = () => {
  return (
    <>
      <BreadCrumb name="Blog Details" description="Food Blog" />
      {/* <!-- blog single start --> */}
      <div className="blog-single-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-inner">
                <div className="thumb pb-4">
                  <img src={blogsingle} alt="img" />
                </div>
                <span className="cat">
                  <span className="date">
                    <i className="ri-calendar-todo-fill"></i>July 14, 2021
                  </span>
                  <Link to="#" className="tag me-0">
                    <i className="ri-price-tag-3-fill"></i>Burgar
                  </Link>
                </span>
                <h3>Greek yogurt breakfast bowls with toppings</h3>
                <p>
                  Pizza, dish of Italian origin consisting of a flattened disk
                  of bread dough topped with some combination of olive oil,
                  oregano, tomato, olives, mozzarella or other cheese, and many
                  other ingredients, baked quickly—usually, in a commercial
                  setting, using a wood-fired oven heated to a very high
                  temperature—and served hot It with just a touch of sauce.
                  saucy riff, more in the style of takeout American Chinese kung
                  pao. The sauce makes it perfect for eating with rice. lacus
                  vel facilisis. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. lacus vel facilisis. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>
                <p className="pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>
                <div className="row">
                  <div className="col-6">
                    <div className="thumb mb-0">
                      <img className="w-100" src={blogsingle2} alt="img" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="thumb mb-0">
                      <img className="w-100" src={blogsingle3} alt="img" />
                    </div>
                  </div>
                </div>
                <p className="pt-4">
                  One of the simplest and most traditional pizzas is the
                  Margherita, which is topped with tomatoes or tomato sauce,
                  mozzarella, and basil. Popular legend relates that it was
                  named for Queen Margherita, wife of Umberto I, who was said to
                  have liked its mild fresh flavour and to have also noted that
                  its topping colours—green, white, and red—were those of the
                  Italian flag.
                </p>
              </div>
              <div className="tag-share-area">
                <div className="row">
                  <div className="col-sm-6 align-self-center">
                    <div className="tag-inner">
                      <span>Tags: </span>
                      <Link to="#">Fresh Food, </Link>
                      <Link to="#">Spicy, </Link>
                      <Link to="#">Delicious</Link>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3 mt-sm-0 align-items-center">
                    <ul className="social-area text-sm-end mt-md-0 mt-2">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-behance"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-google-plus-g"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="comment-area">
                <h5 className="title">03 Comments</h5>
                <div className="media">
                  <div className="media-left">
                    <img src={comment} alt="img" />
                  </div>
                  <div className="media-body">
                    <Link className="btn btn-base float-end" to="#">
                      Reply
                    </Link>
                    <h6>Haslida heris</h6>
                    <span>20 Feb 2020 at 4:00 pm</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <form className="default-form-wrap">
                <h5 className="title">Comments</h5>
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
                      <textarea rows="4" placeholder="Message..."></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-base">
                  Submit your Message
                </button>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <div className="form-group">
                      <input type="text" placeholder="Search your itmes" />
                    </div>
                    <button className="submit-btn" type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>
                <div className="widget widget-recent-post">
                  <h4 className="widget-title">Recent Post</h4>
                  <ul>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget1} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">
                              Greek yogurt breakfast bowls with toppings
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget2} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">
                              Broad, garlic & mozzarella cheese bruschetta
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget3} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">
                              Make authentic Italian margherita pizza at home
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src={widget4} alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title">
                            <Link to="#">
                              BBQ Chicken ClassNameic Pizza Large
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-newsletter">
                  <h4 className="widget-title">Newsletter</h4>
                  <p>
                    Subscribe to get the latest news, update and offer
                    information. Don't worry, we won't send spam!
                  </p>
                  <form className="newsletter-form">
                    <div className="form-group">
                      <input type="email" placeholder="Enter e-mail" />
                    </div>
                    <button className="submit-btn" type="submit">
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li>
                      <Link to="#">
                        Inspiration <span>(5)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Recipes <span>(9)</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Others <span>(18)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blog single end --> */}
    </>
  );
};

export default BlogDetail;
