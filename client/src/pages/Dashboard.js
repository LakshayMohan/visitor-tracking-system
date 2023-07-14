import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./StudentView";

import axios from "axios";

const Dashboard  = () => {
  

    return (
        <div className="user-type-container">
          <h1 className="user-type-heading">Choose Database To Access</h1>
          <div className="button-container">
            <Link to="/StudentView">
              <button className="user-type-button">Student Database</button>
            </Link>
            <Link to="/EmployeeView">
              <button className="user-type-button">Employee Database</button>
            </Link>
            <Link to="/VisitorView">
              <button className="user-type-button">Visitor Database</button>
            </Link>
            <Link to="/AdminPass">
          <input type="button" value="Go Back" />
        </Link>
          </div>
        </div>
      );
}

export default Dashboard;