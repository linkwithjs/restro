import React from "react";
import BreadCrumb from "./common/BreadCrumb";
import { Link } from "react-router-dom";

import widget01 from "../img/widget/01.png";
import paymentcard from "../img/payment-card.png";
import paypal from "../img/paypal.png";

const Checkout = () => {
  return (
    <>
      <BreadCrumb name="Checkout" description="Delivery & Payment Info" />
      {/* <!-- checkout area start --> */}
      <div className="checkout-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bill-payment-wrap">
                <h5>Billing details</h5>
                <form className="default-form-wrap style-2">
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label>Country</label>
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Your Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Street address</label>
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Permanent address</label>
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="order-area">
                <h5 className="title">Your order</h5>
                <div className="order-product">
                  <div className="thumb">
                    <img src={widget01} alt="img" />
                  </div>
                  <div className="details">
                    <h6>All Season Gulliver Pizza</h6>
                    <ul>
                      <li>
                        <span>Select Size: </span>Large
                      </li>
                      <li>
                        <span>Select Crust: </span>Double Crust
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="amount">
                  <li>
                    Subtotal<span>$50.00</span>
                  </li>
                  <li className="total">
                    Total<span>$50.00</span>
                  </li>
                </ul>
                <div className="peyment-method">
                  <h6>Check payments</h6>
                  <ul className="card-area">
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        ></label>
                      </div>
                      <div className="details">
                        <h6>
                          Credit Cart <img src={paymentcard} alt="img" />
                        </h6>
                        <p>
                          Pay with visa, Anex, MasterCard, Maestro,Discover and
                          many other credit and debit credit vai paypal
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        ></label>
                      </div>
                      <div className="details">
                        <h6>
                          PayPal <img src={paypal} alt="img" />
                        </h6>
                        <p>Pay easily, fast and secure with PayPal.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link className="btn btn-secondary w-100" to="#">
                  PLACE ORDER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- checkout area end --> */}
    </>
  );
};

export default Checkout;
