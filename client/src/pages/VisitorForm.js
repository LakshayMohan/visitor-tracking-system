import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './VisitorForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  visitor_name: '',
  visitor_ph_no: '',
  address: '',
  no_of_person: '',
  date_in: '',
  date_out: '',
  time_in: '',
  time_out: '',
  vehicle_no: '',
  purpose: '',
  visitor_company: '',
  visiting_person_name: '',
  visitingPlace: '',
  relationship: '',
};

const Visitform = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      visitor_name,
      visitor_ph_no,
      address,
      no_of_person,
      date_in,
     // date_out,
      time_in,
     // time_out,
      vehicle_no,
      purpose,
      visitor_company,
      visiting_person_name,
      visiting_place,
      relationship,
    } = state;

    if (
      !visitor_name ||
      !visitor_ph_no ||
      !address ||
      !no_of_person ||
      !date_in ||
      !time_in ||
      !purpose
    ) {
      toast.error('Please provide a value in all required fields');
    } else {
      axios
        .post('http://localhost:4001/api/visitor/post', {
          visitor_name,
          visitor_ph_no,
          address,
          no_of_person,
          date_in,
         // date_out,
          time_in,
         // time_out,
          vehicle_no,
          purpose,
          visitor_company,
          visiting_person_name,
          visiting_place,
          relationship,
        })
        .then(() => {
          toast.success('Data inserted successfully');
          setTimeout(() => navigate('/usertype'), 500);
          setState(initialState);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            toast.error(err.response.data);
          } else {
            toast.error('An error occurred');
          }
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="vis-type-heading">Visitor Form</h1>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="visitor_name">Visitor Name</label>
        <input
          type="text"
          id="visitor_name"
          name="visitor_name"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />

        <label htmlFor="visitor_ph_no">Phone No</label>
        <input
          type="number"
          id="visitor_ph_no"
          name="visitor_ph_no"
          placeholder="Enter your phone no"
          onChange={handleInputChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="textarea"
          id="address"
          name="address"
          placeholder="Enter your address"
          onChange={handleInputChange}
        />

        <label htmlFor="no_of_person">No of Person</label>
        <input
          type="text"
          id="no_of_person"
          name="no_of_person"
          placeholder="Enter the number of people"
          onChange={handleInputChange}
        />

        <label htmlFor="date_in">Date In</label>
        <input
          type="date"
          id="date_in"
          name="date_in"
          onChange={handleInputChange}
        />

        <label htmlFor="time_in">Time In</label>
        <input
          type="time"
          id="time_in"
          name="time_in"
          onChange={handleInputChange}
        />

        <label htmlFor="vehicle_no">Vehicle No</label>
        <input
          type="text"
          id="vehicle_no"
          name="vehicle_no"
          placeholder="Enter the vehicle no"
          onChange={handleInputChange}
        />

        <label htmlFor="purpose">Purpose</label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          placeholder="Enter your purpose"
          onChange={handleInputChange}
        />

        <label htmlFor="visitor_company">Visitor Company</label>
        <input
          type="text"
          id="visitor_company"
          name="visitor_company"
          placeholder="Enter company name"
          onChange={handleInputChange}
        />

        <label htmlFor="visiting_person_name">Visiting Person Name</label>
        <input
          type="text"
          id="visiting_person_name"
          name="visiting_person_name"
          placeholder="Enter the visiting person name"
          onChange={handleInputChange}
        />

        <label htmlFor="visiting_place">Visiting Place</label>
        <input
          type="text"
          id="visiting_place"
          name="visiting_place"
          placeholder="Enter the visiting place"
          onChange={handleInputChange}
        />

        <label htmlFor="relationship">Relationship</label>
        <input
          type="text"
          id="relationship"
          name="relationship"
          placeholder="Enter your relationship"
          onChange={handleInputChange}
        />

        <input type="submit" value="Save" />
        <Link to="/usertype">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default Visitform;
