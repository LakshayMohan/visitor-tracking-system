import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StudentForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  S_name: '',
  S_id: '',
  S_course: '',
  S_ph_no: '',
  S_email: '',
  date_in: '',
  time_in: '',
};

const Studentform = () => {
  const [state, setState] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const { S_name, S_id, S_course, S_ph_no, S_email, date_in, time_in } = state;
    e.preventDefault();

    if (!S_name || !S_id || !S_course || !S_ph_no || !date_in || !time_in) {
      toast.error('Please provide a value in all required fields');
    } else {
      axios
        .post('http://localhost:4001/api/student/post', {
          S_name,
          S_id,
          S_course,
          S_ph_no,
          S_email,
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
      <h1 className="stu-type-heading">Student Form</h1>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="S_name">Name</label>
        <input
          type="text"
          id="S_name"
          name="S_name"
          placeholder="Enter student name"
          onChange={handleInputChange}
        />

        <label htmlFor="S_id">ID</label>
        <input
          type="text"
          id="S_id"
          name="S_id"
          placeholder="Enter student ID"
          onChange={handleInputChange}
        />

        <label htmlFor="S_course">Course</label>
        <input
          type="text"
          id="S_course"
          name="S_course"
          placeholder="Enter student course"
          onChange={handleInputChange}
        />

        <label htmlFor="S_ph_no">Phone No</label>
        <input
          type="number"
          id="S_ph_no"
          name="S_ph_no"
          placeholder="Enter student phone no"
          onChange={handleInputChange}
        />

        <label htmlFor="S_email">Email</label>
        <input
          type="email"
          id="S_email"
          name="S_email"
          placeholder="Enter student email"
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
        <Link to="/studentPass">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default Studentform;
