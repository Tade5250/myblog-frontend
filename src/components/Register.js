import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any existing error messages
    const userData = {
      username,
      password,
      email,
    };

    axios.post('http://localhost:8000/api/register/', userData)
      .then(response => {
        // If successful, redirect to the login page
        navigate('/login');
      })
      .catch(error => {
        if (error.response && error.response.data) {
          // Handle error response from the server
          setErrorMessage(error.response.data.detail || 'An error occurred during registration.');
        } else {
          setErrorMessage('The server is not responding. Please try again later.');
        }
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

