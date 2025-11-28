import "./footer.scss";
import instaLogo from "../../../../Media/Socials/Instagram.png";
import facebookLogo from "../../../../Media/Socials/Facebook.png";
import twitchLogo from "../../../../Media/Socials/Twitch.png";
import youTubeLogo from "../../../../Media/Socials/YouTube.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <p>Contact</p>
        <div className="logo-wrapper">
          <img src={instaLogo} />
          <img src={facebookLogo} />
          <img src={youTubeLogo} />
          <img src={twitchLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
