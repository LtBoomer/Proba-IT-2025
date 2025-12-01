import { useState } from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import "./Home.scss";
import grillframe from "../../../../Media/Pimp-your-grill-frame.png";
import pimpYourGrillLogo from "../../../../Media/Pimp-your-grill.png";
import pimpYourGrillImageBottom from "../../../../Media/Peter-the-grill-pimp.png";
import { useNavigate } from "react-router";

function Home(props) {
  const { isAuthenticated } = props;
  return (
    <div className="Home-wrapper">
      <Header isAuthenticated={isAuthenticated} />
      <div className="pimp-grill-image-wrapper">
        <img src={grillframe} className="pimp-grill-image-frame" />
        <img src={pimpYourGrillLogo} className="pimp-grill-image" />
      </div>
      <div className="welcome-message-wrapper">
        <div className="welcome-message-container">
          <span>
            {isAuthenticated
              ? "Ai intrat în cont. Aici ar trebui cineva de la PR să vină cu un text mai bun :)"
              : "Înregistrează-te pentru a intra și tu în cea mai mare rețea de grătaragii din lume!"}
          </span>
        </div>
      </div>
      <div className="bottom-pimp-grill-image-wrapper">
        <img src={pimpYourGrillImageBottom} />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
