import React from "react";
// import { Link } from "react-router-dom";

// import blog1 from "../../img/blog/1.png";
// import blog2 from "../../img/blog/2.png";
// import blog3 from "../../img/blog/3.png";

import BlogCard from "./BlogCard";

import BlogData from "./BlogData";

const BlogHome = () => {
  return (
    <>
      {/* <!-- blog Area Start--> */}
      <section className="blog-area pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="section-title text-center">
                <h3 className="sub-title">News & Blog</h3>
                <h2 className="title">Celebrating the awesomeness of food.</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {BlogData.map((curElem, ind) => {
              const { img, date, name, linkdesc, hoverdesc } = curElem;
              return (
                <div className="col-lg-4 col-md-6 " key={ind}>
                  <BlogCard
                    img={img}
                    date={date}
                    name={name}
                    linkdesc={linkdesc}
                    hoverdesc={hoverdesc}
                  />
                </div>
              );
            })}
            {/* {BlogData.map((curElem) => {
              const { img, date, name, linkdesc, hoverdesc } = curElem;
              return (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-blog-wrap">
                      <div className="thumb">
                        <img src={blog1} alt="img" />
                      </div>
                      <div className="wrap-details">
                        <span className="cat">
                          <span className="date">
                            <i className="ri-calendar-todo-fill"></i>
                            {date}
                          </span>
                          <Link to="#" className="tag me-0">
                            <i className="ri-price-tag-3-fill"></i>
                            {name}
                          </Link>
                        </span>
                        <h5>
                          <Link to="/blog-details">{linkdesc}</Link>
                        </h5>
                        <div className="wrap-hover-area">
                          <p>{hoverdesc}</p>
                          <Link className="link-btn" to="/blog-details">
                            Read More
                          </Link>
                        </div>
                      </div> 
                    </div>
                  </div>
                </>
              );
            })} */}

            {/* <div className="col-lg-4 col-md-6">
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
                    <Link to="/blog-details">
                      Broad beans, tomato, garlic & cheese bruschetta
                    </Link>
                  </h5>
                  <div className="wrap-hover-area">
                    <p>
                      It with just a touch of sauce. saucy riff, more in the
                      style of takeout American Chinese kung pao. The sauce
                      makes it perfect for eating with rice.
                    </p>
                    <Link className="link-btn" to="/blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-wrap">
                <div className="thumb">
                  <img src={blog3} alt="img" />
                </div>
                <div className="wrap-details">
                  <span className="cat">
                    <span className="date">
                      <i className="ri-calendar-todo-fill"></i>August 14, 2021
                    </span>
                    <Link to="#" className="tag me-0">
                      <i className="ri-price-tag-3-fill"></i>Pizza
                    </Link>
                  </span>
                  <h5>
                    <Link to="/blog-details">
                      Make authentic Italian margherita pizza at home
                    </Link>
                  </h5>
                  <div className="wrap-hover-area">
                    <p>
                      It with just a touch of sauce. saucy riff, more in the
                      style of takeout American Chinese kung pao. The sauce
                      makes it perfect for eating with rice.
                    </p>
                    <Link className="link-btn" to="/blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- blog Area End --> */}
    </>
  );
};

export default BlogHome;
