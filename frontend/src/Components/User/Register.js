import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../Layout/header.js';
import Footer from '../Layout/footer.js';
import '../../assets/css/userstyle.css';
import '../../assets/css/flaticon.css';
import '../../assets/css/themify-icons.css';

export default function Register() {

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, avatar: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, password, avatar } = formData;
  
    // Log the email and password provided by the user
    console.log("Email:", email);
    console.log("Password:", password);
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      formDataToSend.append("password", password);
      formDataToSend.append("avatar", avatar);
  
      await axios.post(
        // `${process.env.REACT_APP_API}/api/v1/register`,
        'http://localhost:4001/api/register',
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("user registered");
      navigate("/");
    } catch (error) {
      console.error("registration failed", error);
    }
  };

  return (
    <div className="full-width-container" style={{ backgroundColor: '#001F3F' }}>
      <div className="custom-container-user">
        <Header />
        <div className="row wrapper">
          <div className="col-10 col-lg-5 mx-auto" style={{ backgroundColor: '#323C50', marginTop: '50px', height: '670px', width: '580px' }}>
            <form className="shadow-lg" onSubmit={handleSubmit} >
              <div className="text-center">
                <h1 className="mb-3" style={{ fontSize: '2.5em', marginTop: '10px' }}>
                  Register
                </h1>
                <div className="avatar-container">
                  {avatarPreview ? (
                    <img
                      className="rounded-circle"
                      src={avatarPreview}
                      alt={`Avatar Preview`}
                      style={{ width: '120px', height: '120px' }}
                    />
                  ) : (
                    <p>No avatars to display</p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <h1 className="mb-3" style={{ fontSize: '1.5em', marginTop: '5px' }}>
                  Name
                </h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Insert Name Here"
                  style={{
                    width: '500px',
                    height: '40px',
                    margin: '0 auto',
                    display: 'block',
                    color: isFocused ? 'black' : '#F5E8C7',
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <h1 className="mb-3" style={{ fontSize: '1.5em', marginTop: '5px' }}>
                  Email
                </h1>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Insert Email Here"
                  style={{
                    width: '500px',
                    height: '40px',
                    margin: '0 auto',
                    display: 'block',
                    color: isFocused ? 'black' : '#F5E8C7',
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <h1 className="mb-3" style={{ fontSize: '1.5em', marginTop: '5px' }}>
                  Password
                </h1>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Insert Password Here"
                  style={{
                    width: '500px',
                    height: '40px',
                    margin: '0 auto',
                    display: 'block',
                    color: isFocused ? 'black' : '#F5E8C7',
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <h1 className="mb-3" style={{ fontSize: '1.5em', marginTop: '5px' }}>
                  Avatar
                </h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                    className="form-control-file"
                    onChange={handleFileChange}
                    style= {{ width: '500px', color: '#F5E8C7', marginTop: '-10px'}}
                  />
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ display: 'block', margin: 'auto', width: '200px', height: '50px', fontSize: '1.5em', backgroundColor: '#ECB159', color: '#F5E8C7', marginTop: '10px' }}>Register</button>
              <br/>
              <br/>
            </form>
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
