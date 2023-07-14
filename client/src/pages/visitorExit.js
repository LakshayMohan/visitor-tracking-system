import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './VisitorForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  visitor_ph_no: '',
  date_out: '',
  time_out: '',
};

const VisitorExit = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { visitor_ph_no, date_out, time_out } = state;

    if (!visitor_ph_no || !date_out || !time_out) {
      toast.error('Please provide a value in all required fields');
    } else {
      axios
        .post('http://localhost:4001/api/visitorExit/post', {
          visitor_ph_no,
          date_out,
          time_out,
        })
        .then(() => {
          toast.success('Exit successful');
          setTimeout(() => navigate('/visitPass'), 500);
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
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="vis-type-heading">Exit Form</h1>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        
        <label htmlFor="visitor_ph_no">Phone No</label>
        <input
          type="number"
          id="visitor_ph_no"
          name="visitor_ph_no"
          placeholder="Enter your phone no"
          onChange={handleInputChange}
          value={state.visitor_ph_no} // Add this line to bind the value of the input field
          autoComplete="off"
        />

        <label htmlFor="date_out">Date Out</label>
        <input
          type="date"
          id="date_out"
          name="date_out"
          onChange={handleInputChange}
          value={state.date_out} // Add this line to bind the value of the input field
          autoComplete="off"
        />

        <label htmlFor="time_out">Time Out</label>
        <input
          type="time"
          id="time_out"
          name="time_out"
          onChange={handleInputChange}
          value={state.time_out} // Add this line to bind the value of the input field
          autoComplete="off"
        />

        <input type="submit" value="Save" />
        <Link to="/visitPass">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default VisitorExit;
