import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EarthquakeSite from './Components/Earthquake/earthquake';
import WeatherSite from './Components/Weather/weather';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import NewHome from './Components/Home/newhome';
import About from './Components/Home/about';
import Dashboard from './Components/Admin/Dashboard';
import AdminEarthquake from './Components/Admin/Earthquake';
import AdminWeather from './Components/Admin/Weather';
import Chart from './Components/Charts/DayForecast';
import Chart1 from './Components/Charts/Chart1';
import Chart2 from './Components/Charts/Chart2';
import Chart3 from './Components/Charts/Chart3';
import Chart4 from './Components/Charts/Chart4';
import Chart5 from './Components/Charts/Chart5';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/adminEarthquake" element={<AdminEarthquake />} />
          <Route path="/dashboard/adminWeather" element={<AdminWeather />} />
          <Route path="/adminChart" element={<Chart />} />
          <Route path="/adminChart1" element={<Chart1 />} />
          <Route path="/adminChart2" element={<Chart2 />} />
          <Route path="/adminChart3" element={<Chart3 />} />
          <Route path="/adminChart4" element={<Chart4 />} />
          <Route path="/adminChart5" element={<Chart5 />} />

          <Route path="/earthquake" element={<EarthquakeSite />} />
          <Route path="/weather" element={<WeatherSite />} />
          <Route path="/" element={<NewHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
