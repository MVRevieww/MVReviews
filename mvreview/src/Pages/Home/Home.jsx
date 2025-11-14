import React from "react";
//import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
// import { Navbar } from "../../Components/Navbar";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
