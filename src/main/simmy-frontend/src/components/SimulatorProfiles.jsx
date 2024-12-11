
import NavbarComponent from './Navbar';
import './SimulatorProfiles.css';
import { useContext, useEffect, useState } from 'react';
import { AudienceContext, FormContext, ProfileUpdated } from './FormContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from "axios";
import { Badge } from 'react-bootstrap';

const SimulatorProfiles = () => {
  const user = useSelector((state) => state.user); // Access the global user data

  
    const navigate = useNavigate();
    useEffect(() => {
        console.log(formData.storeName);
        if(formData.storeName == ''){
            navigate('/simulator-profiles');
        }
    }, []);

    const {formData, setFormData} = useContext(FormContext);
    const {updated, setUpdated} = useContext(ProfileUpdated);
    const {a1data, setA1data} = useContext(AudienceContext);
    const [simulationText, setSimulationText] = useState("Processing your profile...")
    const [requested, setRequested] = useState(false);

    console.log(formData, updated);

    if(updated) {
      setTimeout(() => {setSimulationText("Going through your website...")}, 10000);
      setTimeout(() => {setSimulationText("Creating an audience...")}, 30000);
      if(!requested){
        setRequested(true);
      axios.post("https://newtag-226173475182.us-central1.run.app/process_input", {
        "name": formData["storeName"],
        "link": formData["webUrl"],
        "description": formData["description"],
        "products": formData["items"],
        "industry": "0"
      }, {headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true,
      }})
      .then((resp) => {
        //console.log(resp.data);
        var preds = resp.data;
        setA1data(preds.data);
        console.log(preds);
        setUpdated(false);
        setRequested(false);
      })
      .catch((err) => {
        console.log(err);
        setA1data(["18-35", "female", ["tag1", "tag2"]]);
        setUpdated(false);
        setRequested(false);
      })
      }

    }

    const redirectTo = (path) => {
      navigate(path);
    }
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
            
            {/* Button at the top to navigate to new simulator profile */}
            <div className="top-button-container">
                <h2>Welcome to Simmy Simulator !</h2>
                <button className="navigate-button" onClick={() => redirectTo('/simulator-profiles-new')}>
                    Update Simulator Profile
                </button>
            </div>

            {/* Main container with a styled rectangle and info */}
            <div className="rectangle-container">
                <h3>Audiences</h3>
                <p>This section contains details about the Audiences.</p>
                {(a1data.length > 0) && 
                  <div className="rectangle-container">
                    <p>Age range: {a1data[0]}</p>
                    <p>Demographic: {a1data[1]}</p>
                    <div>Tags: {a1data[2].slice(0, 10).map((x, _) => <Badge>{x}</Badge>)} </div>
                  </div>
                }
              <button className="action-button" onClick={() => redirectTo('/simulation')}>
                  {updated ? simulationText : ((a1data.length > 0) ? "Simulate audience!" : "Update your profile to get an audience!")}
              </button>
            </div>
        </>
    );
}
 
export default SimulatorProfiles;
