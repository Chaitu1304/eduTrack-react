import React from "react";
import '../styles/ViewAssessments.css'; // Ensure you have this CSS file for styling

function ViewAssessments() {
  const assessments = [
    { name: "Math Assignment", subject: "Math", deadline: "2024-10-10" },
    { name: "Science Project", subject: "Science", deadline: "2024-10-15" },
  ];

  return (
    <div className="view-assessments">
      <h2>Your Assessments</h2>
      <ul>
        {assessments.map((assessment, index) => (
          <li key={index}>
            {assessment.name} - {assessment.subject} - Deadline: {assessment.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewAssessments;
