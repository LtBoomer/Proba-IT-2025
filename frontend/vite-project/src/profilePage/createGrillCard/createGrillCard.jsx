import { useState } from "react";
import addPhotoLogo from "../../../../../Media/Login-icons/addPhoto.png";

// async () => {
//               const formData = new FormData();
//               formData.append("image", provizoriu);
//               const res = await fetch("http://localhost:3000/upload-grill-photo", {
//                 method: "POST",
//                 body: formData,
//               });

//   <input
//     type="file"
//     onChange={(event) => {
//       setProvizoriu(event.target.files[0]);
//     }}
//   ></input>
import "./createGrillCard.scss";

const CreateGrillCard = (props) => {
  const [grillContent, setGrillContent] = useState({
    name: "",
    description: "",
    photo: "",
  });
  const { showCard, setShowCard, profile } = props;
  return (
    <div
      className="create-grill-container"
      style={{ visibility: `${showCard ? "visible" : "hidden"}` }}
    >
      <div className="close-popup-button">
        <p
          onClick={() => {
            setShowCard(false);
          }}
        >
          X
        </p>
      </div>
      <div className="input-wrapper">
        <div className="input-container">
          <input
            type="text"
            placeholder="Grill Name:"
            onChange={(event) => {
              setGrillContent({
                ...grillContent,
                name: event.target.value,
              });
            }}
          ></input>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Description:"
            onChange={(event) => {
              setGrillContent({
                ...grillContent,
                description: event.target.value,
              });
            }}
          ></input>
        </div>
        <div className="file-input-container">
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={(event) => {
              console.log(event.target.files[0]);
              setGrillContent({
                ...grillContent,
                photo: event.target.files[0],
              });
            }}
          ></input>
          <label className="chestie" htmlFor="file-input">
            <p>Upload photo</p>
          </label>
        </div>
      </div>
      <button
        onClick={async () => {
          const formData = new FormData();
          formData.append("image", grillContent.photo);
          console.log(grillContent.photo);
          const postPhoto = await fetch("http://localhost:3000/upload-grill-photo", {
            method: "POST",
            body: formData,
          });
          const photoName = await postPhoto.json();
          const postGrill = await fetch("http://localhost:3000/post-grill", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: grillContent.name,
              owner: profile.name,
              email: profile.email,
              likes: 0,
              photo: photoName,
              description: grillContent.description,
            }),
          });
        }}
      >
        Post this grill!
      </button>
    </div>
  );
};

export default CreateGrillCard;
