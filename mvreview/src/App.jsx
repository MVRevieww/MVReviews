import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import MyReviews from "./Pages/MyReviews/MyReviews";
import SharedToMe from "./Pages/SharedToMe/SharedToMe";
import AllReviews from "./Pages/AllReviews/AllReviews";
import ChangePW from "./Pages/ChangePW/ChangePW";
import EditProfile from "./Pages/EditProfile/EditProfile";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="myReviews" element={<MyReviews />}></Route>
          <Route path="sharedToMe" element={<SharedToMe />}></Route>
          <Route path="/home/allReviews" element={<AllReviews />}></Route>
          <Route path="/home/changePW" element={<ChangePW />}></Route>
          <Route path="/home/editProfile" element={<EditProfile />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
