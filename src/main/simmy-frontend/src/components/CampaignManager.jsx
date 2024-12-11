import React, { useState } from 'react';
import './CampaignManager.css';
import NavbarComponent from './Navbar';
import { useNavigate } from 'react-router-dom';


const CampaignManager = () => {
  const navigate = useNavigate();
  const [campaignName, setCampaignName] = useState('');
  const [campaignObjective, setCampaignObjective] = useState('');
  const [errors, setErrors] = useState({ name: '', objective: '' });

  const handleContinue = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: '', objective: '' };

    if (!campaignName) {
      newErrors.name = 'Campaign name is required';
      hasError = true;
    }

    if (!campaignObjective) {
      newErrors.objective = 'Campaign objective is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      navigate('/AdSetManager');
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="campaign-manager-container">
        <div className="campaign-header">
          <h2>Campaign Manager</h2>
          <button className="tutorial-btn">Click here for a tutorial 🎥</button>
        </div>

        <div className="campaign-details-card">
          <h3 className="campaign-details-title">Campaign Details</h3>

          <form className="campaign-form">
            <div className="form-group">
              <label htmlFor="campaignName">Campaign Name</label>
              <input
                type="text"
                id="campaignName"
                placeholder="Enter your campaign name"
                className="input-field"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="campaignObjective">Campaign Objective 
                <span className="info-icon">ℹ️</span>
              </label>
              <select
                id="campaignObjective"
                className="input-field"
                value={campaignObjective}
                onChange={(e) => setCampaignObjective(e.target.value)}
              >
                <option value="">Select Campaign Objective</option>
                <option value="1">Conversion</option>
              </select>
              {errors.objective && <span className="error-message">{errors.objective}</span>}
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn cancel-btn"
                onClick={() => navigate('/dashboard')}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn continue-btn"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        <footer className="footer">
          <p>© 2024 SIMMY • All rights reserved. <a href="#">Privacy Policy</a> & <a href="#">Terms of Service</a>.</p>
        </footer>
      </div>
    </>
  );
};

export default CampaignManager;
