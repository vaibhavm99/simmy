import React, { useState } from 'react';
import './SurveyForm.css'; // External CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks


const SurveyForm = () => {
  const [step, setStep] = useState(1); // Track the current step
  const navigate = useNavigate();
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    question3: '',
  });
  const [errors, setErrors] = useState({
    question1: false,
    question2: false,
    question3: false,
  });
  const dispatch = useDispatch(); // Dispatch to trigger actions
  const user = useSelector((state) => state.user); // Access the user from the Redux store

  const handleNext = () => {
    if ((step === 1 && responses.question1) || 
        (step === 2 && responses.question2) || 
        (step === 3 && responses.question3)) {
      setErrors({ ...errors, [`question${step}`]: false });
      setStep(step + 1);
    } else {
      setErrors({ ...errors, [`question${step}`]: true });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    setResponses({
      ...responses,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user selects an option
    if (e.target.value) {
      setErrors({
        ...errors,
        [e.target.name]: false,
      });
    }
  };
  
    function sendtoDB() {
      // Send the survey data to the backend
      let port = process.env.BACKEND_PORT;
      fetch(`http://localhost:${8080}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.name,
          username: user.username,
          password: user.password,
          q1: responses.question1,
          q2: responses.question2,
          q3: responses.question3,
        })
    })
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (responses.question3) {
      console.log('Survey Responses:', responses);
      // Dispatch an action to update the global state with the survey data
      dispatch({
        type: 'SET_SURVEY',
        payload: responses, // This sets the survey data in the global state
      });
      console.log('User data:', user);
      sendtoDB();
      navigate('/options');
    } else {
      setErrors({ ...errors, question3: true });
    }
  };

  return (
    <div className="survey-container">
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div className={`question-step ${step === 1 ? 'active' : ''}`}>
          <label><h1>What role do you play in this company?</h1> <br /> <p>Description</p></label>
          {/* Radio buttons for question 1 */}
          <div>
            <label>
              <input
                type="radio"
                name="question1"
                value="Owner"
                checked={responses.question1 === 'Owner'}
                onChange={handleChange}
                required
              />
              Owner
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="question1"
                value="Social Media Manager"
                checked={responses.question1 === 'Social Media Manager'}
                onChange={handleChange}
                required
              />
              Social Media Manager
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="question1"
                value="Media Buyer"
                checked={responses.question1 === 'Media Buyer'}
                onChange={handleChange}
                required
              />
              Media Buyer
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="question1"
                value="Intern/Assistant"
                checked={responses.question1 === 'Intern/Assistant'}
                onChange={handleChange}
                required
              />
              Intern/Assistant
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="question1"
                value="Other"
                checked={responses.question1 === 'Other'}
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>
          {errors.question1 && <p className="error-message" style={{ color: 'red' }}>This question is required.</p>}
          <button type="button" className="btn next bttn" onClick={handleNext}>
            Next
          </button>
        </div>

        {/* Similar structure for Question 2 and Question 3 */}
        {/* ... Rest of your code remains unchanged ... */}
        <div className={`question-step ${step === 2 ? 'active' : ''}`}>
  <label><h1>How many years of experience do you have managing ads on Meta? And I don't mean boosting.</h1> <br /> <p>Description</p></label>
  <div>
    <label>
      <input
        type="radio"
        name="question2"
        value="1 or less"
        checked={responses.question2 === '1 or less'}
        onChange={handleChange}
        required
      />
      1 or less
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question2"
        value="2-5"
        checked={responses.question2 === '2-5'}
        onChange={handleChange}
        required
      />
      2-5
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question2"
        value="6-9"
        checked={responses.question2 === '6-9'}
        onChange={handleChange}
        required
      />
      6-9
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question2"
        value="10+"
        checked={responses.question2 === '10+'}
        onChange={handleChange}
        required
      />
      10+
    </label>
  </div>
  {errors.question2 && <p className="error-message" style={{ color: 'red' }}>This question is required.</p>}
  <button type="button" className="btn back" onClick={handleBack}>
    Back
  </button>
  <button type="button" className="btn next bttn" onClick={handleNext}>
    Next
  </button>
</div>

<div className={`question-step ${step === 3 ? 'active' : ''}`}>
  <label><h1>What does your company sell?</h1></label>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Fashion & Apparel"
        checked={responses.question3 === 'Fashion & Apparel'}
        onChange={handleChange}
        required
      />
      Fashion & Apparel
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Beauty & Personal Care"
        checked={responses.question3 === 'Beauty & Personal Care'}
        onChange={handleChange}
        required
      />
      Beauty & Personal Care
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Entertainment"
        checked={responses.question3 === 'Entertainment'}
        onChange={handleChange}
        required
      />
      Entertainment
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Household Goods"
        checked={responses.question3 === 'Household Goods'}
        onChange={handleChange}
        required
      />
      Household Goods
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Electronics"
        checked={responses.question3 === 'Electronics'}
        onChange={handleChange}
        required
      />
      Electronics
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Digital Products"
        checked={responses.question3 === 'Digital Products'}
        onChange={handleChange}
        required
      />
      Digital Products
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Food & Beverages"
        checked={responses.question3 === 'Food & Beverages'}
        onChange={handleChange}
        required
      />
      Food & Beverages
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Professional Services"
        checked={responses.question3 === 'Professional Services'}
        onChange={handleChange}
        required
      />
      Professional Services
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="question3"
        value="Other"
        checked={responses.question3 === 'Other'}
        onChange={handleChange}
        required
      />
      Other
    </label>
  </div>
  {errors.question3 && <p className="error-message" style={{ color: 'red' }}>This question is required.</p>}
  <button type="button" className="btn back" onClick={handleBack}>
    Back
  </button>
  <button type="submit" className="btn submit bttn" onClick={handleSubmit}>
    Submit
  </button>
</div>

        {/* Timeline Progress Bar */}
        <div className="timeline">
          <div className={`timeline-step ${step >= 1 ? 'completed' : ''}`}>1</div>
          <div className={`timeline-bar ${step > 1 ? 'completed' : ''}`}></div>
          <div className={`timeline-step ${step >= 2 ? 'completed' : ''}`}>2</div>
          <div className={`timeline-bar ${step > 2 ? 'completed' : ''}`}></div>
          <div className={`timeline-step ${step >= 3 ? 'completed' : ''}`}>3</div>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;