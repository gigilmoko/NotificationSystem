// import "./App.css";
import { useState, useEffect } from "react";
import Header from '../Layout/header'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { getToken } from "../../utils/helpers";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState('');

  const getWeather = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${getToken()}` // Make sure you have a function getToken() defined
        }
      };
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/getWeather`, config);
      console.log(data);
      setWeather(data.weathers);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);


  return (
    <div className="App" style={{ backgroundColor: '#001F3F' }}>
      <Header />
      <br />
  
      <h1 style={{ color: '#F5E8C7' }}>Taguig Weather Forecast</h1>
      <br />
      {weather.length > 0 ? (
  <table className="container">
    <thead>
      <tr>
        <th>Date</th>
        <th>Average Temperature (°C)</th>
        <th>Temperature Range (°C)</th>
        <th>Description</th>
        <th>Wind Speed (m/s)</th>
      </tr>
    </thead>
    <tbody>
      {/* Display the weather data */}
      {weather.map((data, index) => {
        // Convert timestamp to Date
        const date = new Date(data.timestamp);
        return (
          <tr key={index}>
            {/* Date */}
            <td>{date.toLocaleDateString()}</td>
            {/* Temperature */}
            <td>{data.temperature}</td>
            <td>{`${data.tempMin} - ${data.tempMax}`}</td>
            {/* Description */}
            <td>{data.weatherDescription}</td>
            {/* Wind Speed */}
            <td>{data.windSpeed}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
) : (
  "Loading..."
)}
      <br/>   
      <br/>   
      <br/>  
      <br/>  
      <br/> 
      
    </div>
    
  );
}

export default Weather;

const styles = `
  @charset "UTF-8";
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

  .App {
    min-height: 100vh;
    /* Your other styles */
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1.42em;
    color:#A7A1AE;
    background-color:#1F2739;
  }

  h1 {
    font-size:3em; 
    font-weight: 300;
    line-height:1em;
    text-align: center;
    color: #F5E8C7;
  }

  h2 {
    font-size:1em; 
    font-weight: 300;
    text-align: center;
    display: block;
    line-height:1em;
    padding-bottom: 2em;
    color: #FB667A;
  }

  h2 a {
    font-weight: 700;
    text-transform: uppercase;
    color: #FB667A;
    text-decoration: none;
  }

  .blue { color: #185875; }
  .yellow { color: #FFF842; }

  .container th h1 {
    font-weight: bold;
    font-size: 1em;
    text-align: left;
    color: #185875;
  }

  .container td {
    font-weight: normal;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
     -moz-box-shadow: 0 2px 2px -2px #0E1119;
          box-shadow: 0 2px 2px -2px #0E1119;
  }

  .container {
    text-align: left;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
  }

  .container td, .container th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left:2%;  
  }

  /* Background-color of the odd rows */
  .container tr:nth-child(odd) {
    background-color: #323C50;
  }

  /* Background-color of the even rows */
  .container tr:nth-child(even) {
    background-color: #2C3446;
  }

  .container th {
    background-color: #ECB159;
  }

  .container td:first-child { color: #F5E8C7; }

  .container tr:hover {
    background-color: #B67352;ffffbf
    -webkit-box-shadow: 0 6px 6px -6px #0E1119;
       -moz-box-shadow: 0 6px 6px -6px #0E1119;
            box-shadow: 0 6px 6px -6px #0E1119;
  }

  .container td:hover {
    background-color: #ffffbf;
    color: black; 
    font-weight: bold;

    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }

  @media (max-width: 800px) {
    .container td:nth-child(4),
    .container th:nth-child(4) { display: none; }
  }

  a {
    text-decoration: none; /* Remove underline from all anchor tags */
    color: inherit; /* Inherit color from parent */
  }
  
  a:hover {
    text-decoration: none; /* Remove underline on hover */
  }
`;

const styleTag = document.createElement('style');
styleTag.type = 'text/css';
if (styleTag.styleSheet) {
  styleTag.styleSheet.cssText = styles;
} else {
  styleTag.appendChild(document.createTextNode(styles));
}
document.head.appendChild(styleTag);
