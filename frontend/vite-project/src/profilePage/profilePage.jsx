import "./profilePage.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import grillLikesFunction from "../functions/grillLikesFunction";
import backgroundGrill from "../../../../Media/Pimp-your-grill-frame.png";
import CreateGrillCard from "./createGrillCard/createGrillCard";
import { useEffect, useState } from "react";

const ProfilePage = (props) => {
  const [showCard, setShowCard] = useState(false);
  const [grillList, setGrillList] = useState([]);
  const { isAuthenticated, profile } = props;
  useEffect(() => {
    const getGrills = async () => {
      const fetchGrills = await fetch(
        "http://localhost:3000/fetch-own-grills",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const grillsInfo = await fetchGrills.json();
      console.log(grillsInfo);
      setGrillList(grillsInfo);
    };
    console.log("da");
    getGrills();
  }, [isAuthenticated]);
  return (
    <div className="profile-page-wrapper">
      <Header isAuthenticated={isAuthenticated} />
      <div className="profile-page-container">
        <img src={backgroundGrill} />
        <CreateGrillCard
          showCard={showCard}
          setShowCard={setShowCard}
          profile={profile}
        />
        <div
          className="profile-page-container-centered"
          style={{ visibility: `${showCard ? "hidden" : "visible"}` }}
        >
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
              <button
                onClick={() => {
                  setShowCard(true);
                }}
              >
                Post a grill
              </button>
            </div>
          </div>
          <div className="grills-posted-wrapper">
            <p className="my-grills-title-card">My grills</p>
            <div className="grill-container">
              {grillList.map((element) => {
                return (
                  <div className="card-grill">
                    <div className="grill-owner-wrapper">
                      <p>Pimp: {element.grillOwner}</p>
                    </div>
                    <div className="grill-content-wrapper">
                      <div className="grill-image-wrapper">
                        <img src={`grillIcons/${element.photo}`} />
                      </div>
                      <div className="grill-text-info-wrapper">
                        <div className="grill-name-wrapper">
                          <p>{element.grillName}</p>
                        </div>
                        <div className="grill-likes-wrapper">
                          <div className="likes-icon-wrapper">
                            <p style={grillLikesFunction(element.likes)}>
                              / / /
                            </p>
                          </div>
                          <p>{element.likes}</p>
                        </div>
                        <div className="grill-description-wrapper">
                          <p>{element.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
