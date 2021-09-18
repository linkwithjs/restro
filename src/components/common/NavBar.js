import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo1.png";

const NavBar = () => {
  return (
    <>
      {/* preloader area start */}
      <div className="preloader" id="preloader">
        <div className="preloader-inner">
          <div id="wave1"></div>
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>
      {/* <!-- preloader area end --> */}

      {/* <!-- search popup area start --> */}
      <div className="body-overlay" id="body-overlay"></div>
      <div className="td-search-popup" id="td-search-popup">
        <form action="index.html" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {/* <!-- //. search Popup --> */}
      {/* <!-- navbar start --> */}
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#themefie_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left"></span>
                <span className="icon-right"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <ul className="navbar-nav menu-open">
                <li className="current-menu-item menu-item-has-children">
                  <a href="home-1.html">HOME</a>
                  <ul className="sub-menu ps-0">
                    <li>
                      <a href="home-1.html">Home 01</a>
                    </li>
                    <li>
                      <a href="home-2.html">Home 02</a>
                    </li>
                    <li>
                      <a href="home-3.html">Home 03</a>
                    </li>
                  </ul>
                </li>
                <li className="current-menu-item menu-item-has-children">
                  <a href="#">PAGES</a>
                  <ul className="sub-menu ps-0">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="blog-details"> Blog Details</Link>
                    </li>
                    <li>
                      <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                      <Link to="/menu-list">Menu List</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/shop-detail">Shop Details</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACTS</Link>
                </li>
              </ul>
            </div>
            <div className="logo">
              <Link className="main-logo" to="/homepage">
                <img src={logo} alt="img" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <ul>
                <li>
                  <a className="search" href="#">
                    <i className="ri-search-line"></i>
                  </a>
                </li>
                <li className="phone-contact d-md-block d-none">
                  <i className="ri-phone-fill float-start"></i>
                  +997 509 153 849
                </li>
                <li className="menu-cart">
                  <Link to="/cart">
                    CART <span>1</span>
                  </Link>
                </li>
                <li>49.50 $</li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                <li>
                  <a className="search" href="#">
                    <i className="ri-search-line"></i>
                  </a>
                </li>
                <li className="phone-contact">
                  <i className="ri-phone-fill float-start"></i>
                  +997 509 153 849
                </li>
                <li className="menu-cart">
                  <Link to="/cart">
                    CART <span>1</span>
                  </Link>
                </li>
                <li>49.50 $</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default NavBar;
