import React, { useContext, useState } from "react";
import BreadCrumb from "../common/BreadCrumb";
import { Link } from "react-router-dom";

import burger1 from "../../img/product/burger/1.png";
import MenuListData from "./MenuListData";
import { itemCount, totalAmount } from "../common/AddToCart";
import { CartContext } from "../../ContextAPI/CartContext";
import { addToCart } from "./../../redux/actions/cart.action";
import { useDispatch } from "react-redux";

const MenuList = () => {
  const { countItem, total } = useContext(CartContext);
  const [, setItemValue] = countItem;
  const [, setTotalPrice] = total;

  // Hooks for pagination

  // const [loading,setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerpage] = useState(10);

  const dispatch = useDispatch();
  function onAddToCart(product) {
    // console.log(product);
    dispatch(addToCart(product));
  }
  return (
    <>
      <BreadCrumb name="Choose you items" description="Discoverour Menu" />
      {/*<!-- populer Area Start--> */}
      <section className="populer-area pd-top-50 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="section-title text-center">
                <h3 className="sub-title">Our signature</h3>
                <h2 className="title">Foodka Main Dishes</h2>
                <p>
                  Amet amet parturient sed posuere vulputate pharetra a sapien,
                  habitant. Enim vel elit pharetra.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {MenuListData.map((curElem) => {
              const { id, name, description, price } = curElem;
              return (
                <div className="col-lg-6" key={id}>
                  <div className="single-item-wrap style-2">
                    <div className="media">
                      <div className="thumb">
                        <img src={burger1} alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <Link to="/shop-detail">{name}</Link>
                        </h5>
                        <p>{description}</p>
                        <div className="wrap-footer">
                          <h6 className="price">${price}</h6>
                          <button
                            type="submit"
                            className="btn btn-secondary"
                            onClick={() => {
                              onAddToCart(curElem);
                              setItemValue(itemCount());
                              setTotalPrice(totalAmount());
                            }}
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-lg-6">
              <div className="single-item-wrap style-2">
                <div className="media">
                  <div className="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div className="wrap-footer">
                      <h6 className="price">$17.00</h6>
                      <button type="submit" className="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* 
            <div className="col-lg-6">
              <div className="single-item-wrap style-2">
                <div className="media">
                  <div className="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div className="wrap-footer">
                      <h6 className="price">$17.00</h6>
                      <button type="submit" className="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6">
              <div className="single-item-wrap style-2">
                <div className="media">
                  <div className="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div className="wrap-footer">
                      <h6 className="price">$17.00</h6>
                      <button type="submit" className="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-item-wrap style-2">
                <div className="media">
                  <div className="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div className="wrap-footer">
                      <h6 className="price">$17.00</h6>
                      <button type="submit" className="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-item-wrap style-2">
                <div className="media">
                  <div className="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div className="wrap-footer">
                      <h6 className="price">$17.00</h6>
                      <button type="submit" className="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-item-wrap style-2">
                <div className="media">
                  <div className="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div className="wrap-footer">
                      <h6 className="price">$17.00</h6>
                      <button type="submit" className="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-item-wrap style-2">
                <div class="media">
                  <div class="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div class="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div class="wrap-footer">
                      <h6 class="price">$17.00</h6>
                      <button type="submit" class="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-item-wrap style-2">
                <div class="media">
                  <div class="thumb">
                    <img src={burger1} alt="img" />
                  </div>
                  <div class="wrap-details">
                    <h5>
                      <Link to="/shop-detail">All Season Gulliver Pizza</Link>
                    </h5>
                    <p>
                      Pizza is a savory dish of Italian origin consisting of a
                      usually round, flattened base of leavened.
                    </p>
                    <div class="wrap-footer">
                      <h6 class="price">$17.00</h6>
                      <button type="submit" class="btn btn-secondary">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-12">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="ri-arrow-left-s-line"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- populer Area End --> */}
    </>
  );
};

export default MenuList;
