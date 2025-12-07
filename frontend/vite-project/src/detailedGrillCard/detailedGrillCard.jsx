import "./detailedGrillCard.scss";
import grillLikesFunction from "../functions/grillLikesFunction";

const DetailedGrillCard = (props) => {
  const { grill, profile, setShow, show } = props;
  if (grill != undefined) {
    if (show) {
      return (
        <div className="detailed-card-wrapper">
          <div className="img-container">
            <img src={`grillIcons/${grill.photo}`} />
          </div>
          <div className="info-container">
            <div className="general-info-wrapper">
              <div className="general-info-container">
                <p>{grill.grillName}</p>
                <p>Pimp:</p>
                <p>{grill.grillOwner}</p>
                <div className="likes">
                  <div className="like-button-container">
                    <p
                      style={grillLikesFunction(profile.grillsLiked, grill._id)}
                    >
                      / / /
                    </p>
                  </div>

                  <p>{grill.likes} Mici</p>
                </div>
              </div>
              <div className="buttons-container">
                <p
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  X
                </p>
                <div className="grill-buttons-container">
                  <button style={{ background: "#AB8826" }}>Edit post</button>
                  <button style={{ background: "#AB2626" }}>Remove post</button>
                </div>
              </div>
            </div>
            <div className="description-container">
              <p>{grill.description}</p>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default DetailedGrillCard;
