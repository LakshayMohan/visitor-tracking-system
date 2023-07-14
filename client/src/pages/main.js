import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./main.css";

const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:4001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="page-container">
      <div className="content">
        <h1 className="welcome">Graphic Era University</h1>
        <h1 className="university-text">Welcome to<br />Visitor Management<br /> System</h1>
        <Link to="/usertype">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
