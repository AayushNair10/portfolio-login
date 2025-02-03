import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../login and otp css/Login.css'; // Using the same CSS for consistency

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", formData);
  };

  return (
    <div className="full">
      <div className="full2">
        <div className="heading">Sign Up</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input-box"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-box"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-box"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-box"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="mobile">Sign Up</button>
        </form>
        <span className="desc" id="or">Already have an account?</span>
        <Link to="/login">
          <button className="mobile">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
