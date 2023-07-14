import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const VisitPass = () => {
  return (
    <div className="visitor-type-container">
      <h1 className="user-type-heading">Choose Mode</h1>
      <div className="button-container">
        <Link to="/visitor">
          <button className="user-type-button">Entry</button>
        </Link>
        <Link to="/visitorExit">
          <button className="user-type-button">Exit</button>
        </Link>
        <Link to="/usertype">
          <input type="button" value="Go Back" />
        </Link>
        </div>
    </div>
  );
};

export default VisitPass;