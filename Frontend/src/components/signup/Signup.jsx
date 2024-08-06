import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import Breadcrumbs from '../Breadcrumbs';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: 'FSD-MERN',
    password: '',
  });

  const { name, email, phone, batch, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', formData);
      alert(res.data.message);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.msg);
    }
  };

  return (
    <>
      <Breadcrumbs />
      <div className="mt-bc-lspg"></div>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="signupbox">
                <h2>Create Your Account</h2>
                <p>We just need a few details from you to get started. Lets do this!</p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={handleChange}  required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={handleChange}required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" value={phone} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Batch</label>
                    <select className="form-control" name="batch" value={batch} onChange={handleChange} required>
                      <option value="FSD-MERN">FSD-MERN</option>
                      <option value="DevOps">DevOps</option>
                      <option value="AI-ML">AI-ML</option>
                      <option value="CyberSecurity">CyberSecurity</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn signup-btn">Sign Up</button>
                  <p className='member-pgh'>Already have an account? <Link to='/login'> Login</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
