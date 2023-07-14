import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StudentForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  S_id: '',
  date_out: '',
  time_out: '',
};

const StuExit = () => {
  const [state, setState] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const { S_id, date_out, time_out } = state;
    e.preventDefault();

    if (!S_id || !date_out || !time_out) {
      toast.error('Please provide a value in all required fields');
    } else {
      axios
        .post('http://localhost:4001/api/studentExit/post', {
          S_id,
          date_out,
          time_out,
        })
        .then(() => {
          toast.success('Data updated successfully');
          setTimeout(() => navigate('/usertype'), 500);
          setState(initialState);
        })
        .catch((err) => toast.error(err.response.data));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="stu-exit-heading">Student Exit</h1>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="S_id">Student ID</label>
        <input
          type="text"
          id="S_id"
          name="S_id"
          placeholder="Enter student ID"
          onChange={handleInputChange}
        />

        <label htmlFor="date_out">Date Out</label>
        <input
          type="date"
          id="date_out"
          name="date_out"
          onChange={handleInputChange}
        />

        <label htmlFor="time_out">Time Out</label>
        <input
          type="time"
          id="time_out"
          name="time_out"
          onChange={handleInputChange}
        />

        <input type="submit" value="Save" />
        <Link to="/studentPass">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default StuExit;
