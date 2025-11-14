import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.css";

function Login() {
  const navigate = useNavigate;

  const onLogin = async () => {
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
      <br></br>
      <br></br>

      <div className="login-container border p-5 w-30">
        <h2 className="text-center">Sign In</h2>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          Don't have an account yet? <Link to="/register">Register here</Link>
        </div>
        <div className="mb-1">
          <button onClick={onLogin} className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
