import React, { useState } from 'react';
import './AdManager.css'; // Make sure to create this file for styles
import { useNavigate } from 'react-router-dom';

const AdManager = () => {
  const [adName, setAdName] = useState('');
  const [adSetup, setAdSetup] = useState('Create Ad');
  const [format, setFormat] = useState('Collection');
  const [primaryText, setPrimaryText] = useState('');
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [callToAction, setCallToAction] = useState('');

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
    navigate('/dashboard')
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