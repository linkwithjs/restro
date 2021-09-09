import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo1.png";
import location from "../img/location.png";
import envelope from "../img/envelope.png";
import phone from "../img/phone1.png";
import insta1 from "../img/instagram/1.png";
import insta2 from "../img/instagram/2.png";
import insta3 from "../img/instagram/3.png";
import insta4 from "../img/instagram/4.png";
import insta5 from "../img/instagram/5.png";
import insta6 from "../img/instagram/6.png";

const Footer = () => {
  return (
    <>
      {/* <!-- footer area start --> */}
      <footer className="footer-area pd-top-100">
        <div className="footer-inner padding-top-100 padding-bottom-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget">
                  <div className="logo">
                    <img src={logo} alt="img" />
                  </div>
                  <ul className="contact_info_list">
                    <li className="single-info-item">
                      <img src={location} alt="icon" />
                      <div className="details">
                        4920 Trails End Road Ft United States, FL 33311
                      </div>
                    </li>
                    <li className="single-info-item">
                      <img src={envelope} alt="icon" />
                      <div className="details">ordernow@foodka.com</div>
                    </li>
                    <li className="single-info-item">
                      <img src={phone} alt="icon" />
                      <div className="details">+997 509 153 849</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="widget-title">Hot Menu</h4>
                  <ul>
                    <li>
                      <Link to="/menu-list">Burger King Whopper</Link>
                    </li>
                    <li>
                      <Link to="/menu-list">Five Guys Cheeseburger</Link>
                    </li>
                    <li>
                      <Link to="/menu-list">KFC Original Recipe Chicken</Link>
                    </li>
                    <li>
                      <Link to="/menu-list">Wendy's Frosty</Link>
                    </li>
                    <li>
                      <Link to="/menu-list">McDonald's Happy Meal</Link>
                    </li>
                    <li>
                      <Link to="/menu-list">Domino's Pepperoni Pizza</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="widget-title">Opening Hours</h4>
                  <ul>
                    <li>Monday : 09.00am-10.00pm</li>
                    <li>Tuesday : 09.00am-10.00pm</li>
                    <li>Wednesday : 09.00am-10.00pm</li>
                    <li>Thursday : 09.00am-10.00pm</li>
                    <li>Friday : 09.00am-10.00pm</li>
                    <li>
                      Saturday & Sunday : <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget widget_instagram_feeds">
                  <h4 className="widget-title">Instagram Feeds</h4>
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={insta1} alt="instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={insta2} alt="instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={insta3} alt="instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={insta4} alt="instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={insta5} alt="instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={insta6} alt="instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center">
                <div className="copyright-area">
                  <p>
                    © 2021 Restro. All Rights Reserved by CrypticTechnology.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="social-area text-md-end text-center mt-md-0 mt-2">
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
                      <i className="fab fa-google-plus-g"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer area end -->     */}

      {/* <!-- back-to-top end --> */}
      <div className="back-to-top">
        <span className="back-top">
          <i className="fas fa-angle-double-up"></i>
        </span>
      </div>
    </>
  );
};

export default Footer;
