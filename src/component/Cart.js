import React, { useState } from "react";
import BreadCrumb from "./common/BreadCrumb";
import { Link } from "react-router-dom";
import widget01 from "../img/widget/01.png";

import { total, list, quantity, remove } from "cart-localstorage";

const Cart = () => {
  const cartItems = list();

  const [amount, setAmount] = useState(total());

  return (
    <>
      <BreadCrumb name="Cart Page" description="Check Your Box" />
      {/* <!-- cart area start --> */}
      <div className="cart-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="blank"></th>
                      <th className="blank"></th>
                      <th className="blank"></th>
                      <th className="title-name">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((curElem, index) => {
                      return (
                        <tr key={index}>
                          <td className="table-close-btn">
                            <Link to="#">
                              <i
                                className="ri-close-line"
                                onClick={() => {
                                  remove(curElem.id);
                                  setAmount(total());
                                }}
                              ></i>
                            </Link>
                          </td>

                          <th scope="row">
                            <img src={widget01} alt="img" />
                          </th>

                          <td colSpan="2" className="item-name">
                            <div className="details">
                              <h5>{curElem.name}</h5>
                              <ul>
                                <li>
                                  <span>Select Size: </span>Large
                                </li>
                                <li>
                                  <span>Select Crust: </span>Double Crust
                                </li>
                              </ul>
                            </div>
                          </td>

                          <td>${curElem.price}</td>

                          <td className="table-quantity">
                            <form>
                              <div className="quantity buttons_added">
                                <input
                                  type="button"
                                  value="-"
                                  className="minus"
                                  onClick={() => {
                                    if (curElem.quantity > 1) {
                                      quantity(curElem.id, -1);
                                      setAmount(total());
                                    }
                                  }}
                                />
                                <input
                                  type="number"
                                  className="input-text qty text"
                                  step="1"
                                  min="1"
                                  max="10000"
                                  name="quantity"
                                  defaultValue={curElem.quantity}
                                />
                                <input
                                  type="button"
                                  value="+"
                                  className="plus"
                                  onClick={() => {
                                    quantity(curElem.id, +1);
                                    setAmount(total());
                                  }}
                                />
                              </div>
                            </form>
                          </td>
                          <td>${curElem.price * curElem.quantity}</td>
                        </tr>
                      );
                    })}
                    {/* <tr>
                      <td className="table-close-btn">
                        <Link to="#">
                          <i className="ri-close-line"></i>
                        </Link>
                      </td>

                      <th scope="row">
                        <img src={widget01} alt="img" />
                      </th>

                      <td colSpan="2" className="item-name">
                        <div className="details">
                          <h5>All Season Gulliver Pizza</h5>
                          <ul>
                            <li>
                              <span>Select Size: </span>Large
                            </li>
                            <li>
                              <span>Select Crust: </span>Double Crust
                            </li>
                          </ul>
                        </div>
                      </td>

                      <td>$50.00</td>

                      <td className="table-quantity">
                        <form>
                          <div className="quantity buttons_added">
                            <input type="button" value="-" className="minus" />
                            <input
                              type="number"
                              className="input-text qty text"
                              step="1"
                              min="1"
                              max="10000"
                              name="quantity"
                              defaultValue="1"
                            />
                            <input type="button" value="+" className="plus" />
                          </div>
                        </form>
                      </td>
                      <td>$40.00</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="promotional-area">
                <form className="default-form-wrap">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <button type="submit" className="btn btn-secondary">
                        APPLY COUPON
                      </button>
                    </div>
                    <div className="col-md-4 col-sm-6 text-md-end">
                      <button type="submit" className="btn btn-base">
                        UPDATE CART
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-cart-area">
                <div className="order-cart">
                  <h5>Cart totals</h5>
                  <ul>
                    <li>
                      Subtotal<span>${amount}</span>
                    </li>
                    <li className="total">
                      Total<span>${amount}</span>
                    </li>
                  </ul>
                </div>
                <Link className="btn btn-secondary w-100" to="#">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cart area end --> */}
    </>
  );
};

export default Cart;
