import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import NavBar from "./component/common/NavBar";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import BlogDetail from "./components/pages/BlogDetail";
import Menu from "./components/pages/Menu";
import MenuList from "./components/pages/MenuList";
import Shop from "./components/Shop";
//import ShopDetail from "./component/ShopDetail";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetails";
import SignUp from "./components/SignUp";
import Login from "./components/common/Login";
import Gallery from "./components/pages/Gallery";
// React lighbox for gallery
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
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
          <Route component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
