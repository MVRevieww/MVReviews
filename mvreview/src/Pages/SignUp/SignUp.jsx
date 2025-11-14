import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";
import { register } from "../../Services/user";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = async () => {
    // if (firstName.length == 0) {
    //   toast.warning("please enter first name");
    // } else if (lastName.length == 0) {
    //   toast.warning("please enter last name");
    // } else if (email.length == 0) {
    //   toast.warning("please enter email");
    // } else if (phone.length == 0) {
    //   toast.warning("please enter phone number");
    // } else if (password.length == 0) {
    //   toast.warning("please enter password");
    // } else if (confirmPassword.length == 0) {
    //   toast.warning("please confirm password");
    // } else if (password != confirmPassword) {
    //   toast.warning("password does not match");
    // } else {
    const response = await register(
      firstName,
      lastName,
      email,
      password,
      phone,
      birth
    );
    if (response["status"] === "success") {
      navigate("/login");
    }
    // if (response["status"] == "success") {
    //   toast.success("login successful");

    //   localStorage.setItem("token", response["data"]["token"]);

    // }
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
                setFirstName(e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
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
              setPhone(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label>Date Of Birth</label>
          <input
            onChange={(e) => {
              setBirth(e.target.value);
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
              setConfirmPassword(e.target.value);
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
