import React from 'react'
import '../../assets/css/normalize.css'
import '../../assets/css/vendor.css'
import '../../assets/css/style.css'

const footer = () => {
  return (
    <div><footer id="footer" className="overflow-hidden">
    <div className="container mt-5">
      <div className="row">
        <div className="footer-top-area">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-menu menu-001">
                {/* <img src={logo} alt="logo" style = {{ width: '100px', height: '100px'}}/> */}
                <p style = {{color: '#F5E8C7'}}>
                  Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit
                  hendrerit. Gravida massa volutpat aenean odio erat nullam
                  fringilla.
                </p>
                
                <div className="social-links">
                  <ul className="d-flex list-unstyled">
                    <li>
                      <a href="#">
                        <i className="icon icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-instagram1" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-menu menu-002">
                <h5 className="widget-title" style={{ color: '#F5E8C7' }}>Quick Links</h5>
                <ul className="menu-list list-unstyled text-uppercase">
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>About</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Shop</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Blogs</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-menu text-uppercase menu-003">
                <h5 className="widget-title">Help &amp; Info</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Track Your Order</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Returns Policies</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Shipping + Delivery</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Contact Us</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" style = {{color: '#F5E8C7'}}>Faqs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-menu contact-item menu-004">
                <h5 className="widget-title" style = {{color: '#F5E8C7'}}>Contact Us</h5>
                <p style = {{color: '#F5E8C7'}}>
                  Do you have any queries or suggestions?{" "}
                  <a href="mailto:" style = {{color: '#F5E8C7'}}>yourinfo@gmail.com</a>
                </p>
                <p style = {{color: '#F5E8C7'}}>
                  If you need support? Just give us a call.{" "}
                  <a href="" style = {{color: '#F5E8C7'}}>+55 111 222 333 44</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </footer></div>
  )
}

export default footer