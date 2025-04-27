import React, { useState, useEffect } from "react";

import "./App.css";
import StartQuizPage from "./components/StartQuizPage";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";

function App() {
  const [questions, setQuestions] = useState([]); // Store questions from S3
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  // Public S3 URL
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          "https://quiz-data-bucket.s3.amazonaws.com/questions.json"
        );
        const data = await response.json(); // Parse the JSON
        setQuestions(data);
        console.log("Fetched Questions:", data);
      } catch (error) {
        console.error("Error fetching data from S3:", error);
      }
    };

    fetchQuizData();
  }, []); 

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
