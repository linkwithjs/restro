import React from "react";
import { Link } from "react-router-dom";

import BreadCrumb from "../common/BreadCrumb";

// import blog1 from "../../img/blog/1.png";
// import blog2 from "../../img/blog/2.png";
// import blog3 from "../../img/blog/3.png";
// import blog4 from "../../img/blog/4.png";
// import blog5 from "../../img/blog/5.png";
// import blog6 from "../../img/blog/6.png";
import widget1 from "../../img/widget/1.png";
// import widget2 from "../../img/widget/2.png";
// import widget3 from "../../img/widget/3.png";
// import widget03 from "../../img/widget/03.png";
// import widget01 from "../../img/widget/01.png";
// import widget02 from "../../img/widget/02.png";
//import widget4 from "../../img/widget/4.png";
// import widget04 from "../../img/widget/04.png";
import BlogData from "../home/BlogData";
import BlogCard from "../home/BlogCard";

const Blog = () => {
  return (
    <>
      <BreadCrumb name="Blog" description="Food Blog" />
      {/* <!-- blog Area Start--> */}
      <section className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row justify-content-center">
                {BlogData.map((curElem) => {
                  const { id, img, date, name, linkdesc, hoverdesc } = curElem;
                  return (
                    <>
                      <div className="col-sm-6">
                        <BlogCard
                          key={id}
                          img={img}
                          date={date}
                          name={name}
                          linkdesc={linkdesc}
                          hoverdesc={hoverdesc}
                        />
                      </div>
                    </>
                  );
                })}
                {/* <div className="col-sm-6">
                  <div className="single-blog-wrap">
                    <div className="thumb">
                      <img src={blog1} alt="img" />
                    </div>
                    <div className="wrap-details">
                      <span className="cat">
                        <span className="date">
                          <i className="ri-calendar-todo-fill"></i>July 14, 2021
                        </span>
                        <Link to="#" className="tag me-0">
                          <i className="ri-price-tag-3-fill"></i>Burgar
                        </Link>
                      </span>
                      <h5>
                        <Link to="/blog-details">
                          Greek yogurt breakfast bowls with toppings
                        </Link>
                      </h5>
                      <div className="wrap-hover-area">
                        <p>
                          It with just a touch of sauce. saucy riff, more in the
                          style of takeout American Chinese kung pao. The sauce
                          makes it perfect for eating with rice.
                        </p>
                        <Link className="link-btn" to="blog-details.html">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-sm-6">
                  <div className="single-blog-wrap">
                    <div className="thumb">
                      <img src={blog2} alt="img" />
                    </div>
                    <div className="wrap-details">
                      <span className="cat">
                        <span className="date">
                          <i className="ri-calendar-todo-fill"></i>July 05, 2021
                        </span>
                        <Link to="#" className="tag me-0">
                          <i className="ri-price-tag-3-fill"></i>Pizza
                        </Link>
                      </span>
                      <h5>
                        <Link to="blog-details.html">
                          Broad beans, tomato, garlic & mozzarella bruschetta
                        </Link>
                      </h5>
                      <div className="wrap-hover-area">
                        <p>
                          It with just a touch of sauce. saucy riff, more in the
                          style of takeout American Chinese kung pao. The sauce
                          makes it perfect for eating with rice.
                        </p>
                        <Link className="link-btn" to="blog-details.html">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-blog-wrap">
                    <div className="thumb">
                      <img src={blog3} alt="img" />
                    </div>
                    <div className="wrap-details">
                      <span className="cat">
                        <span className="date">
                          <i className="ri-calendar-todo-fill"></i>August 14,
                          2021
                        </span>
                        <Link to="#" className="tag me-0">
                          <i className="ri-price-tag-3-fill"></i>Pizza
                        </Link>
                      </span>
                      <h5>
                        <Link to="blog-details.html">
                          Make authentic Italian margherita pizza at home
                        </Link>
                      </h5>
                      <div className="wrap-hover-area">
                        <p>
                          It with just a touch of sauce. saucy riff, more in the
                          style of takeout American Chinese kung pao. The sauce
                          makes it perfect for eating with rice.
                        </p>
                        <Link className="link-btn" to="blog-details.html">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-blog-wrap">
                    <div className="thumb">
                      <img src={blog4} alt="img" />
                    </div>
                    <div className="wrap-details">
                      <span className="cat">
                        <span className="date">
                          <i className="ri-calendar-todo-fill"></i>June 12, 2021
                        </span>
                        <Link to="#" className="tag me-0">
                          <i className="ri-price-tag-3-fill"></i>Fresh food
                        </Link>
                      </span>
                      <h5>
                        <Link to="blog-details.html">
                          We Have Excellent Of Quality Japanese Food
                        </Link>
                      </h5>
                      <div className="wrap-hover-area">
                        <p>
                          It with just a touch of sauce. saucy riff, more in the
                          style of takeout American Chinese kung pao. The sauce
                          makes it perfect for eating with rice.
                        </p>
                        <Link className="link-btn" to="blog-details.html">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-blog-wrap">
                    <div className="thumb">
                      <img src={blog5} alt="img" />
                    </div>
                    <div className="wrap-details">
                      <span className="cat">
                        <span className="date">
                          <i className="ri-calendar-todo-fill"></i>June 5, 2021
                        </span>
                        <Link to="#" className="tag me-0">
                          <i className="ri-price-tag-3-fill"></i>Fresh food
                        </Link>
                      </span>
                      <h5>
                        <Link to="blog-details.html">
                          Different spice for a Different cheese bruschetta
                        </Link>
                      </h5>
                      <div className="wrap-hover-area">
                        <p>
                          It with just a touch of sauce. saucy riff, more in the
                          style of takeout American Chinese kung pao. The sauce
                          makes it perfect for eating with rice.
                        </p>
                        <Link className="link-btn" to="blog-details.html">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-sm-6">
                  <div className="single-blog-wrap">
                    <div className="thumb">
                      <img src={blog6} alt="img" />
                    </div>
                    <div className="wrap-details">
                      <span className="cat">
                        <span className="date">
                          <i className="ri-calendar-todo-fill"></i>September 10,
                          2021
                        </span>
                        <Link to="#" className="tag me-0">
                          <i className="ri-price-tag-3-fill"></i>Spicy
                        </Link>
                      </span>
                      <h5>
                        <Link to="blog-details.html">
                          Celebrating the awesomeness of food.
                        </Link>
                      </h5>
                      <div className="wrap-hover-area">
                        <p>
                          It with just a touch of sauce. saucy riff, more in the
                          style of takeout American Chinese kung pao. The sauce
                          makes it perfect for eating with rice.
                        </p>
                        <Link className="link-btn" to="blog-details.html">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
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
                    {BlogData.map((curElem) => {
                      const { name, linkdesc } = curElem;
                      return (
                        <>
                          <li key={name}>
                            <div className="media">
                              <div className="media-left">
                                <img src={widget1} alt="widget" />
                              </div>
                              <div className="media-body">
                                <h6 className="title">
                                  <Link to="/blog-details">{linkdesc}</Link>
                                </h6>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                    {/* <li>
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
                    </li> */}
                    {/* <li>
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
                    </li> */}
                    {/* <li>
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
                    </li> */}
                    {/* <li>
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
                    </li> */}
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
                        Recipes <span>(9)</span>
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
      {/* <!-- blog Area End --> */}
    </>
  );
};

export default Blog;
