import React, { useState, useEffect } from 'react';
import './Signup.css'; // External CSS file for styling
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import NavbarComponent from './Navbar';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Dispatch to trigger actions
  const user = useSelector((state) => state.user); // Access the user from the Redux store
  const [emails, setEmails] = useState([]);

  // Modified function to be async and wait for data
  async function getAllusernames() {
    try {
      const response = await fetch(`http://localhost:${8080}/emails`);
      const data = await response.json();
      
      console.log("Fetched Emails:", data); // Log the fetched emails directly
      setEmails(data); // Directly set the emails since data is already an array of strings
      
      return data;
    } catch (error) {
      console.error("Error fetching emails:", error);
      return [];
    }
  }

  useEffect(() => {
    getAllusernames(); // Fetch emails when the component mounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure emails are up-to-date by fetching them again before checking
    const emailList = emails.length === 0 ? await getAllusernames() : emails;
    
    console.log("Current Emails State:", emailList); // Log emails state before checking
    console.log("Email entered:", email);

    if (emailList.includes(email)) {
      alert("Email is already registered. Please login instead.");
      return;
    }

    let username = email;
    // Handle the form submission logic here
    console.log({ name, username, password });
    dispatch({
      type: 'SET_USER',
      payload: { name, username, password },
    });
    console.log('User data:', user);
    navigate('/survey');
  };

  return (
    <>
      <NavbarComponent />

      <div className="signup-container">
        <div className="signup-box">
          <h1>Create an Account</h1>
          <p>Please enter your details</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={() => { setShowPassword(!showPassword) }}>👁️</span>
            </div>
            <button type="submit" className="signup-btn">
              Create
            </button>
          </form>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
