import './SimulatorProfilesNew.css';
import NavbarComponent from './Navbar';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FormContext, ProfileUpdated } from './FormContext';
import { useNavigate } from 'react-router-dom';
const SimulatorProfilesNew = () => {
    const user = useSelector((state) => state.user); // Access the global user data
    // State to handle form data
    const {formData, setFormData} = useContext(FormContext);
    const {updated, setUpdated} = useContext(ProfileUpdated);
    const navigate = useNavigate();
    //if formdat.storename is not '' redirecto to '/simulator-profiles-new' on mount
    useEffect(() => {
        console.log(formData.storeName);
        //use react router instead of windows.location.href

        if(formData.storeName !== ''){
            navigate('/simulator-profiles');
        }
    }, []);
  
    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
       if(!updated) {
          setUpdated(true);
       }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/simulator-profiles');
    };
    if(user === null) {
        return (
          <>
          <NavbarComponent />
          <div>
            <h1>Not logged in</h1>
            <p>Please log in or sign up to view this page</p>
          </div>
          </>
        );
      }

    return (
        <>
            <NavbarComponent />
            <div className="simulator-profiles-container">
                <h2>Welcome to Simmy Simulator !</h2>
                <form className="simulator-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='mylabel' htmlFor="storeName">Store Name</label>
                        <input
                            className='myinput'
                            type="text"
                            id="storeName"
                            placeholder="Your stores name"
                            name="storeName"
                            value={formData.storeName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className='mylabel' htmlFor="webUrl">Web URL</label>
                        <input
                            className='myinput'
                            type="text"
                            id="webUrl"
                            placeholder='Your stores website URL'
                            name="webUrl"
                            value={formData.webUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className='mylabel' htmlFor="industry">Industry</label>
                        <input
                            className='myinput'
                            type="text"
                            id="industry"
                            name="industry"
                            placeholder='e.g. Fashion, Electronics, etc.'
                            value={formData.industry}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className='mylabel' htmlFor="description">Description</label>
                        <textarea
                            className='mytextarea'
                            id="description"
                            name="description"
                            placeholder='Describe your store'
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className='mylabel' htmlFor="items">List a few items and Their Prices</label>
                        <textarea
                            className='mytextarea'
                            id="items"
                            placeholder='e.g. Item1: $10, Item2: $20'
                            name="items"
                            value={formData.items}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className='mybutton' type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default SimulatorProfilesNew;
