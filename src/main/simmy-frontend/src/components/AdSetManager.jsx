import React, { useState } from 'react';
import './AdSetManager.css';
import { useNavigate } from 'react-router-dom';

const AdSetManager = () => {
  const navigate = useNavigate();

  // State variables for form fields
  const [adSetName, setAdSetName] = useState('');
  const [conversionEventLocation, setConversionEventLocation] = useState('');
  const [conversionLocation, setConversionLocation] = useState('');
  const [pixelName, setPixelName] = useState('');
  const [conversionEvent, setConversionEvent] = useState('none');
  const [budgetType, setBudgetType] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [errors, setErrors] = useState({});
  
  const handleContinue = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!adSetName) formErrors.adSetName = 'Ad Set Name is required';
    if (!conversionEventLocation) formErrors.conversionEventLocation = 'Conversion Event Location is required';
    if (!conversionLocation) formErrors.conversionLocation = 'Conversion Location is required';
    if (!pixelName) formErrors.pixelName = 'Pixel Name is required';
    if (!budgetType) formErrors.budgetType = 'Budget type is required';
    if (!budgetAmount) formErrors.budgetAmount = 'Budget amount is required';
    

    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      navigate('/adManager');
    }
  };

  return (
    <div className="adset-manager-container">
      <div className="adset-header">
        <h2>Ad Set Manager</h2>
        <button className="tutorial-btn">Click here for a tutorial 🎥</button>
      </div>

      <div className="adset-details-card">
        <form className="adset-form" onSubmit={handleContinue}>
          {/* Ad Set Name */}
          <h3 className="title">Ad Set Details</h3>
          <div className="form-group">
            <label htmlFor="adSetName">Ad Set Name</label>
            <input
              type="text"
              id="adSetName"
              placeholder="Enter ad set name"
              className="input-field"
              value={adSetName}
              onChange={(e) => setAdSetName(e.target.value)}
              required
            />
            {errors.adSetName && <p className="error">{errors.adSetName}</p>}
          </div>

          {/* Conversion Event Location */}
          <h3 className="title">Conversion</h3>
          <div className="form-group">
            <label htmlFor="conversionEventLocation">Conversion Event Location</label>
            <input
              type="text"
              id="conversionEventLocation"
              placeholder="Enter conversion event location"
              className="input-field"
              value={conversionEventLocation}
              onChange={(e) => setConversionEventLocation(e.target.value)}
              required
            />
            {errors.conversionEventLocation && <p className="error">{errors.conversionEventLocation}</p>}
          </div>

          {/* Conversion Location */}
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="websiteAndShop"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              Website and shop
            </label>
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="website"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              Website
            </label>
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="facebookDonation"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              Facebook Donation
            </label>
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="app"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              App
            </label>
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="websiteAndApp"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              Website and App
            </label>
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="messenger"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              Messenger
            </label>
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="whatsapp"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              WhatsApp
            </label>
            <label>
              <input
                type="radio"
                name="conversionLocation"
                value="calls"
                onChange={(e) => setConversionLocation(e.target.value)}
                required
              />
              Calls
            </label>
            {errors.conversionLocation && <p className="error">{errors.conversionLocation}</p>}
          </div>

          {/* Pixel */}
          <div className="form-group">
            <h4>Pixel</h4>
            <input
              type="text"
              id="pixelName"
              placeholder="Enter Pixel Name"
              className="input-field"
              value={pixelName}
              onChange={(e) => setPixelName(e.target.value)}
              required
            />
            {errors.pixelName && <p className="error">{errors.pixelName}</p>}
          </div>

          {/* Conversion Event */}
          <div className="form-group">
            <label htmlFor="conversionEvent">Conversion Event</label>
            <select
              id="conversionEvent"
              className="input-field"
              value={conversionEvent}
              onChange={(e) => setConversionEvent(e.target.value)}
            >
              <option value="conversion">Conversions</option>
            </select>
          </div>

          {/* Budget & Schedule */}
          <div className="form-group">
            <h4 className="title">Budget & Schedule</h4>
            <div className="budget-input">
              <select
                id="budget"
                className="input-field"
                value={budgetType}
                onChange={(e) => setBudgetType(e.target.value)}
                required
              >
                <option value="">Select Budget</option>
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <input
                type="number"
                id="budgetAmount"
                placeholder="$120.00"
                className="input-field amount-input"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                required
              />
              <span className="currency">USD</span>
              {errors.budgetType && <p className="error">{errors.budgetType}</p>}
              {errors.budgetAmount && <p className="error">{errors.budgetAmount}</p>}
            </div>
          </div>

          {/* Audience */}
          <div className="form-group">
            <h4 className="title">Audience</h4>
            <p>Define who you want to see your ads.</p>
            <div className="audience-details">
              <p><strong>Location:</strong> United States</p>
              <p><strong>Age:</strong> 22 - 36</p>
              <p><strong>Gender:</strong> All</p>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn continue-btn">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdSetManager;