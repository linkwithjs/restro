import React, { useState } from "react";
import BreadCrumb from "../common/BreadCrumb";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

const Login = () => {
  const [fullName, setFullName] = useState({
    email: "",
    password: "",
  });

  const inputEvent = (event) => {
    console.log(event.target);
    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <BreadCrumb name="Login" description="User Login" />
      {/* <!-- checkout area start --> */}
      <div className="checkout-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="order-area">
                <h5 className="title">Sign In</h5>

                <form className="default-form-wrap style-2" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <label>Email</label>
                      <div className="single-input-wrap">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Your Email"
                          onChange={inputEvent}
                          value={fullName.email}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label>Password</label>
                      <div className="single-input-wrap">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter Your Password"
                          onChange={inputEvent}
                          value={fullName.password}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <Button type="submit" className="btn btn-secondary w-100">
                    Login
                  </Button>
                  <div>
                    <span style={{ float: "left" }}>
                      <Link to="/sign-up" className="text-decoration-underline">
                        Don't have an account?
                      </Link>
                    </span>
                    <span
                      style={{ float: "right" }}
                      className="text-decoration-underline"
                    >
                      <Link to="/sign-up">Forgot password?</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- checkout area end --> */}
    </>
  );
};

export default Login;
