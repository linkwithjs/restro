import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import NavBar from "./component/NavBar";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import About from "./component/About";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import BlogDetail from "./component/BlogDetail";
import Menu from "./component/Menu";
import MenuList from "./component/MenuList";
import Shop from "./component/Shop";
import ShopDetail from "./component/ShopDetail";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

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
          <Route exact path="/shop-detail" component={ShopDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
