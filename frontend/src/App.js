import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
// import './App.css';
import { BASE_URL } from './apiConfig'; // Import the BASE_URL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EarthquakeSite from './Components/Earthquake/earthquake'
import WeatherSite from './Components/Weather/weather'
// import Homepage from './home'
import Login from './Components/User/Login'
import Register from './Components/User/Register'
import NewHome from './Components/Home/newhome'
import About from './Components/Home/about'
import Dashboard from './Components/Admin/Dashboard'
import AdminEarthquake from './Components/Admin/Earthquake';
import AdminWeather from './Components/Admin/Weather';
// import Admin from './Components/Layout/Admin'
// import Table from './table'

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path = "/dashboard" element = {<Dashboard/> }/>
          <Route path = "/dashboard/adminEarthquake" element = {<AdminEarthquake/> }/>
          <Route path = "/dashboard/adminWeather" element = {<AdminWeather/> }/>




          <Route path ="/earthquake" element = {<EarthquakeSite/>} />
          <Route path ="/weather" element = {<WeatherSite/>} />
          {/* <Route path = "/" element = { <Homepage/> } />  */}
          <Route path = "/" element = { <NewHome/> } /> 
          <Route path = "/about" element = { <About/> } /> 
          <Route path = "/login" element = { <Login/> } /> 
          <Route path = "/register" element = { <Register/> } /> 
          {/* <Route path ="/table" element = {<Table/>} /> */}
          
          {/* <Route path = "/admin" element = {<Admin/> }/> */}

          </Routes>
        </Router>
    </div>
  );
}

export default App;
