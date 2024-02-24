import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    // Function to fetch earthquake data
    const fetchEarthquakeData = async () => {
      try {
        // Make a GET request to the USGS API
        const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');

        // Extract earthquake data from the response
        const earthquakeData = response.data.features;

        // Update the state with the earthquake data
        setEarthquakes(earthquakeData);
        console.log('All Earthquake Data:', earthquakeData);
      } catch (error) {
        console.error('Error fetching earthquake data:', error.message);
      }
    };

    // Call the function to fetch earthquake data when the component mounts
    fetchEarthquakeData();
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Display earthquake data */}
        <div>
          <h2>Earthquake Data</h2>
          <ul>
            {earthquakes.map((earthquake) => (
              <li key={earthquake.id}>
                Magnitude {earthquake.properties.magnitude} earthquake at {earthquake.properties.place} on {new Date(earthquake.properties.time).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
