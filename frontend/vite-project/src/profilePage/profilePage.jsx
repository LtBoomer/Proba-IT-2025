import "./profilePage.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import backgroundGrill from "../../../../Media/Pimp-your-grill-frame.png";
import CreateGrillCard from "./createGrillCard/createGrillCard";
import { useEffect, useState } from "react";
import GrillCard from "../grillCard/grillCard";

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
                return (<GrillCard GrillCard key={element._id} element={element} width="30%" profile={profile} isAuthenticated={isAuthenticated}/>
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
