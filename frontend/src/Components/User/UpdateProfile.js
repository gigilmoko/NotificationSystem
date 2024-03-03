import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from '../../utils/helpers';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatars, setAvatars] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState([]);
  const [error, setError] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  let navigate = useNavigate();

  const getProfile = async () => {
    const config = {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    };
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/me`, config);
      console.log('User Data:', data); // Log user data to the console
      setName(data.user.name);
      setEmail(data.user.email);
      setAvatarPreview([data.user.avatar]); // Set avatarPreview with the current avatar URL
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error.response); // Log the error response
      if (error.response && error.response.status === 404) {
        toast.error('User not found', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      } else {
        toast.error('An error occurred while fetching user data', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
      setLoading(false);
    }
  };
  

  const updateProfile = async (userData) => {
    const config = {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${getToken()}`
      }
    };
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_API}/api/me/update`, userData, config);
      console.log('Update response:', data); // Log the response data
      setIsUpdated(data.success);
  
      // Update avatarPreview with the new avatar URL
      setAvatarPreview([data.user.avatar]);
  
      setLoading(false);
      toast.success('User updated', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      navigate('/profile', { replace: true });
    } catch (error) {
      console.error('Error updating profile:', error.response); // Log the error response
      if (error.response && error.response.status === 404) {
        toast.error('User not found', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      } else {
        toast.error('An error occurred while updating the profile', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
  
    // Append the avatar file if exists
    if (avatars.length > 0) {
      formData.append('avatar', avatars[0]);
    }
  
    await updateProfile(formData);
  };
  
  const onChange = (e) => {
    if (e.target.name === 'avatar') {
      const files = e.target.files;
      const previews = [];
      const avatarArray = [];
    
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            previews.push(reader.result);
            if (previews.length === files.length) {
              setAvatarPreview(previews);
            }
          }
        };
        reader.readAsDataURL(files[i]);
    
        avatarArray.push(files[i]);
      }
    
      setAvatars(avatarArray);
    }
  };
  
  
  console.log(user);

  return (

    <div className="container-xl px-4 mt-4">
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>

            <div className="card-body text-center">
  {avatarPreview.length > 0 ? (
    avatarPreview.map((avatarUrl, index) => (
      <img
        key={index}
        src={avatarUrl} // Change from user.avatar to avatarUrl
        alt={`Avatar ${index} Preview`}
        style={{ width: '200px', height: '200px' }}
      />
    ))
  ) : (
    <p>No avatars to display</p>
  )}
</div>

            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
            <div className='custom-file'>
              <input
                type='file'
                name='avatar' // Ensure this name matches the Multer field name in the backend
                className='custom-file-input'
                id='customFile'
                accept='image/*'
                onChange={onChange}
              
              />
              <label className='custom-file-label' htmlFor='customFile'>
                Choose Avatar
              </label>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Profile Details</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                  <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                  <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className="btn btn-primary" type="submit" onClick={submitHandler}>Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UpdateProfile;
