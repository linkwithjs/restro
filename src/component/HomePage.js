import React from "react";
// import BreadCrumb from "./BreadCrumb";
import Banner from "./home/Banner";
import ContactArea from "./home/ContactArea";
import AboutArea from "./home/AboutArea";
import Offer from "./home/Offer";
import Product from "./home/Product";
import AboutOne from "./home/AboutOne";
import Testimonial from "./home/Testimonial";
import Instagram from "./home/Instagram";
import BlogHome from "./home/BlogHome";

const HomePage = () => {
  return (
    <>
      {/* <BreadCrumb name="Homepage" description="Our HomePage" /> */}
      <Banner />
      <ContactArea />
      <AboutArea />
      <Offer />
      <Product />
      <AboutOne />
      <Testimonial />
      <Instagram />
      <BlogHome />
    </>
  );
};

export default HomePage;
