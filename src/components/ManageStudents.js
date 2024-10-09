import React from "react";
import '../styles/ManageStudents.css';

function ManageStudents() {
  const students = [
    { name: "Amit Mishra", email: "amit@gmail.com", progress: "85%" },
    { name: "Priya Singh", email: "priya@gmail.com", progress: "72%" },
    { name: "Rahul Verma", email: "rahul@gmail.com", progress: "90%" },
  ];

  return (
    <div className="manage-students">
      <h2>Manage Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.email} - Progress: {student.progress}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageStudents;
