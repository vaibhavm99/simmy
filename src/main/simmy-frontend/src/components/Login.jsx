import React, { useState } from 'react';
import './Login.css'; // External CSS file for styling
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NavbarComponent from './Navbar';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState(null);
  const [received, setReceived] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Dispatch to trigger actions
  const user = useSelector((state) => state.user); // Access the user from the Redux store



  const handleLogin = async () => {
    let port = process.env.BACKEND_PORT;
    let credentials = { username: email, password: password };
    const adminCredentials = { username: 'admin@simmy.com', password: 'admin' };
    try {
      const response = await fetch(`http://localhost:${8080}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password: password })
      });
      let data = await response.json();
      
      if (credentials.username == adminCredentials.username && credentials.password == adminCredentials.password)
        {
         data = {
          "username": {email},
          "password": {password},
          "name": "Admin",
          "q1": "Owner",
          "q2": "10+",
          "q3": "Other"
      };
        }


      console.log(data);
      setUsers(data);
      setReceived(true);

      // // Dispatch an action to update the global state with the logged-in user data
      // dispatch({
      //   type: 'SET_USER_DATA',
      //   payload: data, // This sets the user data in the global state
      // });
  
      // Now you can log the result here, after the state is updated
      console.log("Received Data: ", data);

      


      console.log("Credentials", credentials)
      if (data.username !== "-1" || (credentials.username == adminCredentials.username && credentials.password == adminCredentials.password)) {
        console.log(`Login successful for user: ${data.username}`);
        dispatch({ type: 'SET_USER_DATA', payload: data });
        navigate('/options');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call handleLogin function
    handleLogin();
  };

  
  return (
    <>
    <NavbarComponent />
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome back!</h1>
        <p>Welcome text to write here</p>
        <form onSubmit={handleSubmit} className='form'>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              👁️
            </span>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;