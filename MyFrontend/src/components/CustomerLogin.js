import React, { useState } from 'react';
import axios from 'axios';
import './CustomerLogin.css';
import { useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // useNavigate hook

 
const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const response = await axios.post('http://localhost:9091/customer/login', {
            emailId: email,
            password: password
        });
        if (response.status === 200) {
            
             const res = await axios.get('http://localhost:9091/customer/email/'+email)
             console.log(res)
            // Login successful
            alert('Login successful');
            // Redirect user to CustomerLoan component
            navigate('/dashboard');
            localStorage.setItem('customer_id', res.data.customerId);
        } else {
            setErrorMessage('Invalid email or password');
        }
    } catch (error) {
        setErrorMessage('Error logging in');
    }
};

    return (
        <div className="login-container">
            
            
            <form onSubmit={handleSubmit} className="login-form">
            <h2 className='text-center'>Login</h2>
            <hr></hr>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="form-group">
                    <label>Email<span style={{color:'red'}}>*</span></label>
                    <input type="email" placeholder="Enter you email id" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password<span style={{color:'red'}}>*</span></label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" style={{background:'#fbc02d'}}>Login</button>
            </form>
        </div>
    );
};

export default CustomerLogin;
