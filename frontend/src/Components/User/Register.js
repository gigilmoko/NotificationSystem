// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     avatar: null,
//   });

//   const handleChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, avatar: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password, avatar } = formData;

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("name", name);
//       formDataToSend.append("email", email);
//       formDataToSend.append("password", password);
//       formDataToSend.append("avatar", avatar);

//       await axios.post(
//         // `${process.env.REACT_APP_API}/api/v1/register`,
//         'http://localhost:4001/api/register',
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("user registered");
//       navigate("/");
//     } catch (error) {
//       console.error("registration failed", error);
//     }
//   };

//   return (
//     <div style = {{backgroundColor: '#001F3F'}}>
//       <form onSubmit={handleSubmit}>
//         <label>name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={handleChange}
//           value={formData.name}
//         />
//         <label>email</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           onChange={handleChange}
//           value={formData.email}
//         />
//         <label>password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           onChange={handleChange}
//           value={formData.password}
//         />

//         <label>avatar</label>
//         <input
//           type="file"
//           name="avatar"
//           id="avatar"
//           accept="image/*"
//           onChange={handleFileChange}
//         />

//         <button>Register</button>
//       </form>
//     </div>
//   );
// }

// // import React, { Fragment, useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // // import Metadata from '../Layout/Metadata';
// // import axios from "axios";
// // import { Carousel } from "react-bootstrap";
// // import "../../assets/css/flaticon.css";
// // import "../../assets/css/themify-icons.css";
// // import "../../assets/css/style.css";

// // const Register = () => {
// //   const [avatar, setAvatar] = useState(null);
// //   const [avatarPreview, setAvatarPreview] = useState(null);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   let navigate = useNavigate();

// //   useEffect(() => {
// //     if (isAuthenticated) {
// //       navigate("/");
// //     }
// //     if (error) {
// //       console.log(error);
// //       setError("");
// //     }
// //   }, [error, isAuthenticated]);
// //   //VALIDATION
// //   const validationSchema = Yup.object({
// //     name: Yup.string().required("Name is required"),
// //     email: Yup.string()
// //       .email("Invalid email format")
// //       .required("Email is required"),
// //     password: Yup.string().required("Password is required"),
// //   });

// //   //FORMIK
// //   const formik = useFormik({
// //     initialValues: {
// //       name: "",
// //       email: "",
// //       password: "",
// //     },
// //     validationSchema: validationSchema,
// //     onSubmit: (values) => {
// //       register(values);
// //     },
// //   });

// //   const onChange = (e) => {
// //     if (e.target.name === "avatar") {
// //       const file = e.target.files[0]; // Only take the first file

// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         if (reader.readyState === 2) {
// //           setAvatarPreview(reader.result);
// //         }
// //       };
// //       if (file) {
// //         reader.readAsDataURL(file);
// //         setAvatar(file);
// //       }
// //     } else {
// //       formik.handleChange(e);
// //     }
// //   };

// //   const register = async (userData) => {
// //     try {
// //       const formData = new FormData();
// //       formData.append("name", userData.name);
// //       formData.append("email", userData.email);
// //       formData.append("password", userData.password);

// //       if (avatar) {
// //         formData.append("avatar", avatar);
// //       }

// //       const config = {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //       };

// //       const { data } = await axios.post(
// //         `${process.env.REACT_APP_API}/api/v1/register`,
// //         formData,
// //         config
// //       );

// //       setIsAuthenticated(true);
// //       setLoading(false);
// //       console.log("Registration successful:", data); // Log the successful registration data
// //       navigate("/");
// //     } catch (error) {
// //       setIsAuthenticated(false);
// //       setLoading(false);
// //       setError(error);
// //       console.log("Registration failed:", error); // Log the error if registration fails
// //     }
// //   };

// //   return (
// //     <Fragment>
// //       {/* <Metadata title={'Register User'} /> */}
// //       <div className="row wrapper">
// //         <div className="col-10 col-lg-5" style={{ backgroundColor: "#fafafa" }}>
// //           <form
// //             className="shadow-lg"
// //             onSubmit={formik.handleSubmit}
// //             encType="multipart/form-data"
// //           >
// //             <div className="text-center">
// //               <h1 className="mb-3" style={{ fontSize: "4em" }}>
// //                 Register
// //               </h1>
// //             </div>

// //             {/* <div className="avatar-container">
// //               {avatarPreview.length > 0 ? (
// //                 <Carousel pause="hover">
// //                   {avatarPreview.map((avatarUrl, index) => (
// //                     <Carousel.Item key={index}>
// //                       <img
// //                         className="rounded-circle"
// //                         src={avatarUrl}
// //                         alt={`Avatar ${index} Preview`}
// //                         style={{ width: "200px", height: "200px" }}
// //                       />
// //                     </Carousel.Item>
// //                   ))}
// //                 </Carousel>
// //               ) : (
// //                 <p>No avatars to display</p>
// //               )}
// //             </div> */}
// //             <div className="card-body text-center"></div>

// //             <div className="form-group">
// //               <label htmlFor="name_field">Name</label>
// //               <input
// //                 type="name"
// //                 id="name_field"
// //                 className={`form-control ${
// //                   formik.touched.name && formik.errors.name ? "is-invalid" : ""
// //                 }`}
// //                 name="name"
// //                 value={formik.values.name}
// //                 onChange={onChange}
// //               />
// //               {formik.touched.name && formik.errors.name && (
// //                 <div className="invalid-feedback">{formik.errors.name}</div>
// //               )}
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="email_field">Email</label>
// //               <input
// //                 type="email"
// //                 id="email_field"
// //                 className={`form-control ${
// //                   formik.touched.email && formik.errors.email
// //                     ? "is-invalid"
// //                     : ""
// //                 }`}
// //                 name="email"
// //                 value={formik.values.email}
// //                 onChange={onChange}
// //               />
// //               {formik.touched.email && formik.errors.email && (
// //                 <div className="invalid-feedback">{formik.errors.email}</div>
// //               )}
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="password_field">Password</label>
// //               <input
// //                 type="password"
// //                 id="password_field"
// //                 className={`form-control ${
// //                   formik.touched.password && formik.errors.password
// //                     ? "is-invalid"
// //                     : ""
// //                 }`}
// //                 name="password"
// //                 value={formik.values.password}
// //                 onChange={formik.handleChange}
// //               />
// //               {formik.touched.password && formik.errors.password && (
// //                 <div className="invalid-feedback">{formik.errors.password}</div>
// //               )}
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="avatar_upload">Avatar</label>
// //               <div className="d-flex align-items-center">
// //                 <div className="custom-file">
// //                   <input
// //                     type="file"
// //                     name="avatar"
// //                     className="custom-file-input"
// //                     id="customFile"
// //                     accept="image/*"
// //                     onChange={onChange}
// //                   />

// //                   <label className="custom-file-label" htmlFor="customFile">
// //                     Choose Avatar
// //                   </label>
// //                 </div>
// //               </div>
// //             </div>

// //             <button
// //               id="register_button"
// //               type="submit"
// //               className="btn btn-block py-3"
// //               disabled={loading ? false : true}
// //             >
// //               REGISTER
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </Fragment>
// //   );
// // };

// // export default Register;
