import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartQuizPage from '../StartQuizPage';

describe('StartQuizPage component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<StartQuizPage />);
    expect(getByText('Welcome to the Quiz!')).toBeInTheDocument();
  });

  it('displays the colored rectangles', () => {
    const { container } = render(<StartQuizPage />);
    const redRectangle = container.querySelector('.colored-rectangle.red');
    const blueRectangle = container.querySelector('.colored-rectangle.blue');
    
    expect(redRectangle).toBeInTheDocument();
    expect(blueRectangle).toBeInTheDocument();
  });

  it('starts the quiz when Start Quiz is clicked', () => {
    const startQuizMock = jest.fn();
    const { getByText } = render(<StartQuizPage onStartQuiz={startQuizMock} />);
    
    fireEvent.click(getByText('Start Quiz'));
    expect(startQuizMock).toHaveBeenCalled();
  });

});
