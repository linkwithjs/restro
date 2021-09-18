import React from "react";

import video from "../../img/video.png";
import { Link } from "react-router-dom";
const VideoArea = () => {
  return (
    <>
      {/* <!-- video Area Start--> */}
      <section
        className="video-area featured-area pd-bottom-150"
        style={{
          backgroundImage: `url(${video})`,
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title text-lg-start text-center">
                <h3 className="sub-title text-secondary">Why choose us</h3>
                <h2 className="title text-white">
                  Visit our kitchens to see how we prepare your favorite dish
                </h2>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <Link className="play-btn" to="#">
                <i className="ri-play-circle-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- video Area End --> */}
    </>
  );
};

export default VideoArea;
