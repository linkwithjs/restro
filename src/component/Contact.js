import React from "react";
import BreadCrumb from "./BreadCrumb";

import location from "../img/location.png";
import envelope from "../img/envelope.png";
import phone from "../img/phone1.png";

const Contact = () => {
  return (
    <>
      <BreadCrumb name="Contact with us" description="Contact" />
      {/* <!-- contact start --> */}
      <div className="contact-area pd-top-120 pd-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
              <p>
                We’re an award-winning creative design studio with a small team
                and big ideas. We pour passion into projects big and small,
                providing our expert clients with solutions.
              </p>
            </div>
            <div className="col-lg-6">
              <form className="default-form-wrap border-0 p-0 mt-4 mt-lg-0">
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
          </div>
        </div>
      </div>
      {/* <!-- contact end --> */}

      <div className="location-map">
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7736.809349608943!2d90.34779195789959!3d23.772761841203913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1618491766114!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
