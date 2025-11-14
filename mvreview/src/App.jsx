import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
