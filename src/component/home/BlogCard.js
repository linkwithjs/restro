import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../../img/blog/1.png";

const BlogCard = (props) => {
  return (
    <>
      <div className="single-blog-wrap">
        <div className="thumb">
          <img src={blog1} alt="img" />
        </div>
        <div className="wrap-details">
          <span className="cat">
            <span className="date">
              <i className="ri-calendar-todo-fill"></i>
              {props.date}
            </span>
            <Link to="#" className="tag me-0">
              <i className="ri-price-tag-3-fill"></i>
              {props.name}
            </Link>
          </span>
          <h5>
            <Link to="/blog-details">{props.linkdesc}</Link>
          </h5>
          <div className="wrap-hover-area">
            <p>{props.hoverdesc}</p>
            <Link className="link-btn" to="/blog-details">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
