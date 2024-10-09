import React from "react";
import '../styles/TrackProgress.css'; // Ensure this CSS file exists

function TrackProgress() {
  const progress = [
    { subject: "Math", score: "85%" },
    { subject: "Science", score: "90%" },
  ];

  return (
    <div className="track-progress">
      <h2>Your Progress</h2>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>
            {item.subject} - Score: {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackProgress;
