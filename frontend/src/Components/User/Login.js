import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from '../Layout/header.js';
import Footer from '../Layout/footer.js';
import {authenticate} from '../../utils/helpers'
import { getUser } from '../../utils/helpers'
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/loginstyle.css';
import '../../assets/css/flaticon.css';
import '../../assets/css/themify-icons.css';

export default function Login() {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    let location = useLocation();
    const redirect = location.search ? new URLSearchParams(location.search).get('redirect') : ''
    // const notify = (error) => toast.error(error, {
    //     position: toast.POSITION.BOTTOM_RIGHT
    // });

    const login = async (email, password) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/login`, { email, password }, config)
            if (data.user && data.user.role === 'admin') {
                // Redirect to admin location
                authenticate(data, () => navigate("/admin/dashboard"));
            } else {
                // Redirect to regular user location
                authenticate(data, () => navigate("/"));
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("Error status:", error.response.status);
                console.log("Error data:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.log("No response received:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error:", error.message);
            }
            // Log the invalid email or password
            console.log("Invalid email or password:", email, password);
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        login(email, password)
    }

    useEffect(() => {
        if (getUser() && redirect === 'shipping' ) {
             navigate(`/${redirect}`)
        }
    }, [])

   

    return (
        <div class="full-width-container" style={{ backgroundColor: '#001F3F' }}>
            <div class="custom-container-user" style={{ backgroundColor: '#001F3F' }}>
                <Header/>
                <section class="login_part section_padding">
                    <div class="container" style={{ backgroundColor: '#323C50', marginTop: '50px', paddingBottom: '0' }}>
                        <div class="row" style={{ height: '600px' }}>
                            <div className="col-lg-6 col-md-6" style={{ paddingRight: 0, paddingLeft: 0}}>
                                <div className="login_part_text text-center">
                                    <div className="login_part_text_iner">
                                        <h2>New to our Site?</h2>
                                        <p>This site provides real-time updated about Earthquake for the Country and Weather for Taguig</p>
                                        <a href="/register" className="btn_3">Create an Account</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                <div className="login_part_form">
                                    <div className="login_part_form_iner">
                                        <h3 style = {{ textAlign: "Center"}}>Welcome Back ! </h3>
                                        <form class="row contact_form" action="#" method="post" novalidate="novalidate" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <h1 className="mb-3" style={{ fontSize: '2em' }}>Email</h1>
                                                <input
                                                    id="email_field"
                                                    type="email"
                                                    className="form-control"
                                                    value={email}
                                                    placeholder = "Username"
                                                    onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                                <h1 className="mb-3" style={{ fontSize: '2em', marginTop: '15px' }}>Password</h1>
                                                <input
                                                id="password_field"
                                                type="password" // Set the type attribute to "password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
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
