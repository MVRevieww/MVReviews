import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          MVR
        </Link>

        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav justify-content-between">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home/movies">
                All Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/myReviews"
              >
                MyReviews
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/sharedToMe"
              >
                Shared With Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/allReviews"
              >
                All Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/changePW"
              >
                Change Password
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/editProfile"
              >
                Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <button
                // onClick={onLogout}
                className="nav-link"
                aria-current="page"
                to="/login"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
