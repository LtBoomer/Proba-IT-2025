import "./profilePage.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import backgroundGrill from "../../../../Media/Pimp-your-grill-frame.png";

const ProfilePage = (props) => {
  const { isAuthenticated, profile } = props;
  return (
    <div className="profile-page-wrapper">
      <Header isAuthenticated={isAuthenticated} />
      <div className="profile-page-container">
        <img src={backgroundGrill} />
        <div className="profile-page-container-centered">
          <div className="user-info-wrapper">
            <div className="info-wrapper">
              <div className="text-container">
                <p>Name: {profile.name}</p>
              </div>
              <div className="text-container">
                <p>Email: {profile.email}</p>
              </div>
              <div className="text-container">
                <p>Telephone: {profile.phone}</p>
              </div>
            </div>
            <div className="button-container">
            <button>Post a grill</button>
            </div>
          </div>
          <div className="grills-posted-wrapper"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
