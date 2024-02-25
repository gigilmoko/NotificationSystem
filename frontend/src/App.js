import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
// import './App.css';
import { BASE_URL } from './apiConfig'; // Import the BASE_URL
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import EarthquakeSite from './Components/Earthquake/earthquake'
import WeatherSite from './Components/Weather/weather'
import Login from './Components/User/Login'
import Register from './Components/User/Register'
import NewHome from './Components/Home/newhome'
import About from './Components/Home/about'
import Dashboard from './Components/Admin/Dashboard'
import AdminEarthquake from './Components/Admin/Earthquake';
import AdminWeather from './Components/Admin/Weather';
import Chart from './Components/Charts/DayForecast';
import Chart1 from './Components/Charts/Chart1';
import Chart2 from './Components/Charts/Chart2';
import Chart3 from './Components/Charts/Chart3';
import Chart4 from './Components/Charts/Chart4';
import Chart5 from './Components/Charts/Chart5';
import WeeklyHeatIndex from './Components/Charts/WeeklyHeatIndex';
import HourlyHeatIndex from './Components/Charts/HourlyHeatIndex';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {/* ----Dashboard---- */}
            <Route path = "/dashboard" element = {<Dashboard/> }/>
            <Route path = "/dashboard/adminEarthquake" element = {<AdminEarthquake/> }/>
            <Route path = "/dashboard/adminWeather" element = {<AdminWeather/> }/>
            <Route path="/adminChart" element={<Chart />} />
            <Route path="/adminChart1" element={<Chart1 />} />
            <Route path="/adminChart2" element={<Chart2 />} />
            <Route path="/adminChart3" element={<Chart3 />} />
            <Route path="/adminChart4" element={<Chart4 />} />
            <Route path="/adminChart5" element={<Chart5 />} />
            <Route path="/adminWeeklyHeatIndex" element={<WeeklyHeatIndex />} />
            <Route path="/adminhourlyHeatIndex" element={<HourlyHeatIndex />} />

            {/* ----Home---- */}
            <Route path = "/" element = { <NewHome/> } /> 
            <Route path ="/earthquake" element = {<EarthquakeSite/>} />
            <Route path ="/weather" element = {<WeatherSite/>} />
            <Route path = "/about" element = { <About/> } /> 

            {/* ----User---- */}
            <Route path = "/login" element = { <Login/> } /> 
            <Route path = "/register" element = { <Register/> } /> 

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
