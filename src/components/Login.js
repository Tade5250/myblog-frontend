import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear any existing errors
    axios.post('http://localhost:8000/api/token/', { username, password })
      .then(response => {
        const { access, refresh } = response.data;
        setAuth({ isLoggedIn: true, user: { username } });
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
        navigate('/');
      })
      .catch(error => {
        setError('The username or password is incorrect.'); // Set an error message
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
