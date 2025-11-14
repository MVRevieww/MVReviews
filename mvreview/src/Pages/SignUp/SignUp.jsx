import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";

function SignUp() {
  const navigate = useNavigate();

  const onSignUp = async () => {
    // const response = await login(email, password);
    // if (response["status"] == "success") {
    //   toast.success("login successful");

    //   localStorage.setItem("token", response["data"]["token"]);

    // }
    navigate("/home");
  };
  return (
    <div className="container">
      <br></br>

      <div className="login-container container border p-5 w-30">
        <h2 className="text-center">Sign Up</h2>
        <div className="row">
          <div className="col">
            <label>First Name</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label>Email Address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label>Mobile Number</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label>Date Of Birth</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="date"
            className="form-control"
          />
        </div>

        <div className="row mb-3">
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label>Confirm Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
        </div>

        <div className="row mb-3">
          <div className="mb-1">
            <button onClick={onSignUp} className="btn btn-success w-100">
              Sign Up
            </button>
          </div>
          <div className="text-center">
            Already have an account? <Link to="/register">SignIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
