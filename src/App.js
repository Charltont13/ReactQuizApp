import React, { useState } from "react";
import "./App.css";
import StartQuizPage from "./components/StartQuizPage";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
import questions from "./data/questions";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const optionClicked = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setQuizStarted(false);
  };

  return (
    <div className="App">
      <h1>Geeky Quiz 🤓</h1>
      <h2>Score: {score}</h2>

      {quizStarted ? (
        showResults ? (
          <ResultsPage score={score} total={questions.length} onRestart={restartGame} />
        ) : (
          <QuizPage 
            question={questions[currentQuestion]} 
            questionNumber={currentQuestion + 1} 
            totalQuestions={questions.length} 
            onOptionClick={optionClicked} 
          />
        )
      ) : (
        <StartQuizPage onStartQuiz={() => setQuizStarted(true)} />
      )}
    </div>
  );
}

export default App;