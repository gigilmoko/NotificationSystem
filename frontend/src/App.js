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
import Profile from './Components/User/Profile'
import Dashboard from './Components/Admin/Dashboard'
import AdminEarthquake from './Components/Admin/Earthquake';
import AdminWeather from './Components/Admin/Weather';
import WeatherApp from './Components/Charts/WeatherApp';
import Chart1 from './Components/Charts/Chart1';
import Chart2 from './Components/Charts/Chart2';
import Chart3 from './Components/Charts/Chart3';
import Chart4 from './Components/Charts/Chart4';
import Chart5 from './Components/Charts/Chart5';
import WeeklyHeatIndex from './Components/Charts/WeeklyHeatIndex';
import HourlyHeatIndex from './Components/Charts/HourlyHeatIndex';
import ProtectedRoute from './Components/Route/ProtectedRoute';
import EarthquakeChart from './Components/Charts/Earthquake';
import AdminUsers from './Components/Admin/Users';
import WeatherUi from './Components/Weather/WeatherUi'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path = "/login" element = { <Login/> } /> 
            <Route path = "/register" element = { <Register/> } /> 
            <Route path = "/profile" element = { <Profile/> } />

            
            <Route path ="/admin/dashboard" element = {<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute> }/>
            <Route path="/admin/dashboard/adminEarthquake" element = { <ProtectedRoute isAdmin={true}><AdminEarthquake /></ProtectedRoute>}/>
            <Route path="/admin/dashboard/adminWeather" element={ <ProtectedRoute isAdmin={true}> <AdminWeather /> </ProtectedRoute>}/>
            <Route path="/admin/dashboard/adminUser" element={ <ProtectedRoute isAdmin={true}> <AdminUsers /> </ProtectedRoute>}/>
            <Route path="/admin/adminChart1" element={ <ProtectedRoute isAdmin={true}> <Chart1 /> </ProtectedRoute> }  />
            <Route path="/admin/adminChart2" element={ <ProtectedRoute isAdmin={true}> <Chart2 /> </ProtectedRoute> } />
            <Route path="/admin/adminChart3" element={ <ProtectedRoute isAdmin={true}> <Chart3 /> </ProtectedRoute> } />
            <Route path="/admin/adminChart4" element={ <ProtectedRoute isAdmin={true}> <Chart4 /> </ProtectedRoute> } />
            <Route path="/admin/adminChart5" element={ <ProtectedRoute isAdmin={true}> <Chart5 /> </ProtectedRoute> } />
            <Route path="/admin/adminhourlyHeatIndex" element={ <ProtectedRoute isAdmin={true}> <HourlyHeatIndex /> </ProtectedRoute> }/>
            <Route path="/admin/adminWeeklyHeatIndex" element={ <ProtectedRoute isAdmin={true}> <WeeklyHeatIndex /> </ProtectedRoute>}/>

            <Route path ="/adminEarthquakeChart" element = {<EarthquakeChart/>} />
            <Route path ="/userForecast" element = {<WeatherApp/>} />
            

            {/* ----Home---- */}
            <Route path = "/" element = { <NewHome/> } /> 
            <Route path ="/earthquake" element = {<EarthquakeSite/>} />
            <Route path ="/weather" element = {<WeatherSite/>} />
            <Route path ="/weatherUi" element = {<WeatherUi/>} />
            <Route path = "/about" element = { <About/> } /> 

            {/* ----User---- */}
            <Route path = "/login" element = { <Login/> } /> 
            <Route path = "/register" element = { <Register/> } /> 
            <Route path = "/profile" element = { <Profile/> } />

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
