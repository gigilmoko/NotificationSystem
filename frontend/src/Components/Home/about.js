import React from 'react'
import '../../assets/css/aboutstyle.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/lightbox.min.css'

import image1 from '../../assets/css/img/about1.jpg'
import Header from '../Layout/header'
import emman from '../../assets/systempics/emman.jpg'

import jis from '../../assets/systempics/jis.jpg'
import aivy from '../../assets/systempics/aivy.jpg'
import von from '../../assets/systempics/von.jpg'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const about = () => {
  return (
    <div style={{ backgroundColor: '#001F3F' }}><>
    <meta charSet="utf-8" />
    <title>Travela - Tourism Website Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
    {/* Google Web Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap"
      rel="stylesheet"
    />
    {/* Icon Font Stylesheet */}
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    {/* Libraries Stylesheet */}
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
    {/* Customized Bootstrap Stylesheet */}
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    {/* Template Stylesheet */}
    <link href="css/style.css" rel="stylesheet" />
    {/* Spinner Start */}
    <Header/>
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div>
              <img
                src={image1}           
                alt=""
                style={{ marginTop: '20px',  width: '1500px', height: '40' }} // Adjust the value as needed
              />
            </div>
          </div>
          <div
            className="col-lg-7"
            
          >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h5 className="section-about-title pe-3" style={{ color: '#F5E8C7' }}>About Us</h5>
            <br/>
            <br/>
            <br/>
            
            <h1 className="mb-4" style={{ color: '#F5E8C7' }}> 
              Welcome to <span>Notificaution</span>
            </h1>
            <p className="mb-4 " style={{ color: '#F5E8C7' }}>
            NotifiCaution is an innovative and comprehensive disaster emergency notification system designed specifically 
            for the Technological University of the Philippines - Taguig Campus. Recognizing the importance of timely and 
            accurate communication during emergencies, we have developed a system that integrates various communication channels to 
            effectively reach all members of the campus community.
            </p>
            <p className="mb-4" style={{ color: '#F5E8C7' }}>
            NotifiCaution is more than just a notification system; it's a commitment to safety, preparedness, and the well-being 
            of the entire TUP-T community. By working together, we can create a safer and more resilient campus environment for everyone.
            </p>
            
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
              Try Out!
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Travel Guide Start */}
    <div className="container-fluid guide py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
          <h5 className="section-title px-3">Notifcaution's</h5>
          <h1 className="mb-0" style={{ color: '#F5E8C7' }}>Development Team</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                <img
                    src={emman}
                    className="img-fluid w-100 rounded-top"
                    style={{ height: '300px' }} // Adjust the height as needed
                    alt="Image"
                    />
                </div>
                <div className="guide-icon rounded-pill p-2">
                      <a
                        className="btn btn-square btn-primary rounded-circle mx-1"
                        href="https://www.facebook.com/KongouDesu.2"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-primary rounded-circle mx-1"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-primary rounded-circle mx-1"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-primary rounded-circle mx-1"
                        href=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4" style = {{backgroundColor: '#323C50'}}>
                <div className="guide-title-inner">
                  <h4 className="mt-3" style = {{ fontSize: '20px', color: '#F5E8C7'}}>Emmanuel Cleto Francisco</h4>
                  <p className="mb-0">Designation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img
                    src={aivy}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                    style={{ height: '300px' }}
                  />
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href="https://www.facebook.com/lbyvia"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4" style = {{backgroundColor: '#323C50'}}>
                <div className="guide-title-inner">
                <h4 className="mt-3" style = {{ fontSize: '20px', color: '#F5E8C7' }}>Alyssandra Ivy Lazaro</h4>
                  <p className="mb-0">Designation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img
                    src={jis}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                    style={{ height: '300px' }}
                  />
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href="https://www.facebook.com/profile.php?id=61550353869763"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4" style = {{backgroundColor: '#323C50'}}>
                <div className="guide-title-inner">
                <h4 className="mt-3" style = {{ fontSize: '20px', color: '#F5E8C7'}} >Jiselle Gregori</h4>
                  <p className="mb-0">Designation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img
                    src={von}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                    style={{ height: '300px' }}
                  />
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href="https://www.facebook.com/miryaniez/"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-square btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4" style = {{backgroundColor: '#323C50'}}>
                <div className="guide-title-inner">
                <h4 className="mt-3" style = {{ fontSize: '20px', color: '#F5E8C7'}} >Von Voltaire Pagsiat</h4>
                  <p className="mb-0">Designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  </div>
  )
}

export default about