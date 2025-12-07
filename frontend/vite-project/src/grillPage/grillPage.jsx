import Header from "../header/header";
import backgroundImage from "../../../../Media/Pimp-your-grill-frame.png";
import searchLogo from "../../../../Media/Login-icons/Hourglass.png";
import "./grillPage.scss";
import { useEffect, useState } from "react";
import GrillCard from "../grillCard/grillCard";
import DetailedGrillCard from "../detailedGrillCard/detailedGrillCard";

const GrillPage = (props) => {
  const { profile, isAuthenticated, setProfile, setIsAuthenticated } = props;
  const [searchItems, setSearchItems] = useState("");
  const [grillClicked, setGrillClicked] = useState();
  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const [grills, setGrills] = useState([]);
  const [bestGrills, setBestGrills] = useState([]);
  const [counter, setCounter] = useState(6);
  useEffect(() => {
    const getGrillsFunction = async () => {
      const params = new URLSearchParams({
        number: counter,
      });
      const fetchGrills = await fetch(
        `http://localhost:3000/fetch-grills/?${params.toString()}`
      );
      const grillsList = await fetchGrills.json();
      setGrills(grillsList);
      const fetchBestGrills = await fetch("http://localhost:3000/best-grills");
      const bestGrillsList = await fetchBestGrills.json();
      setBestGrills(bestGrillsList);
    };
    getGrillsFunction();
  }, [counter]);

  return (
    <div className="grill-page-wrapper">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      <div className="grill-page-container">
        <img src={backgroundImage} />
        <DetailedGrillCard
          grill={grillClicked}
          profile={profile}
          show={showDetailedCard}
          setShow={setShowDetailedCard}
        />
        <div className="grill-list">
          <div className="search-bar-container">
            <div className="input-container">
              <input
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  setSearchItems(event.target.value);
                  console.log(grills);
                }}
              ></input>
              <img
                src={searchLogo}
                onClick={() => {
                  if (searchItems != "") {
                    setGrills(
                      grills.filter((grill) =>
                        grill.grillName
                          .toLowerCase()
                          .includes(searchItems.toLowerCase())
                      )
                    );
                  } else {
                    window.location.reload();
                  }
                }}
              />
            </div>
          </div>
          <div className="grills">
            <div className="general-grill-list">
              {grills.map((element) => {
                return (
                  <GrillCard
                    key={element._id}
                    element={element}
                    width="40%"
                    profile={profile}
                    isAuthenticated={isAuthenticated}
                    setProfile={setProfile}
                    setGrill={setGrillClicked}
                    setShow={setShowDetailedCard}
                  />
                );
              })}
              <div className="load-more-components-button">
                <button
                  onClick={() => {
                    setCounter(counter + 6);
                    console.log(show);
                  }}
                >
                  Show more grills
                </button>
              </div>
            </div>
            <div className="best-grills">
              {bestGrills.map((element) => {
                return (
                  <GrillCard
                    key={element._id}
                    element={element}
                    width="80%"
                    profile={profile}
                    isAuthenticated={isAuthenticated}
                    setProfile={setProfile}
                    setGrill={setGrillClicked}
                  />
                );
              })}
            </div>
          </div>
          <div className="scroll-aligner"></div>
        </div>
      </div>
    </div>
  );
};

export default GrillPage;
