import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate(); // Use the navigate function

  return (
    <div className="admin-dashboard">
      <h1>Welcome, Teacher (Mr. Rajesh Kumar)</h1>
      <p>Manage Students and Track Assessments</p>
      <div className="dashboard-options">
        <button onClick={() => navigate('/admin/manage-students')}>Manage Students</button>
        <button onClick={() => navigate('/admin/upload-assessments')}>Upload Assessments</button>
        <button onClick={() => navigate('/profile')}>View Profile</button> {/* Profile Button */}
      </div>
    </div>
  );
}

export default AdminDashboard;
