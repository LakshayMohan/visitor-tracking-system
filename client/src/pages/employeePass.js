import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const EmpPass = () => {
  return (
    <div className="employee-type-container">
      <h1 className="user-type-heading">Choose Mode</h1>
      <div className="button-container">
        <Link to="/employee">
          <button className="user-type-button">Entry</button>
        </Link>
        <Link to="/empExit">
          <button className="user-type-button">Exit</button>
        </Link>
        <Link to="/usertype">
          <input type="button" value="Go Back" />
        </Link>
        </div>
    </div>
  );
};

export default EmpPass;