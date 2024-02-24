import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import 'jquery';
import 'popper.js';
import './assets/css/main.css';
import './assets/css/linearicons.css';
import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.css';
import './assets/css/magnific-popup.css';
import './assets/css/animate.min.css';
import './assets/css/owl.carousel.css';
// import taguigImage3 from './assets/img/taguigimage3.jpeg';
// import taguigImage4 from './assets/img/taguigimage4.jpg';
// import taguigImage5 from './assets/img/taguig5.jpg';

// import './assets/js/vendor/jquery-2.2.4.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js';
// import './assets/js/vendor/bootstrap.min.js';
// import './assets/js/jquery.ajaxchimp.min.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/owl.carousel.min.js';
// import './assets/js/jquery.sticky.js';
// import './assets/js/slick.js';
// import './assets/js/jquery.counterup.min.js';
// import './assets/js/waypoints.min.js';
// import './assets/js/main.js';

const Home = () => {
  return (
    <div>
      <section className="banner-area" id="home">
        <header className="default-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                <img src="img/logo2.png" alt="" style={{ maxWidth: '300px', height: '125px' }} />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-white lnr lnr-menu"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>									
                  <li><a href="#secvice">Weather Forecast</a></li>
                  <li><a href="#gallery">Earthquake</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </section>

      <section className="default-banner active-blog-slider">
        <div className="item-slider relative" style={{ backgroundImage: `url(img/taguigimage4.jpg)`, backgroundSize: "cover" }}>
          <div className="overlay" style={{ background: "rgba(0,0,0,.3)" }}></div>
          <div className="container">
            <div className="row fullscreen justify-content-center align-items-center">
              <div className="col-md-10 col-12">
                <div className="banner-content text-center">
                  <h4 className="text-white mb-20 text-uppercase">Welcome to our site</h4>
                  <h1 className="text-uppercase text-white">Notificaution</h1>
                  <p className="text-white">Disasters, by their very nature, are unpredictable. In the face of natural disasters and unforeseen emergencies, accurate information is what everyone needs. </p>
                  <a href="#" className="text-uppercase header-btn">Discover Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Include other slider items here */}
      </section>
	  <section className="default-banner active-blog-slider">
        <div className="item-slider relative" style={{ backgroundImage: `url(img/taguigimage4.jpg)`, backgroundSize: "cover" }}>
          <div className="overlay" style={{ background: "rgba(0,0,0,.3)" }}></div>
          <div className="container">
            <div className="row fullscreen justify-content-center align-items-center">
              <div className="col-md-10 col-12">
                <div className="banner-content text-center">
                  <h4 className="text-white mb-20 text-uppercase">Welcome to our site</h4>
                  <h1 className="text-uppercase text-white">Notificaution</h1>
                  <p className="text-white">Disasters, by their very nature, are unpredictable. In the face of natural disasters and unforeseen emergencies, accurate information is what everyone needs. </p>
                  <a href="#" className="text-uppercase header-btn">Discover Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Include other slider items here */}
      </section>
	  <section className="default-banner active-blog-slider">
        <div className="item-slider relative" style={{ backgroundImage: `url(img/taguigimage4.jpg)`, backgroundSize: "cover" }}>
          <div className="overlay" style={{ background: "rgba(0,0,0,.3)" }}></div>
          <div className="container">
            <div className="row fullscreen justify-content-center align-items-center">
              <div className="col-md-10 col-12">
                <div className="banner-content text-center">
                  <h4 className="text-white mb-20 text-uppercase">Welcome to our site</h4>
                  <h1 className="text-uppercase text-white">Notificaution</h1>
                  <p className="text-white">Disasters, by their very nature, are unpredictable. In the face of natural disasters and unforeseen emergencies, accurate information is what everyone needs. </p>
                  <a href="#" className="text-uppercase header-btn">Discover Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Include other slider items here */}
      </section>

      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  We are Bachelor of Science in Information Technology students of Techonological University of the Philippines creating a system that provides notification for the residents of Taguig City.
                </p>
                
                <p className="footer-text">Copyright &copy;{new Date().getFullYear()} All rights reserved. </p>
                
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                
              </div>
            </div>						
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-behance"></i></a>
                </div>
              </div>
            </div>							
          </div>
        </div>
      </footer>
	  <script src="js/vendor/jquery-2.2.4.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
			<script src="js/vendor/bootstrap.min.js"></script>
			<script src="js/jquery.ajaxchimp.min.js"></script>
			<script src="js/jquery.magnific-popup.min.js"></script>	
			<script src="js/owl.carousel.min.js"></script>			
			<script src="js/jquery.sticky.js"></script>
			<script src="js/slick.js"></script>
			<script src="js/jquery.counterup.min.js"></script>
			<script src="js/waypoints.min.js"></script>		
			<script src="js/main.js"></script>	
	
    </div>
  );
}

export default Home;
