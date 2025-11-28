import "./login.scss";
import lockIcon from "../../../../Media/Login-icons/lock.png";
import mailIcon from "../../../../Media/Login-icons/mail.png";
import Header from "../header/header";
import pimpGrillFrame from "../../../../Media/Pimp-your-grill-frame.png";

const LoginPage = () => {
  return (
    <>
      <Header />
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
              <input type={Text} placeholder="E-mail"></input>
            </div>
            <div className="password input-container">
                <div className="img-container">
              <img src={lockIcon} />
                </div>
              <input type={Text} placeholder="Password"></input>
            </div>
            <div className="button-wrapper">
            <button className="login-button">Log in</button>
            </div>
          </div>
          <div className="bottom-text-info">
            <p className="forgot-password">Forgot password</p>
            <div className="signup-message-container">
            <p>Don't have an account? Click here to</p>
            <p className="signup-text">sign up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
