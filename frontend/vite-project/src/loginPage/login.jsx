import "./login.scss";
import lockIcon from "../../../../Media/Login-icons/lock.png";
import mailIcon from "../../../../Media/Login-icons/mail.png";
import Header from "../header/header";
import pimpGrillFrame from "../../../../Media/Pimp-your-grill-frame.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const { isAuthenticated } = props;
  const navigate = useNavigate();
  const [userLoginInput, setUserLoginInput] = useState({
    email: "alex.popescu@example.com",
    pass: "Somethingsomething",
  });
  const [loginErrorCondition, setLoginErrorCondition] = useState(false);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="login-page-wrapper">
        <div className="image-wrapper">
          <img src={pimpGrillFrame} />
        </div>
        <div className="login-container">
          <div className="welcome-message">
            <p>Bine ai revenit mare grătaragiu!</p>
          </div>
          <div className="input-wrapper">
            <div className="email input-container">
              <div className="img-container">
                <img src={mailIcon} />
              </div>
              <input type="text" placeholder="E-mail"></input>
            </div>
            <div className="password input-container">
              <div className="img-container">
                <img src={lockIcon} />
              </div>
              <input type="password" placeholder="Password"></input>
            </div>
            <div className="button-wrapper">
              <button
                className="login-button"
                onClick={async () => {
                  const params = new URLSearchParams({
                    email: userLoginInput.email,
                  });
                  const userBackend = await fetch(
                    `http://localhost:3000/login-user/?${params.toString()}`
                  );
                  const data = await userBackend.json();
                  if (data.password === userLoginInput.pass) {
                    const fetchToken = await fetch(
                      "http://localhost:3000/login-token",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          email: userLoginInput.email,
                        }),
                      }
                    );
                    const tokenAutentificare = await fetchToken.json();
                    if (tokenAutentificare) {
                      localStorage.setItem("token", tokenAutentificare);
                    }
                    const email = await fetch("http://localhost:3000/profile", {
                      headers: {
                        Authorization: "Bearer " + tokenAutentificare,
                      },
                    });
                    navigate("/");
                    window.location.reload();
                  } else {
                    setLoginErrorCondition(true);
                  }
                }}
              >
                Log in
              </button>
            </div>
          </div>
          <div className="bottom-text-info">
            <p className="forgot-password">Forgot password</p>
            <div className="signup-message-container">
              <p>Don't have an account? Click here to</p>
              <p className="signup-text">sign up</p>
            </div>
            {loginErrorCondition ? (
              <p>Datele introduse sunt gresite!</p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
