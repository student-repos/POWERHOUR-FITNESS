import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import './UpdateProfile.css'; // Assuming you have some basic styles

registerPlugin(FilePondPluginImagePreview);

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    telephone: '',
    address: '',
    picture: ''
  });
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split('T')[0] : '',
        email: user.email || '',
        password: '',
        telephone: user.telephone || '',
        address: user.address || '',
        picture: user.picture || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (files.length > 0) {
        const fileData = new FormData();
        fileData.append('file', files[0].file);
        const uploadResponse = await axios.post('http://localhost:7500/user/upload', fileData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        formData.picture = uploadResponse.data.filePath;
      }

      const response = await axios.put('http://localhost:7500/user/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      // Update user context
      setUser(response.data);

      enqueueSnackbar('Profile updated successfully!', { variant: 'success' });
      navigate('/dashboard/member');
    } catch (error) {
      console.error('Error updating profile', error.response ? error.response.data : error.message);
      enqueueSnackbar('Failed to update profile, please try again.', { variant: 'error' });
    }
  };

  return (
    <div className="update-profile-container">
      <div className="back-to-dashboard">
        <Link to="/dashboard/member">{"<"}</Link>
      </div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Picture:
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            allowImagePreview={true}
            maxFiles={1}
            name="file"
            labelIdle='Drag & Drop your picture or <span class="filepond--label-action">Browse</span>'
          />
        </label>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Telephone:
          <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
