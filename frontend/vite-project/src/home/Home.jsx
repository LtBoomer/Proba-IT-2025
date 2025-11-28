import { useState } from "react";
import Header from "../header/header.jsx";
import "./Home.css";

function Home() {
  const [count, setCount] = useState({ name: "", number: 15 });

  return (
    <div className = "Home-wrapper">
      <Header />
    </div>
  );
}
export default Home;
