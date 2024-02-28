import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import { toast } from 'react-toastify';
import Header from '../Layout/header'
import Footer from '../Layout/footer'
import '../../assets/css/updateprofile.css'
import { getToken } from '../../utils/helpers';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const getProfile = async () => {
    const config = {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    };
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/me`, config);
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
       
      });
      setLoading(true);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className = "full-width-container" style={{ backgroundColor: '#001F3F' }}>
    <div className="container">
      <Header/>
      <div className="main-body" style = {{ width: '1200px', height: '800px'}}>
        <div className="row gutters-sm" >
        
         <div className="container d-flex justify-content-center" style = {{marginLeft: '44px', marginTop: '55px'}}>
  <div className="col-md-6 mb-3">
    <div className="card" style={{ backgroundColor: '#1F2739' }}>
      <br />
      <h1 className="mb-3" style={{ fontSize: '2em', color: '#F5E8C7', fontFamily: 'Poppins, sans-serif' }}>User Info</h1>
      <div className="card-body">
  <div className="d-flex flex-column align-items-center text-center">
    {user.avatar && (
      <figure className="avatar avatar-nav">
        <img
          src={user.avatar}
          alt={`${user.name}'s Avatar`}
          className="rounded-circle"
          style={{ height: '200px', width: '200px' }}
        />
      </figure>
    )}
    <div className="card-body" style={{ height: '220px', width: '600px' }}>
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0" style={{ color: '#F5E8C7' }}>Full Name</h6>
        </div>
        <div className="col-sm-9 text-secondary" style={{ color: '#F5E8C7' }}>
        <h6 className="mb-0" style={{ color: 'white' }}>{user.name}</h6>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0" style={{ color: '#F5E8C7' }}>Email</h6>
        </div>
        <div className="col-sm-9 text-secondary" style={{ color: '#F5E8C7' }}>
        <h6 className="mb-0" style={{ color: 'white' }}>{user.email}</h6>
        </div>
      </div>
      {/* Buttons */}
      <div className="row mt-5">
        <div className="col-sm-6">
        <Link to="/profile/update"><button className="btn_3" style={{ width: '100%' }}>Edit Profile</button></Link>
        </div>
        <div className="col-sm-6">
        <Link to="/password/update"><button className="btn_3" style={{ width: '100%' }}>Change Password</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</div>

          
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
    
  );
};

export default Profile;
