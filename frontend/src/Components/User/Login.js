// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });
    
//     const [loginError, setLoginError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//     });
//     };
    
//     const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const response = await axios.post(
//         "http://localhost:4001/api/login",
//         formData
//         );
        
//         if (response.status === 200) {
//         // Login successful
//         console.log("Login successful");
//         navigate("/profile");
//         } else {
//         // Login failed
//         setLoginError("Invalid email or password");
//         }
//     } catch (error) {
//         console.error("Error occurred:", error);
//     }

//     };
// return(
//     <div style = {{backgroundColor: '#001F3F'}}>
//         <form onSubmit={handleSubmit} >
//             <div className="col-span-6" >
//             <label
//                 htmlFor="Email"
//             >
//                 Email
//             </label>

//             <input
//                 type="email"
//                 id="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="placeholder"
//             />
//             </div>
//             <div >
//             <label htmlFor="Password">
//                 Password
//             </label>

//             <input
//                 type="password"
//                 id="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="placeholder"
//             />
//             {loginError && (
//                 <p >{loginError}</p>
//             )}
//             </div>
//             <div >
//                 <button >
//                     Log In
//                 </button>
//                 <p >
//                     Don't have an account?{" "}
//                     <Link to="/register">
//                     Register
//                     </Link>
//                     .
//                 </p>
//             </div>
//         </form>
//     </div>
// )
// }
