import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout, getUser } from '../../utils/helpers';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminHeader = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  
  const logoutHandler = async () => {
    try {
        await axios.get(`${process.env.REACT_APP_API}/api/logout`);
        setUser({});
        logout(() => navigate('/'));
        toast.success('Logged out', {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        // Reload the window after logging out
        window.location.reload();
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred while logging out');
        }
    }
  };

  useEffect(() => {
    const fetchedUser = getUser();
    console.log(fetchedUser); // Log the fetched user object to inspect its structure
    setUser(fetchedUser);
  }, []);


  return (
    <div><nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0 " style = {{marginLeft: '26px'}}>
    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
      <h2 className="text-primary mb-0">
        <i className="fa fa-user-edit" />
      </h2>
    </a>
    
    
    <div className="navbar-nav align-items-center ms-auto" >
      <div className="nav-item dropdown">
      
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle"
                src="img/user.jpg"
                alt=""
                style={{ width: 40, height: 40 }}
              />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle"
                src="img/user.jpg"
                alt=""
                style={{ width: 40, height: 40 }}
              />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle"
                src="img/user.jpg"
                alt=""
                style={{ width: 40, height: 40 }}
              />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item text-center">
            See all message
          </a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <i className="fa fa-bell me-lg-2" />
          <span className="d-none d-lg-inline-flex">Notificatin</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">Profile updated</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">New user added</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">Password changed</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item text-center">
            See all notifications
          </a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            className="rounded-circle me-lg-2"
            src= {user.avatar}
            alt=""
            style={{ width: 40, height: 40 }}
          />
          <span className="d-none d-lg-inline-flex">{user.name}</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="/profile" className="dropdown-item">
            My Profile
          </a>
          <a href="#" className="dropdown-item">
            Settings
          </a>
          <a href="#" className="dropdown-item" onClick={logoutHandler}>
            Log Out
          </a>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default AdminHeader;