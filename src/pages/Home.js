import React from "react";
// import BreadCrumb from "./BreadCrumb";
import Banner from "./../components/home/Banner";
import ContactArea from "./../components/home/ContactArea";
import AboutArea from "./../components/home/AboutArea";
import Offer from "./../components/home/Offer";
import Product from "./../components/home/Product";
import AboutOne from "./../components/home/AboutOne";
import Testimonial from "./../components/home/Testimonial";
import Instagram from "./../components/home/Instagram";
import BlogHome from "./../components/home/BlogHome";

const Home = () => {
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

export default Home;
