import React from "react";
import BreadCrumb from "./common/BreadCrumb";
//import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
//import "./../signup.css";

const SignUp = () => {
  return (
    <>
      <BreadCrumb name="Sign up Page" description="Sign up" />
      <div className="checkout-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bill-payment-wrap">
                <h5>Fill up your details.</h5>
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
                  <Button className="btn btn-secondary w-100">Sign Up</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
