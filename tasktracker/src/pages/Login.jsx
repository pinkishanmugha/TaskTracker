import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const {login}=useAuth()
  const navigate= useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password }
      );

      if (response.data.success) {
        login(response.data.user)
        localStorage.setItem("token",response.data.token)
        if(response.data.user.role === "admin"){
            navigate('/admin-dashboard')
        }else{
          navigate("/teamMember-dashboard")
        }
        
      }
    } catch (error) {
      if (error.response && error.response.data && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError('Server Error');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="title">User Management System</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Login</h3>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
                setSuccess(null);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
                setSuccess(null);
              }}
              required
            />
          </div>

          <button className="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
