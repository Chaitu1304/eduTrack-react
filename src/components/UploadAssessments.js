import React, { useState } from "react";
import '../styles/UploadAssessments.css'; // Ensure this CSS file exists

function UploadAssessments() {
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [gradePoints, setGradePoints] = useState(""); // State for grade points

  const handleUpload = () => {
    if (!subject || !file || !gradePoints) {
      alert("Please enter a subject, select a file, and provide grade points.");
      return;
    }

    // Simulating a file upload action
    alert(`Assessment for ${subject} with Grade Points ${gradePoints} uploaded successfully!`);
    // Reset fields after upload
    setSubject("");
    setFile(null);
    setGradePoints(""); // Reset grade points
  };

  return (
    <div className="upload-assessments">
      <h2>Upload Assessments</h2>
      <input
        type="text"
        placeholder="Enter Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="number" // Input for grade points
        placeholder="Enter Grade Points"
        value={gradePoints}
        onChange={(e) => setGradePoints(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadAssessments;
