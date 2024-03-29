import React from 'react'
import LogoImage from '../../assets/systempics/logo3.png'
// import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div><nav className="navbar bg-secondary navbar-dark" style={{ height: '100vh', overflowY: 'hidden' }}>
        
        <a href="/">
  <img
    src={LogoImage}
    alt="logo"
    className="brand-image"
    style={{ width: '120px', height: '120px', marginLeft: '50px', marginTop: '-70px' }}
  />
</a>
<div className="navbar-nav w-100" style = {{marginTop: '-200px'}}>
    
<a href="/admin/dashboard" className="nav-item nav-link active" style = {{ color: '#F5E8C7'}}>
<i className="fa fa-tachometer-alt me-2" />
Dashboard
</a>

<a href="/admin/dashboard/adminEarthquake" className="nav-item nav-link" style = {{ color: '#F5E8C7'}}>
<i className="fa fa-th me-2" />
Earthquake
</a>
<a href="/admin/dashboard/adminWeather" className="nav-item nav-link" style = {{ color: '#F5E8C7'}}>
<i className="fa fa-keyboard me-2" />
Weather
</a>
<a href="/admin/dashboard/adminUser" className="nav-item nav-link" style = {{ color: '#F5E8C7'}}>
<i className="fa fa-table me-2" />
Users
</a>
<a href="/admin/dashboard/adminHeatIndex" className="nav-item nav-link" style = {{ color: '#F5E8C7'}}>
<i className="fa fa-chart-bar me-2" />
Heat Index
</a>
<div className="nav-item dropdown" style = {{ color: '#F5E8C7'}}>
<a
  href="#"
  className="nav-link dropdown-toggle"
  data-bs-toggle="dropdown"
  style = {{ color: '#F5E8C7'}}
>
  <i className="far fa-file-alt me-2" />
  Notification
</a>
<div className="dropdown-menu bg-transparent border-0">
  <a href="/admin/dashboard/adminHeatReport" className="dropdown-item" style = {{ color: '#F5E8C7'}}>
    Heat Index
  </a>
  <a href="signup.html" className="dropdown-item" style = {{ color: '#F5E8C7'}}>
    Typhoon
  </a>
  <a href="404.html" className="dropdown-item" style = {{ color: '#F5E8C7'}}>
    Earthquake
  </a>
</div>
</div>
</div>
</nav></div>
  )
}

export default AdminSidebar;