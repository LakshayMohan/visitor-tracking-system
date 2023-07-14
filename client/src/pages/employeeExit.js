import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EmployeeForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  emp_id: '',
  date_out: '',
  time_out: '',
};

const EmpExit = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emp_id, date_out, time_out } = state;

    if (!emp_id || !date_out || !time_out) {
      toast.error('Please provide a value in all required fields');
    } else {
      axios
        .post('http://localhost:4001/api/employeeExit/post', {
          emp_id,
          date_out,
          time_out,
        })
        .then(() => {
          toast.success('Exit successful');
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
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="emp-type-heading">Exit Form</h1>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="emp_id">Employee ID</label>
        <input
          type="text"
          id="emp_id"
          name="emp_id"
          placeholder="Enter employee ID"
          onChange={handleInputChange}
          value={state.emp_id} // Add this line to bind the value of the input field
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
        <Link to="/EmpPass">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default EmpExit;
