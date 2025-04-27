import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock the StartQuizPage component
jest.mock('../StartQuizPage', () => ({ onStartQuiz }) => (
  <div data-testid="start-quiz-page" onClick={() => onStartQuiz()} />
));

describe('App component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Geeky Quiz 🤓')).toBeInTheDocument();
  });

  it('shows Start Quiz Page initially', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('start-quiz-page')).toBeInTheDocument();
  });

  it('starts the quiz when Start Quiz is clicked', () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByTestId('start-quiz-page'));
    expect(getByText('Question: 1 out of 10')).toBeInTheDocument();
  });


});
