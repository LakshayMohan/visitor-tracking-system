import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./AdminPass.css";
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  admin_name: '',
  admin_id: '',
  admin_password: '',
  admin_phone: ''
};

const AdminPass = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { admin_name, admin_id, admin_password, admin_phone } = state;

    if (!admin_name || !admin_id || !admin_password || !admin_phone) {
      toast.error('Please provide a value in all required fields');
    } else {
      axios
        .post('http://localhost:4001/api/admin/login', {
          admin_name,
          admin_id,
          admin_password,
          admin_phone
        })
        .then(() => {
          toast.success('Login successful');
          setTimeout(() => navigate('/Dashboard'), 500);
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
      [name]: value
    }));
  };

  return (
  <div className="page-container-admin">
     <h1 className="admin-type-heading">Admin Login</h1>
    <div style={{ marginTop: '75px' }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center'
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="admin_name">Admin Name</label>
        <input
          type="text"
          id="admin_name"
          name="admin_name"
          placeholder="Enter admin name"
          onChange={handleInputChange}
          value={state.admin_name}
          autoComplete="off"
        />

        <label htmlFor="admin_id">Admin ID</label>
        <input
          type="text"
          id="admin_id"
          name="admin_id"
          placeholder="Enter admin ID"
          onChange={handleInputChange}
          value={state.admin_id}
          autoComplete="off"
        />

        <label htmlFor="admin_password">Password</label>
        <input
          type="password"
          id="admin_password"
          name="admin_password"
          placeholder="Enter password"
          onChange={handleInputChange}
          value={state.admin_password}
          autoComplete="off"
        />

        <label htmlFor="admin_phone">Phone Number</label>
        <input
          type="text"
          id="admin_phone"
          name="admin_phone"
          placeholder="Enter phone number"
          onChange={handleInputChange}
          value={state.admin_phone}
          autoComplete="off"
        />

        <input type="submit" value="Login" />
        <Link to="/usertype">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
    </div>
  );
};

export default AdminPass;
