import React from 'react'
import LogoImage from '../../assets/systempics/logo3.png'
// import { Link } from 'react-router-dom'

const adminsidebar = () => {
  return (
    <div><nav className="navbar bg-secondary navbar-dark" style={{ height: '96vh' }}>
        
    <img
      src={LogoImage}
      alt="logo"
      className="brand-image"
      style={{ width: '80px', height: '80px', marginLeft: '70px', marginTop: '-40px' }} // Adjust the width and height as needed
    />
<div className="navbar-nav w-100" style = {{marginTop: '-100px'}}>
    
<a href="index.html" className="nav-item nav-link active">
<i className="fa fa-tachometer-alt me-2" />
Dashboard
</a>

<a href="/dashboard/adminEarthquake" className="nav-item nav-link">
<i className="fa fa-th me-2" />
Earthquake
</a>
<a href="/dashboard/adminWeather" className="nav-item nav-link">
<i className="fa fa-keyboard me-2" />
Weather
</a>
<a href="table.html" className="nav-item nav-link">
<i className="fa fa-table me-2" />
Tables
</a>
<a href="chart.html" className="nav-item nav-link">
<i className="fa fa-chart-bar me-2" />
Charts
</a>
<div className="nav-item dropdown">
<a
  href="#"
  className="nav-link dropdown-toggle"
  data-bs-toggle="dropdown"
>
  <i className="far fa-file-alt me-2" />
  Pages
</a>
<div className="dropdown-menu bg-transparent border-0">
  <a href="signin.html" className="dropdown-item">
    Sign In
  </a>
  <a href="signup.html" className="dropdown-item">
    Sign Up
  </a>
  <a href="404.html" className="dropdown-item">
    404 Error
  </a>
  <a href="blank.html" className="dropdown-item">
    Blank Page
  </a>
 
  
</div>
</div>
</div>
</nav></div>
  )
}

export default adminsidebar;