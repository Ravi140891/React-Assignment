import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Assignment2/Navbar";
import Login from "./Assignment2/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
