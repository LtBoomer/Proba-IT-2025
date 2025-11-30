import "./header.scss";
import logoIT from "../../../../Media/MediaHeader/logoIT.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo-wrapper">
          <img
            style={{ zIndex: "5", cursor: "pointer" }}
            src={logoIT}
            onClick={() => {
              handleNavigate("/");
            }}
          />
        </div>
        <nav className="navigation-wrapper">
          <p>Best Grills</p>
          <p
            onClick={() => {
              handleNavigate("/login");
            }}
          >
            Login
          </p>
          <p
            onClick={() => {
              handleNavigate("/sign-up");
            }}
          >
            Register
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Header;
