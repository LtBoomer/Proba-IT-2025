import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "./App.scss"
import LoginPage from "./loginPage/Login";
import Signup from "./signupPage/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  );
}

export default App;