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
            <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin={true} element={<Dashboard />} />} />
            <Route path="/admin/dashboard/adminEarthquake" element={<ProtectedRoute isAdmin={true} element={<AdminEarthquake />} />} />
            <Route path="/admin/dashboard/adminWeather" element={<ProtectedRoute isAdmin={true} element={<AdminWeather />} />} />
            <Route path="/admin/adminChart" element={<ProtectedRoute isAdmin={true} element={<Chart />} />} />
            <Route path="/admin/adminChart1" element={<ProtectedRoute isAdmin={true} element={<Chart1 />} />} />
            <Route path="/admin/adminChart2" element={<ProtectedRoute isAdmin={true} element={<Chart2 />} />} />
            <Route path="/admin/adminChart3" element={<ProtectedRoute isAdmin={true} element={<Chart3 />} />} />
            <Route path="/admin/adminChart4" element={<ProtectedRoute isAdmin={true} element={<Chart4 />} />} />
            <Route path="/admin/adminChart5" element={<ProtectedRoute isAdmin={true} element={<Chart5 />} />} />
            <Route path="/admin/adminWeeklyHeatIndex" element={<ProtectedRoute isAdmin={true} element={<WeeklyHeatIndex />} />} />
            <Route path="/admin/adminhourlyHeatIndex" element={<ProtectedRoute isAdmin={true} element={<HourlyHeatIndex />} />} />

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
