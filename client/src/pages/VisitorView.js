import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './StudentView.css';

const VisitorView = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/VisitorView/get');
      setData(response.data);
    } catch (error) {
      console.error('Error retrieving visitor data:', error);
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
            <th style={{ textAlign: 'center' }}>Visitor Name</th>
            <th style={{ textAlign: 'center' }}>Phone No</th>
            <th style={{ textAlign: 'center' }}>Address</th>
            <th style={{ textAlign: 'center' }}>No of Person</th>
            <th style={{ textAlign: 'center' }}>Date In</th>
            <th style={{ textAlign: 'center' }}>Date Out</th>
            <th style={{ textAlign: 'center' }}>Time In</th>
            <th style={{ textAlign: 'center' }}>Time Out</th>
            <th style={{ textAlign: 'center' }}>Vehicle No</th>
            <th style={{ textAlign: 'center' }}>Purpose</th>
            <th style={{ textAlign: 'center' }}>Visitor Company</th>
            <th style={{ textAlign: 'center' }}>Visiting Person Name</th>
            <th style={{ textAlign: 'center' }}>Visiting Place</th>
            <th style={{ textAlign: 'center' }}>Relationship</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.visitor_name}</td>
              <td>{item.visitor_ph_no}</td>
              <td>{item.address}</td>
              <td>{item.no_of_person}</td>
              <td>{item.date_in}</td>
              <td>{item.date_out}</td>
              <td>{item.time_in}</td>
              <td>{item.time_out}</td>
              <td>{item.vehicle_no}</td>
              <td>{item.purpose}</td>
              <td>{item.visitor_company}</td>
              <td>{item.visiting_person_name}</td>
              <td>{item.visiting_place}</td>
              <td>{item.relationship}</td>
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

export default VisitorView;
