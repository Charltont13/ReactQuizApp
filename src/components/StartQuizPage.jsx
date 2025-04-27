
import React from 'react';
import './StartQuizPage.css'; 

function StartQuizPage({ onStartQuiz }) {
  return (
    <div className="start-quiz-page">
      <h1>Welcome to the Quiz!</h1>
      <p>Get ready to test your knowledge.</p>
      <img src="\src\assets\nerddog.jpg" alt="Funny Gif" width="150" height="150" />
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartQuizPage;