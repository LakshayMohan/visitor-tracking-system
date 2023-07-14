import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './StudentView.css';

const EmployeeView = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/EmployeeView/get');
      setData(response.data);
    } catch (error) {
      console.error('Error retrieving employee data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <Link to="/Dashboard">
        <input className="go_back_btn" type="button" value="Go Back" />
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Employee Name</th>
            <th style={{ textAlign: 'center' }}>Employee ID</th>
            <th style={{ textAlign: 'center' }}>Position</th>
            <th style={{ textAlign: 'center' }}>Phone Number</th>
            <th style={{ textAlign: 'center' }}>Date In</th>
            <th style={{ textAlign: 'center' }}>Date Out</th>
            <th style={{ textAlign: 'center' }}>Time In</th>
            <th style={{ textAlign: 'center' }}>Time Out</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return(
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.emp_name}</td>
              <td>{item.emp_id}</td>
              <td>{item.emp_position}</td>
              <td>{item.emp_phone}</td>
              <td>{item.date_in}</td>
              <td>{item.date_out}</td>
              <td>{item.time_in}</td>
              <td>{item.time_out}</td>
              <td>
                <Link to={`/update/${item.id}`}>
                  <button className="btn btn-edit">Edit</button>
                </Link>
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
            )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeView;
