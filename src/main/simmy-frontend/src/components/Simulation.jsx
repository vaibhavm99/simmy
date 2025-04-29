import { ChartContainer, LineChart, ChartsLegend } from "@mui/x-charts";
import "./Dashboard.css";
import React, { useState } from 'react';
import logo from '../assets/Simmy Logo.png'; // Adjust the path as needed
import { useSelector } from 'react-redux';
import NavbarComponent from './Navbar';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AudienceContext, FormContext } from './FormContext';
import axios from "axios";
import { Badge } from "react-bootstrap";
import { useEffect } from 'react';

export default function Simulation () {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [displayChart, setDisplayChart] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const user = useSelector((state) => state.user); // Access the global user data
  const [simulationText, setSimulationText] = useState("Processing your audience...");
  
  const { formData, setFormData } = useContext(FormContext);
  const { a1data, setA1data } = useContext(AudienceContext);

  // Update windowWidth on window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust chart size based on windowWidth
  const chartWidth = windowWidth * 0.9; // 90% of the window width
  const chartHeight = windowWidth * 0.4; // 40% of the window width

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  if (user === null) {
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

  const processInput = () => {
    setIsLoading(true);
    setTimeout(() => { setSimulationText("Running the AI model...") }, 10000);
    setTimeout(() => { setSimulationText("Predicting your results...") }, 20000);
    axios.post("https://forecastapi-226173475182.us-central1.run.app/forecast", {
      "budget": 100,
      "min_age": 18,
      "max_age": 45,
      "lower": 500000,
      "upper": 1000000,
      "industry": 0
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
      }
    })
    .then((resp) => {
      var preds = resp.data.preds;
      var values = [...Array(25)].map((_, i) => [Number(preds[i * 15][0]), Number(preds[i * 15][1])]);
      setPredictions(values);
      setDisplayChart(true);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
  }

  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </div>
        </div>
        <div className="navbar-right">
          <a href="/instructions">View Instructions</a>
          <a href="/knowledge-center">Knowledge Center</a>
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown} className="dropdown-toggle">
              {user.name}
            </button>
            <div className="dropdown-menu">
              <a href="/profile">Dashboard</a>
              <a href="/settings">Settings</a>
              <a href="/billing">Campaign History</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </nav>

  <Container>
    {(a1data.length > 0) && 
      <Row>
        <Card style={{ width: '85vw', marginLeft: '2.5vw' }}>
          <Card.Body>
            <Card.Title>Audience A1</Card.Title>
            <Card.Text>
                <Row xs={1} md={2}>
                  <div className="rectangle-container" style={{width: '45%'}}>
                    <p>Store: <Badge>{formData.storeName}</Badge></p>
                    <p>Website: <Badge>{formData.webUrl}</Badge></p>
                    <p>industry: {formData.industry.split(",").map((x) => <Badge>{x}</Badge>)}</p>
                    <p>description: {formData.description}</p>
                    <p>items: {formData.items}</p>
                  </div>
                  <div className="rectangle-container" style={{width: '45%'}}>
                    <p>Age range: <Badge>{a1data[0]}</Badge></p>
                    <p>Gender: <Badge>{a1data[1]}</Badge></p>
                    <div>Tags: {a1data[2].slice(0,10).map((x, _) => <Badge>{x}</Badge>)} </div>
                  </div>
                    <Button style={{width: '97.5%'}} variant="primary" disabled={isLoading} onClick={() => processInput()}>{isLoading ? simulationText : "Simulate!"}</Button>
                </Row>
            </Card.Text>
          </Card.Body>
        </Card>
    <Row style={{marginTop: '5vh'}}>
    { displayChart && <div className="Simulation" style={{width: '80vw', marginLeft: '5vw'}}>
        <LineChart
          xAxis={[{ data: ["Jan 1", "Jan 15", "Feb 1", "Feb 15", "Mar 1", "Mar 15", "Apr 1", "Apr 15", "May 1", "May 15", "June 1", "June 15", "July 1", "July 15", "Aug 1", "Aug 15", "Sep 1", "Sep 15", "Oct 1", "Oct 15", "Nov 1", "Nov 15", "Dec 1", "Dec 15", "Dec 31"], scaleType: "point", label: "Month", tickLabelInterval: ((_, index) => index%2 == 0) }]}
          leftAxis={null}
          series={[
            {
              data: predictions.map((x, _) => x[0]), label: "Reach (millions)",
            },
          ]}
          height={300}
            slotProps={{
                popper: {
                  sx: {
                    width: '400px'
                  },
                },
            }}
        />
      </div>
    }
    </Row>
    <Row>
    { displayChart && <div className="Simulation" style={{width: '80vw', marginLeft: '5vw'}}>
        <LineChart
          xAxis={[{ data: ["Jan 1", "Jan 15", "Feb 1", "Feb 15", "Mar 1", "Mar 15", "Apr 1", "Apr 15", "May 1", "May 15", "June 1", "June 15", "July 1", "July 15", "Aug 1", "Aug 15", "Sep 1", "Sep 15", "Oct 1", "Oct 15", "Nov 1", "Nov 15", "Dec 1", "Dec 15", "Dec 31"], scaleType: "point", label: "Month", tickLabelInterval: ((_, index) => index%2 == 0) }]}
          leftAxis={null}
          series={[
            {
              data: predictions.map((x, _) => x[1]), label: "Impressions (millions)"
            },
          ]}
          height={300}
        slotProps={{
                popper: {
                  sx: {
                    width: '400px'
                  },
                },
            }}

        />
      </div>
    }
    </Row>
    </Row>}
    </Container>
    </div>
  );
}
