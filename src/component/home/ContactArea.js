import React from "react";

import calender from "../../img/calendar.png";
import mapmaker from "../../img/map-maker.png";
import phone2 from "../../img/phone-2.png";

const ContactArea = () => {
  return (
    <>
      {/* <!-- intro-contact Area Start--> */}
      <section className="intro-contact-area pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-intro-contact-wrap">
                <img src={calender} alt="icon" />
                <h5>Mon-fri : 10AM -9:30PM</h5>
                <p>Working Hours</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-intro-contact-wrap single-intro-contact-wrap-active">
                <img src={mapmaker} alt="icon" />
                <h5>Trails End Road Ft United States</h5>
                <p>Store Location</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-intro-contact-wrap">
                <img src={phone2} alt="icon" />
                <h5>+997 509 153 849</h5>
                <p>Working Hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- intro-contact Area End --> */}
    </>
  );
};

export default ContactArea;
