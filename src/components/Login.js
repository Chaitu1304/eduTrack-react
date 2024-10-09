import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "admin" && email === "admin@edu.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin/dashboard");
    } else if (role === "student" && email === "student@edu.com" && password === "student123") {
      localStorage.setItem("role", "student");
      navigate("/student/dashboard");
    } else {
      alert("Invalid login credentials!");
    }
  };

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h1>Student Learning Outcomes Tracker</h1>
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
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
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup} className="signup-button">Signup</button>
    </div>
  );
}

export default Login;
