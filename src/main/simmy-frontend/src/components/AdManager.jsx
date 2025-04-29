import React, { useState } from 'react';
import './AdManager.css'; // Make sure to create this file for styles
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks

const AdManager = () => {
  const [adName, setAdName] = useState('');
  const [adSetup, setAdSetup] = useState('Create Ad');
  const [format, setFormat] = useState('Collection');
  const [primaryText, setPrimaryText] = useState('');
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [callToAction, setCallToAction] = useState('');

  const user = useSelector((state) => state.user); // Access the user from the Redux store
  const campaign = useSelector((state) => state.campaign); // Access the campaign from the Redux store
  const adset = useSelector((state) => state.adset); // Access the adset from the Redux store
  const dispatch = useDispatch(); // Dispatch to trigger actions
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission
    console.log({
      adName,
      adSetup,
      format,
      primaryText,
      headline,
      description,
      callToAction,
    });

    let formErrors = {};
    if (!adName) formErrors.adName = 'Ad Name is required';
    if (!primaryText) formErrors.primaryText = 'Primary Text is required';
    if (!headline) formErrors.headline = 'Headline is required';
    if (!description) formErrors.description = 'Description is required';
    if (!callToAction) formErrors.callToAction = 'Call to Action is required';
    if (!adSetup) formErrors.adSetup = 'Ad Setup is required';
    if (!format) formErrors.format = 'Format is required';

    if (Object.keys(formErrors).length > 0) {
      console.log('Form errors:', formErrors);
    } else {
      let adData = {
        id: user.name + "_" + campaign.name + "_" + adset.name + "_" + adName,
        name : adName,
        adSetup: adSetup,
        format: format,
        text: primaryText,
        headline: headline,
        description: description,
        callToAction: callToAction,
        image: '',
        video: '',
      };

      console.log('Ad data:', adData);

      dispatch({
        type: 'SET_AD',
        payload: adData,
      });

      // Send data to the backend
      const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';
      fetch(`${BASE_URL}/saveAd`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adData),
      });

      // Redirect to the dashboard page after successful submission
    navigate('/dashboard');
  }

  };

  return (
    <div className="ad-set-manager">
      <h1>Ad Set Manager</h1>
      <form onSubmit={handleSubmit}>
        <div className="ad-details">
          <label>Ad Name</label>
          <input
            type="text"
            value={adName}
            onChange={(e) => setAdName(e.target.value)}
            placeholder="Name"
            className="input-field"
            required
          />
        </div>

        <div className="ad-setup">
          <label>Ad Setup</label>
          <select
            value={adSetup}
            onChange={(e) => setAdSetup(e.target.value)}
            className="input-field"
            required
          >
            <option value="Create Ad">Create Ad</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="format">
          <label>Format</label>
          <div className='radio-group'>
            <input
              type="radio"
              value="Single image or Video"
              checked={format === 'Single image or Video'}
              onChange={(e) => setFormat(e.target.value)}
              required
            />
            <label>Single image or Video</label>
          </div>
          <div className='radio-group'>
            <input
              type="radio"
              value="Carousel"
              checked={format === 'Carousel'}
              onChange={(e) => setFormat(e.target.value)}
              required
            />
            <label>Carousel</label>
          </div>
          <div className='radio-group'>
            <input
              type="radio"
              value="Collection"
              checked={format === 'Collection'}
              onChange={(e) => setFormat(e.target.value)}
              required
            />
            <label>Collection</label>
          </div>
        </div>

        <div className="ad-media">
          <label>Ad Media</label>
          <p>Images: No Photos Attached</p>
          <p>Videos: No Videos Attached</p>
        </div>

        <div className="ad-text">
          <label>Primary Text</label>
          <input
            type="text"
            value={primaryText}
            onChange={(e) => setPrimaryText(e.target.value)}
            placeholder="Primary Text"
            className="input-field"
            required
          />
          <label>Headline</label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="Headline"
            className="input-field"
            required
          />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="input-field"
            required
          />
        </div>

        <div className="call-to-action">
          <label>Call to Action</label>
          <input
            type="text"
            value={callToAction}
            onChange={(e) => setCallToAction(e.target.value)}
            placeholder="Call to Action"
            className="input-field"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="publish-btn">Publish</button>
          <button type="button" className="cancel-btn" onClick={() => navigate('/dashboard')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdManager;
