import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Register.css';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword || !phone || !address) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Dummy registration logic: saving role in localStorage
    localStorage.setItem("role", role);
    navigate(role === "admin" ? "/admin/dashboard" : "/student/dashboard");
  };

  const handleBack = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="register-container">
      <h1>Student Learning Outcomes Tracker</h1>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin (Teacher)</option>
        <option value="student">Student</option>
      </select>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleBack} className="back-button">Back to Login</button>
    </div>
  );
}

export default Register;
