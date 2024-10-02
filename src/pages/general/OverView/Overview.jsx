import "./Overview.css";
import React from "react";

const Overview = () => {
  return (
    <div className="app__mainscreen">
      <div className="app__header">
        <h1>Good Morning!</h1>
        <p className="date-time">
          Date and Time (GMT): <span id="date-time"></span>
        </p>
      </div>
      <div className="app__block1-wrapper">
        <div className="app__block1-contents"></div>
      </div>
      <div className="app__block2-wrapper">
        <div className="app__block2-1-wrapper">
          <div className="app__block-2-1-contents"></div>
        </div>
        <div className="app__block2-2-wrapper">
          <div className="app__block2-2-contents"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
