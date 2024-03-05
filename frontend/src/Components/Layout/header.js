import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/normalize.css';
import '../../assets/css/vendor.css';
import '../../assets/css/style.css'; 
import LogoImage from '../../assets/systempics/logo3.png';
import { Helmet } from 'react-helmet';
import { logout, getUser } from '../../utils/helpers';
// import '../../assets/css/headerstyle.css'




const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const [user, setUser] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);

 

  const logoutHandler = async () => {
    try {
        await axios.get(`${process.env.REACT_APP_API}/api/logout`);
        setUser({});
        logout(() => navigate('/'));
        // Reload the window after logging out
        window.location.reload();
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            console.error(error.response.data.message);
        } else {
            console.error('An error occurred while logging out');
        }
    }
};



useEffect(() => {
  const fetchedUser = getUser();
  console.log(fetchedUser); // Log the fetched user object to inspect its structure
  setUser(fetchedUser);
}, []);


  return (
    <div>
      <Helmet>
        <title>Notification</title>
        <meta charSet="utf-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <style>
        {`
          .item-anchor {
            text-decoration: none; 
          }
        `}
      </style>
      <div className = "header-container" style = {{}}> 
      <header id="header" className="content-light">
        <div className="header-wrap container py-3" style = {{height: '300px'}}>
          <div className="row align-items-center">
            <div className="col-md-5 col-sm-2">
              <nav className="navbar">
                <ul className="menu-list list-unstyled d-flex m-0">
                  <li className="menu-itemhome1">
                    <a href="/" className="text-uppercase item-anchor" style={{ color: '#F5E8C7' }}>
                      Home
                    </a>
                  </li>
                  <li className="menu-itemhome1">
                    <a href="/about" className="text-uppercase item-anchor" style={{ color: '#F5E8C7' }}>
                      About
                    </a>
                  </li>
                  <li className="menu-itemhome1">
                    <a href="/notification" className="text-uppercase item-anchor" style={{ color: '#F5E8C7' }}>
                      Notification
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 col-sm-4 brand-block">
              <div className="main-logo text-lg-center">
                <a href="./">
                  <img
                    src={LogoImage}
                    alt="logo"
                    className="brand-image"
                    style={{ width: '150px', height: '150px' }} // Adjust the width and height as needed
                  />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-sm-4">
              <nav className="navbar justify-content-end">
                <div className="user-items">
                  <ul className="list-unstyled content-light d-flex align-items-center m-0">
                    <li>
                      <a href="/earthquake" className="text-uppercase item-anchor" style={{ color: '#F5E8C7' }}>
                        Earthquake
                      </a>
                    </li>
                    <li>
                      <a href="/weather" className="text-uppercase item-anchor" style={{ color: '#F5E8C7' }}>
                        Weather
                      </a>
                    </li>
                    <li>
                    {user ? (
                    <div className="menu-itemhome1 dropdown">
                      <button
                        className="btn text-white mr-4"
                        type="button"
                        id="dropDownMenuButton"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ color: '#b08ead', backgroundColor: 'transparent', border: 'none' }}
                      >
                        {user.avatar && ( // Check if avatar URL is present
                          <figure className="avatar avatar-nav">
                            <img
                              src={user.avatar} // Use user.avatar directly as the src attribute
                              alt={`${user.name}'s Avatar`}
                              className="rounded-circle"
                              style = {{ height: '50px', width: '50px'}}
                            />
                          </figure>
                          
                        )}
                        
                        <label style={{ color: '#F5E8C7' }}>{user && user.name}</label>
                      </button>

                        <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropDownMenuButton"
                      style={{ maxHeight: '300px', overflowY: 'auto' }} // Adjusted maxHeight and overflowY
                    >
                      {user && user.role === 'admin' && (
                        <Link
                          className="dropdown-item"
                          to="/admin/dashboard"
                          style = {{color: '#F5E8C7'}}
                        >
                          Dashboard
                        </Link>
                      )}
                    
                      <Link className="dropdown-item"  style = {{color: '#F5E8C7'}} to="/profile">
                        Profile
                      </Link>
                      <Link
                        className="dropdown-item text-danger"
                      
                        onClick={logoutHandler}
                        to="/"
                        data-toggle="modal"
                        data-target="#logoutModal"

                      >
                        Logout
                      </Link>
                    </div>
                    </div>
                    ) : (
                      <a href="/login" className="text-uppercase item-anchor" style={{ color: '#F5E8C7' }}>
                      Login
                    </a>
                    )}


                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
   
    </div>
    
  );
};

export default Header;
