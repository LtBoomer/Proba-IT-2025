import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "./App.scss"
import LoginPage from "./loginPage/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;