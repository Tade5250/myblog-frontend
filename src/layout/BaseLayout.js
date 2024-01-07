import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './BaseLayout.css';

const BaseLayout = ({ children }) => {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, user: null });
    // Clear JWT tokens from local storage or wherever it's stored
  };

  return (
    <>
      <header>
        <h1>My Blog</h1>
        <nav>
          <Link to="/">Home</Link>
          {auth.isLoggedIn ? (
            <>
              <span>{auth.user.username}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;