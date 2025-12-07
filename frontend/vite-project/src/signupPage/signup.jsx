import "./signup.scss";
import pimpGrillFrame from "../../../../Media/Pimp-your-grill-frame.png";
import Header from "../header/header";
import lockIcon from "../../../../Media/Login-icons/lock.png";
import mailIcon from "../../../../Media/Login-icons/mail.png";
import personIcon from "../../../../Media/Login-icons/person.png";
import phoneIcon from "../../../../Media/Login-icons/phone.png";
import { useState } from "react";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    phoneNumber: 0,
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    showMessage: "hidden",
  });
  return (
    <>
      <Header />
      <div className="signup-wrapper">
        <div className="img-container">
          <img src={pimpGrillFrame} />
        </div>
        <div className="signup-container">
          <div className="welcome-message">
            <p>Gata să devii șef pe grătare?</p>
          </div>
          <div className="input-wrapper">
            <div className="full-name input-container">
              <div className="img-container">
                <img src={personIcon} />
              </div>
              <input
                type={Text}
                placeholder="full name"
                onChange={(event) => {
                  setCredentials({
                    name: event.target.value,
                    phoneNumber: credentials.phoneNumber,
                    email: credentials.email,
                    password: credentials.password,
                    confirmPassword: credentials.confirmPassword,
                  });
                }}
              ></input>
            </div>
            <div className="telephone input-container">
              <div className="img-container">
                <img src={phoneIcon} />
              </div>
              <input
                type={Text}
                placeholder="Telephone"
                onChange={(event) => {
                  setCredentials({
                    name: credentials.name,
                    phoneNumber: event.target.value,
                    email: credentials.email,
                    password: credentials.password,
                    confirmPassword: credentials.confirmPassword,
                  });
                }}
              ></input>
            </div>
            <div className="email input-container">
              <div className="img-container">
                <img src={mailIcon} />
              </div>
              <input
                type={Text}
                placeholder="E-mail"
                onChange={(event) => {
                  setCredentials({
                    name: credentials.name,
                    phoneNumber: credentials.phoneNumber,
                    email: event.target.value,
                    password: credentials.password,
                    confirmPassword: credentials.confirmPassword,
                  });
                }}
              ></input>
            </div>
            <div className="password input-container">
              <div className="img-container">
                <img src={lockIcon} />
              </div>
              <input
                type={Text}
                placeholder="Password"
                onChange={(event) => {
                  setCredentials({
                    name: credentials.name,
                    phoneNumber: credentials.phoneNumber,
                    email: credentials.email,
                    password: event.target.value,
                    confirmPassword: credentials.confirmPassword,
                  });
                }}
              ></input>
            </div>
            <div className="password-confirm input-container">
              <div className="img-container">
                <img src={lockIcon} />
              </div>
              <input
                type={Text}
                placeholder="Confirm password"
                onChange={(event) => {
                  setCredentials({
                    name: credentials.name,
                    phoneNumber: credentials.phoneNumber,
                    email: credentials.email,
                    password: credentials.password,
                    confirmPassword: event.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="signup-button-wrapper">
            <button
              onClick={async (event) => {
                const params = new URLSearchParams({
                  email: credentials.email,
                });
                const alreadyExists = await fetch(
                  `http://localhost:3000/all-users/?${params.toString()}`
                );
                const foundExistingUser = await alreadyExists.json();
                console.log(foundExistingUser);
                if (credentials.password !== credentials.confirmPassword) {
                  setErrorMessage({
                    message: "Passwords do not match",
                    showMessage: "visible",
                  });
                } else if (
                  !(
                    credentials.email.includes("@gmail") ||
                    credentials.email.includes("@yahoo")
                  )
                ) {
                  setErrorMessage({
                    message: "Invalid email address",
                    showMessage: "visible",
                  });
                } else if (foundExistingUser) {
                  setErrorMessage({
                    message: "User already exists",
                    showMessage: "visible",
                  });
                } else {
                  await fetch("http://localhost:3000/post", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: credentials.name,
                      number: credentials.phoneNumber,
                      email: credentials.email,
                      pass: credentials.password,
                    }),
                  });
                  setErrorMessage({
                    message: "Account created successfully",
                    showMessage: "visible",
                  });
                }
              }}
            >
              Sign up
            </button>
          </div>
          <div
            className="error-message-wrapper"
            style={{ visibility: errorMessage.showMessage }}
          >
            <p>{errorMessage.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
