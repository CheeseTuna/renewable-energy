import React from "react";
import icons from "../../constants/icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="app__navbar">
        <div className="app__navbar-logo">
          <img src={icons.wind} alt="wind turbine logo" />
          <h1>Wind Turbine Monitor</h1>
        </div>
        <div className="app__searchbar">
          <div className="app__searchbar-field"></div>
        </div>
        <div className="app__navbar-general">
          <div className="app__navbar-links">
            <p>General</p>
            <li className="app__opensans">
              <a href="#overview">Overview</a>
            </li>
            <li className="app__opensans">
              <a href="#windfarm">Wind Farm</a>
            </li>
            <li className="app__opensans">
              <a href="#clustercontroller">Cluster Controller</a>
            </li>
            <li className="app__opensans">
              <a href="#windturbine">Wind Turbine</a>
            </li>
            <li className="app__opensans">
              <a href="#alerts">Alerts</a>
            </li>
          </div>
        </div>
        <div className="app__navbar-support">
          <div className="app__navbar-links">
            <p>Support</p>
            <li className="app__opensans">
              <a href="#help">Help</a>
            </li>
            <li className="app__opensans">
              <a href="#settings">Settings</a>
            </li>
            <li className="app__opensans">
              <a href="#myaccount">My Account</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
