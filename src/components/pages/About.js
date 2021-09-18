import React from "react";

import BreadCrumb from "../common/BreadCrumb";
import AboutArea from "../home/AboutArea";
import BlogHome from "../home/BlogHome";
import VideoArea from "../about/VideoArea";
import OurHistory from "../about/OurHistory";
import AboutTestimonial from "../about/AboutTestimonial";

const About = () => {
  return (
    <>
      <BreadCrumb name="About us" description="WHO ARE WE?" />
      <OurHistory />
      <AboutArea />
      <VideoArea />
      <AboutTestimonial />
      <BlogHome />
    </>
  );
};

export default About;
