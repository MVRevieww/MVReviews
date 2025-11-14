import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
