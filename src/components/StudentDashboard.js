import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/StudentDashboard.css'; // Ensure this CSS file exists

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="student-dashboard">
      <h1>Welcome, Student</h1>
      <p>Track Your Progress and View Assessments</p>
      <div className="dashboard-options">
        <button onClick={() => navigate('/student/track-progress')}>Track Progress</button>
        <button onClick={() => navigate('/student/view-assessments')}>View Assessments</button>
        <button onClick={() => navigate('/profile')}>View Profile</button> {/* Profile Button */}
      </div>
    </div>
  );
}

export default StudentDashboard;
