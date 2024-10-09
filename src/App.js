import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";
import UploadAssessments from "./components/UploadAssessments";
import ManageStudents from "./components/ManageStudents";
import TrackProgress from "./components/TrackProgress";
import ViewAssessments from "./components/ViewAssessments";
import Profile from "./components/Profile"; // Import Profile component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/admin/upload-assessments" element={<UploadAssessments />} />
        <Route path="/admin/manage-students" element={<ManageStudents />} />
        <Route path="/student/track-progress" element={<TrackProgress />} />
        <Route path="/student/view-assessments" element={<ViewAssessments />} />
        <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
      </Routes>
    </Router>
  );
}

export default App;
