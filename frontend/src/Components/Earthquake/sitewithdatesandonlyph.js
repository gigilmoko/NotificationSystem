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
        const response = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&endtime=2024-02-05');
  
        // Extract earthquake data from the response
        const allEarthquakes = response.data.features;
  
        // Filter earthquakes to include only those in the Philippines
        const philippinesEarthquakes = allEarthquakes.filter((earthquake) => {
          // Check if the 'place' property is not null before applying toLowerCase
          return earthquake.properties.place && earthquake.properties.place.toLowerCase().includes('philippines');
        });
  
        // Log the earthquake data to the console
        console.log('Earthquake Data:', philippinesEarthquakes);
  
        // Update the state with the filtered earthquake data
        setEarthquakes(philippinesEarthquakes);
      } catch (error) {
        console.error('Error fetching earthquake data:', error.message);
      }
    };
  
    // Call the function to fetch earthquake data when the component mounts
    fetchEarthquakeData();
  }, []); 
  
 // ...

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
              Magnitude {earthquake.properties.mag} earthquake at{' '}
              <a
                href={earthquake.properties.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {earthquake.properties.place}
              </a>{' '}
              on{' '}
              {new Date(earthquake.properties.time).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </header>
  </div>
);

}

export default App;
