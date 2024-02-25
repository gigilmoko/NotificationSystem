import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../Layout/header.js';
import Footer from '../Layout/footer.js';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/loginstyle.css';
import '../../assets/css/flaticon.css';
import '../../assets/css/themify-icons.css';

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                "http://localhost:4001/api/login",
                formData
            );
            
            console.log("Response:", response); // Log the response for debugging
            
            if (response.status === 200) {
                // Login successful
                console.log("Login successful");
                localStorage.setItem('userEmail', formData.email); // Store user email in localStorage
                navigate("/");
            } else {
                // Login failed
                setLoginError("Invalid email or password");
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };
    
    

    return (
        <div class="full-width-container" style={{ backgroundColor: '#001F3F' }}>
            <div class="custom-container-user" style={{ backgroundColor: '#001F3F' }}>
                <Header/>
                <section class="login_part section_padding">
                    <div class="container" style={{ backgroundColor: '#323C50', marginTop: '150px', paddingBottom: '0' }}>
                        <div class="row" style={{  }}>
                            <div className="col-lg-6 col-md-6" style={{ paddingRight: 0, paddingLeft: 0}}>
                                <div className="login_part_text text-center">
                                    <div className="login_part_text_iner">
                                        <h2>New to our Site?</h2>
                                        <p>This site provides real-time updated about Earthquake for the Country and Weather for Taguig</p>
                                        <a href="#" className="btn_3">Create an Account</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                <div className="login_part_form">
                                    <div className="login_part_form_iner">
                                        <h3 style = {{ textAlign: "Center"}}>Welcome Back ! </h3>
                                        <form class="row contact_form" action="#" method="post" novalidate="novalidate" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <h1 className="mb-3" style={{ fontSize: '2em', marginTop: '10px' }}>Email</h1>
                                                <input
                                                    type="email"
                                                    id="Email"
                                                    name="email"
                                                    className="form-control"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <h1 className="mb-3" style={{ fontSize: '2em', marginTop: '10px' }}>Password</h1>
                                                <input
                                                    type="password"
                                                    id="Password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <button id="login_button" type="submit" className="btn_3">log in</button>
                                                <Link to="/password/forgot"><a class="lost_pass" href="#">forget password?</a></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    );
}
