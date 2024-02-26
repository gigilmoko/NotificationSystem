import React from 'react'

import '../../assets/css/normalize.css'
import '../../assets/css/vendor.css'
import '../../assets/css/style.css'
import bannerImage from '../../assets/css/img/taguigimage8.jpg';
import Header from '../Layout/header'
import logo from '../../assets/systempics/logo3.png'
import Footer from '../Layout/footer'

const newhome = () => {
  return (
  
 
  < div style = {{backgroundColor: '#001F3F'}}>
  <Header/>
  <section
    id="billboard"
    className="padding-large no-padding-top position-relative"
  >
    <div className="image-holder">
    <a href="/">
  <img
    src={bannerImage}
    alt="banner"
    className="banner-image"
    style={{ marginTop: '-200px', width: '2000px', height: '1000px' }} // Adjust the value as needed
  />
</a>

    </div>
    
    <div className="banner-content content-light style1 text-center col-md-6">
      <h2 className="banner-title" style={{ color: '#F5E8C7', marginTop: '-120px' }}>Emergency Notification System</h2>
      {/* <div className="btn-center">
        <a href="#" className="btn btn-medium btn-light">
          About
        </a>
      </div> */}
    </div>
  </section>
  <section id="company-services">
    <div className="container my-5">
      <div className="row">
        <div className="icon-box-wrapper d-flex flex-wrap justify-content-between">
          <div className="icon-box text-center col-md-6 col-sm-12">
            <div className="content-box border-top border-bottom">
              <div className="icon-box-icon">
                <i className="icon icon-shipping" />
              </div>
              <div className="icon-content">
                <h3 className="no-margin" style = {{color: '#F5E8C7'}}>Mission</h3>
                <p style = {{color: '#F5E8C7'}}>To safeguard the Technological University of the Philippines - Taguig Campus 
                community by providing a prompt, reliable, and efficient IT-based disaster emergency notification system. 
                NotifiCaution aims to empower individuals with timely and accurate information, enabling them to make informed 
                decisions and take immediate action during emergencies.</p>
              </div>
            </div>
          </div>
          {/* <div className="icon-box text-center col-md-3 col-sm-12">
            <div className="content-box border-top border-bottom">
              <div className="icon-box-icon">
                <i className="icon icon-store" />
              </div>
              <div className="icon-content">
                <h3 className="no-margin" style = {{color: '#F5E8C7'}}>Pick up in store</h3>
                <p style = {{color: '#F5E8C7'}}>We have option of pick up in store.</p>
              </div>
            </div>
          </div> */}
          <div className="icon-box text-center col-md-6 col-sm-12">
            <div className="content-box border-top border-bottom">
              <div className="icon-box-icon">
                <i className="icon icon-package" />
              </div>
              <div className="icon-content">
                <h3 className="no-margin" style = {{color: '#F5E8C7'}}>Vision</h3>
                <p style = {{color: '#F5E8C7'}}>To be the leading IT-based disaster emergency notification system within the Philippines,
                 serving as a model for other educational institutions and communities nationwide. We envision a future where NotifiCaution 
                 becomes an indispensable tool for preparedness, prevention, and effective response during emergencies.</p><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  
  
  </div>
  


  )
}

export default newhome