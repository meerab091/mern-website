import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; 

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("✅ Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
 
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
    
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit"> <Link to="/shop">Login</Link></button>
      </form>
      <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
