import React, { useState } from 'react';
import axios from 'axios';

const CustomerRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    phone: '',
    pan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9091/customer/save', formData);
      console.log('Registration successful', response.data);
       // Store customer_id in local storage
  
      // Below alert will let the user know about registration status
      alert('Registration successful!');

      // below is to handle the registration event
    } catch (error) {
      console.error('Registration failed', error.response.data);
      
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',  background:'teal'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Customer Registration</h2><hr/>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" value={formData.firstName} onChange={handleChange} required style={{borderRadius:'8px'}}/>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter your last Name" value={formData.lastName} onChange={handleChange} required style={{borderRadius:'8px'}}/>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="emailId" placeholder="Enter your Email Id" value={formData.emailId} onChange={handleChange} required style={{borderRadius:'8px'}}/>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" value={formData.password} onChange={handleChange} required style={{borderRadius:'8px'}}/>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" placeholder="Enter your Mobile Number" value={formData.phone} onChange={handleChange} required className='col-8' style={{borderRadius:'8px'}}/>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="pan">PAN:</label>
            <input type="text" id="pan" name="pan" placeholder="Enter your PAN" value={formData.pan} onChange={handleChange} required style={{borderRadius:'8px'}}/>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#fbc02d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegistration;
