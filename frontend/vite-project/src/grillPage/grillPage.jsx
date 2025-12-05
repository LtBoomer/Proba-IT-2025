import Header from "../header/header";
import backgroundImage from "../../../../Media/Pimp-your-grill-frame.png";
import "./grillPage.scss";

const GrillPage = () => {
  return (
    <div className="grill-page-wrapper">
      <Header />
      <div className="grill-page-container">
        <img src={backgroundImage} />
        <div className="grill-list">
          <div className="test1"></div>
          <div className="test2"></div>
        </div>
      </div>
    </div>
  );
};

export default GrillPage;
