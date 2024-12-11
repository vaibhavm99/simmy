import React from 'react';
import './Logout.css'; // External CSS file for styling
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './Navbar';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks

const Logout = () => {
  const dispatch = useDispatch(); // Dispatch to trigger actions
  const navigate = useNavigate();

  // Clear the user data from the global state
  dispatch({
    type: 'SET_USER_DATA',
    payload: null, // This sets the user data in the global state
  });

  // Function to navigate to the login page
  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <>
      <NavbarComponent />
      <div className="logout-container">
        <div className="logout-box">
          <h1>You have logged out</h1>
          <p>We hope to see you back soon!</p>
          <button className="logout-btn" onClick={handleLoginRedirect}>
            Back to Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;