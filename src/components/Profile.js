import React, { useState } from "react";
import '../styles/Profile.css';

function Profile() {
  const role = localStorage.getItem("role");

  const initialAdminProfile = {
    name: "Mr. Rajesh Kumar",
    email: "rajesh.kumar@edu.com",
    subject: "Mathematics",
  };

  const initialStudentProfile = {
    name: "Amit Mishra",
    email: "amit.mishra@gmail.com",
    enrolledCourses: ["Math", "Science"],
  };

  const [adminProfile, setAdminProfile] = useState(initialAdminProfile);
  const [studentProfile, setStudentProfile] = useState(initialStudentProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (role === "admin") {
      setAdminProfile((prev) => ({ ...prev, [name]: value }));
    } else {
      setStudentProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      {role === "admin" ? (
        <div className="profile-details">
          <h3>Admin Details</h3>
          <p>
            Name: {isEditing ? <input type="text" name="name" value={adminProfile.name} onChange={handleChange} /> : adminProfile.name}
          </p>
          <p>
            Email: {isEditing ? <input type="email" name="email" value={adminProfile.email} onChange={handleChange} /> : adminProfile.email}
          </p>
          <p>
            Subject: {isEditing ? <input type="text" name="subject" value={adminProfile.subject} onChange={handleChange} /> : adminProfile.subject}
          </p>
        </div>
      ) : (
        <div className="profile-details">
          <h3>Student Details</h3>
          <p>
            Name: {isEditing ? <input type="text" name="name" value={studentProfile.name} onChange={handleChange} /> : studentProfile.name}
          </p>
          <p>
            Email: {isEditing ? <input type="email" name="email" value={studentProfile.email} onChange={handleChange} /> : studentProfile.email}
          </p>
          <p>
            Enrolled Courses: {isEditing ? <input type="text" name="courses" value={studentProfile.enrolledCourses.join(", ")} onChange={handleChange} /> : studentProfile.enrolledCourses.join(", ")}
          </p>
        </div>
      )}
      <button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default Profile;
