import React from "react";

function ResultsPage({ score, total, onRestart }) {
  return (
    <div className="final-results">
      <h1>Final Score</h1>
      <h2>{score} out of {total} correct - ({(score / total) * 100}%)</h2>
      <button onClick={onRestart}>Retry</button>
    </div>
  );
}
export default ResultsPage