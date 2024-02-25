import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EarthquakeSite from './Components/Earthquake/earthquake';
import WeatherSite from './Components/Weather/weather';
import ProtectedRoute from "./Components/Route/ProtectedRoute";
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
          <Route path="admin/dashboard"  element={
              <ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            } />
          <Route path="admin/dashboard/adminEarthquake" element={
              <ProtectedRoute isAdmin={true}>
                <AdminEarthquake />
              </ProtectedRoute>} />
          <Route path="admin/dashboard/adminWeather" element={
              <ProtectedRoute isAdmin={true}>
                <AdminWeather />
              </ProtectedRoute>} />
          <Route path="admin/adminChart" element={
              <ProtectedRoute isAdmin={true}>
                <Chart />
              </ProtectedRoute>} />
          <Route path="admin/adminChart1" element={
              <ProtectedRoute isAdmin={true}>
                <Chart1 />
              </ProtectedRoute>} />
          <Route path="admin/adminChart2" element={
              <ProtectedRoute isAdmin={true}>
                <Chart2 />
              </ProtectedRoute>} />
          <Route path="admin/adminChart3" element={
              <ProtectedRoute isAdmin={true}>
                <Chart3 />
              </ProtectedRoute>} />
          <Route path="admin/adminChart4" element={
              <ProtectedRoute isAdmin={true}>
                <Chart4 />
              </ProtectedRoute>} />
          <Route path="admin/adminChart5" element={
              <ProtectedRoute isAdmin={true}>
                <Chart5 />
              </ProtectedRoute>} />

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
