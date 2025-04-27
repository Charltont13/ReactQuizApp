import React from "react";

function QuizPage({ question, questionNumber, totalQuestions, onOptionClick }) {
  if (!question) {
    return <div>Loading question...</div>; 
  }

  return (
    <div className="question-card">
      <h2>
        Question: {questionNumber} out of {totalQuestions}
      </h2>
      <h3 className="question-text">{question.text}</h3>
      <ul>
        {question.options.map((option) => (
          <li key={option.id} onClick={() => onOptionClick(option.isCorrect)}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizPage;
