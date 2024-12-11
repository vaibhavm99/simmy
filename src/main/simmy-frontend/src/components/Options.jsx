import React from 'react';
import './Options.css'; // External CSS file for styling
import { useNavigate } from 'react-router-dom';

const Options = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
      <h1>Welcome to Simmy!</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Simulator</h2>
          <p>
            Our simulator helps you create custom audiences for your business according to our best practices and simulate possible performance metrics such as Impressions and Website purchases.
          </p>
          <button className="btn" onClick={() => navigate('/simulator-profiles')}>
            Simulate!
          </button>
        </div>
        <div className="card">
          <h2>Teaching platform</h2>
          <p>
            Our teaching platform helps you understand how to optimize your campaign for better results based on multiple factors such as budget and campaign schedules.
          </p>
          <button className="btn" onClick={() => navigate('/dashboard')}>
            Learn!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;