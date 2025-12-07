import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "./App.scss";
import LoginPage from "./loginPage/Login";
import Signup from "./signupPage/signup";
import ProfilePage from "./profilePage/profilePage";
import GrillPage from "./grillPage/grillPage";
import { useState, useEffect } from "react";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    likes: 0,
    grillsLiked: [],
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const getProfile = async () => {
      const profileVariable = await fetch("http://localhost:3000/profile", {
        headers: { Authorization: "Bearer " + token },
      });
      if (!profileVariable.ok) {
        setIsAuthenticated(false);
        setProfile(null);
        return;
      }
      const profileData = await profileVariable.json();
      setIsAuthenticated(true);
      const params = new URLSearchParams({
        email: profileData,
      });
      const userDataRequest = await fetch(
        `http://localhost:3000/login-user/?${params.toString()}`
      );
      const userData = await userDataRequest.json();
      setProfile({
        name: userData.name,
        phone: userData.telephoneNumber,
        email: userData.email,
        likes: userData.likesGiven,
        grillsLiked: userData.likedGrills,
      });
    };

    getProfile();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
      <Route
        path="/login"
        element={<LoginPage isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/sign-up"
        element={<Signup isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/profile"
        element={
          <ProfilePage isAuthenticated={isAuthenticated} profile={profile} />
        }
      />
      <Route
        path="/grills"
        element={
          <GrillPage isAuthenticated={isAuthenticated} profile={profile} setProfile={setProfile}/>
        }
      />
    </Routes>
  );
}

export default App;
