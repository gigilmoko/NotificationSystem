import React from 'react';
import '../../assets/css/normalize.css';
import '../../assets/css/vendor.css';
import '../../assets/css/style.css'; 
import LogoImage from '../../assets/systempics/logo3.png';
import { Helmet } from 'react-helmet';

const Header = () => {
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
      <header id="header" className="content-light">
        <div className="header-wrap container py-3">
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
                      <a href="/login" className="text-uppercase item-anchor" style={{ color: '#F5E8C7' }}>
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
