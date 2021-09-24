import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "./../components/common/BreadCrumb";
import { Link } from "react-router-dom";
import widget01 from "./../img/widget/01.png";
import Skeleton from "react-loading-skeleton";
import { total, list, quantity } from "cart-localstorage";
import { removeItem } from "../components/common/AddToCart";
import getCart from "../redux/actions/cart.action";

const Cart = () => {
  const cartItems = list();

  const [amount, setAmount] = useState(total());

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItem);
  const loading = useSelector((state) => state.cart.isLoading);
  //const errors = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, amount]);

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
                    {loading ? (
                      <tr>
                        <td className="table-close-btn">
                          <Skeleton circle={true} height={30} width={30} />
                        </td>

                        <th scope="row">
                          <Skeleton circle={true} height={100} width={100} />
                        </th>

                        <td colSpan="2" className="item-name">
                          <div className="details">
                            <Skeleton count={1} width={250} />
                            <ul>
                              <li>
                                <Skeleton count={1} width={150} />
                              </li>
                              <li>
                                <Skeleton count={1} width={150} />
                              </li>
                            </ul>
                          </div>
                        </td>

                        <td>
                          <Skeleton count={1} height={40} width={50} />
                        </td>

                        <td className="table-quantity">
                          <form>
                            <div className="quantity buttons_added">
                              <Skeleton count={1} height={40} width={140} />
                            </div>
                          </form>
                        </td>
                        <td>
                          <Skeleton count={1} height={40} width={50} />
                        </td>
                      </tr>
                    ) : (
                      cartItems.map((curElem, index) => {
                        return (
                          <tr key={index}>
                            <td className="table-close-btn">
                              <Link to="#">
                                <i
                                  className="ri-close-line"
                                  onClick={() => {
                                    removeItem(curElem.id);
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
                      })
                    )}
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
