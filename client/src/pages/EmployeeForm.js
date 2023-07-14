import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EmployeeForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  emp_name: '',
  emp_id: '',
  emp_position: '',
  emp_phone: '',
  date_in: '',
  time_in: '',
};

const EmployeeForm = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      emp_name,
      emp_id,
      emp_position,
      emp_phone,
      date_in,
      time_in,
    } = state;

    if (!emp_name || !emp_id || !emp_position || !emp_phone || !date_in || !time_in) {
      toast.error('Please provide a value in all required fields');
    } else {
      axios
        .post('http://localhost:4001/api/employee/post', {
          emp_name,
          emp_id,
          emp_position,
          emp_phone,
          date_in,
          time_in,
        })
        .then(() => {
          toast.success('Data inserted successfully');
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
      <h1 className="emp-type-heading">Employee Form</h1>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="emp_name">Name</label>
        <input
          type="text"
          id="emp_name"
          name="emp_name"
          placeholder="Enter employee name"
          onChange={handleInputChange}
        />

        <label htmlFor="emp_id">ID</label>
        <input
          type="text"
          id="emp_id"
          name="emp_id"
          placeholder="Enter employee ID"
          onChange={handleInputChange}
        />

        <label htmlFor="emp_position">Position</label>
        <input
          type="text"
          id="emp_position"
          name="emp_position"
          placeholder="Enter employee position"
          onChange={handleInputChange}
        />

        <label htmlFor="emp_phone">Phone</label>
        <input
          type="text"
          id="emp_phone"
          name="emp_phone"
          placeholder="Enter employee phone"
          onChange={handleInputChange}
        />

        <label htmlFor="date_in">Date in</label>
        <input
          type="date"
          id="date_in"
          name="date_in"
          onChange={handleInputChange}
        />

        <label htmlFor="time_in">Time in</label>
        <input
          type="time"
          id="time_in"
          name="time_in"
          onChange={handleInputChange}
        />

        <input type="submit" value="Save" />
        <Link to="/EmpPass">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default EmployeeForm;
