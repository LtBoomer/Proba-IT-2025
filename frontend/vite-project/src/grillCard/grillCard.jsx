import "./grillCard.scss";
import grillLikesFunction from "../functions/grillLikesFunction";
import { useState } from "react";

const GrillCard = (props) => {
  const { element, width, profile, isAuthenticated, setProfile, setGrill, setShow} = props;
  const [likes, setLikes] = useState(element.likes);
  return (
    <div className="card-grill" style={{ width: `${width}` }}>
      <div className="grill-owner-wrapper">
        <p>Pimp: {element.grillOwner}</p>
      </div>
      <div className="grill-content-wrapper">
        <div className="grill-image-wrapper">
          <img src={`grillIcons/${element.photo}`} onClick={() =>{
            setGrill(element);
            setShow(true);
          }}/>
        </div>
        <div className="grill-text-info-wrapper">
          <div className="grill-name-wrapper">
            <p>{element.grillName}</p>
          </div>
          <div className="grill-likes-wrapper">
            <div className="likes-icon-wrapper">
              <p
                style={grillLikesFunction(profile.grillsLiked, element._id)}
                onClick={() => {
                  if(profile.likes < 10 && isAuthenticated && !profile.grillsLiked.includes(element._id)){
                    setProfile({...profile, grillsLiked: [...profile.grillsLiked, element._id] })
                    setLikes(likes + 1);
                  const likeGrill = fetch("http://localhost:3000/like-grill", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      grillId: element._id,
                      grillLikes: element.likes + 1,
                    }),
                  });
                  const accountLikedGrill = fetch("http://localhost:3000/update-user-likes", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      userEmail: profile.email,
                      likes: profile.likes + 1,
                      grillId: element._id,
                    }),
                  })
                  }
                  if(isAuthenticated && profile.grillsLiked.includes(element._id)){
                    setProfile({...profile, grillsLiked: profile.grillsLiked.filter((grill) => grill != element._id)})
                    setLikes(likes - 1);
                    const likeGrill = fetch("http://localhost:3000/like-grill", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      grillId: element._id,
                      grillLikes: element.likes - 1,
                    }),
                  });
                    const accountLikedGrill = fetch("http://localhost:3000/remove-grill-like", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      userEmail: profile.email,
                      likes: profile.likes - 1,
                      grillId: element._id,
                    }),
                  })
                  }
                  if(profile.likes >= 10){
                    alert("You have reached the maximum number of posts you are allowed to like!")
                  }
                }}
              >
                / / /
              </p>
            </div>
            <p>{likes}</p>
          </div>
          <div className="grill-description-wrapper">
            <p>{element.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrillCard;
