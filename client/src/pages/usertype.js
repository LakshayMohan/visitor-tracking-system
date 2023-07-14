import React from "react";
import { Link } from "react-router-dom";
import "./usertype.css";

const UserType = () => {
  return (
    <div className="user-type-container">
      <h1 className="user-type-heading">Choose User Type</h1>
      <div className="button-container">
        <Link to="/visit">
          <button className="user-type-button">Visitor</button>
        </Link>
        <Link to="/emp">
          <button className="user-type-button">Employee</button>
        </Link>
        <Link to="/stu">
          <button className="user-type-button">Student</button>
        </Link>
        <Link to="/admin">
          <button className="user-type-button admin">Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default UserType;