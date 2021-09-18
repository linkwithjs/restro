import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import NavBar from "./component/common/NavBar";
import Nav from "./component/common/Nav";
import Footer from "./component/common/Footer";
import HomePage from "./component/HomePage";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Blog from "./component/pages/Blog";
import BlogDetail from "./component/pages/BlogDetail";
import Menu from "./component/pages/Menu";
import MenuList from "./component/pages/MenuList";
import Shop from "./component/Shop";
//import ShopDetail from "./component/ShopDetail";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import ProductDetail from "./component/ProductDetails";
import SignUp from "./component/SignUp";
import Login from "./component/common/Login";
import Gallery from "./component/pages/Gallery";
// React lighbox for gallery
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Nav />
        <Switch>
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog-details" component={BlogDetail} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu-list" component={MenuList} />
          <Route exact path="/shop" component={Shop} />
          {/* <Route exact path="/shop-detail" component={ShopDetail} /> */}
          <Route exact path="/shop-detail" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <SimpleReactLightbox>
            <Route exact path="/gallery" component={Gallery} />
          </SimpleReactLightbox>
          <Route component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
