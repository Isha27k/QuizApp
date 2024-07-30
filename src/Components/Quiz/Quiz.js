import React, { useState } from "react";
import Data from "../../Data";
import "./quiz.css";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Data[index]);
  const [score, setScore] = useState(0);
  const [option, setSelectedOption] = useState(null);
  const correctAnswers = [
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
    'option1'
  ];

  const handleNext = () => {
    if (correctAnswers[index] === option) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (index < Data.length - 1) {
      setIndex(index + 1);
      setQuestion(Data[index + 1]);
    } else {
      setIndex(index+1);
    }
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="Quiz">
      <h1>Quiz App</h1>
      {index < Data.length ? (
        <>
          <h3>{question.question}</h3>
          <ul>
            <li className={option === 'option1' ? 'selected' : ''} onClick={() => handleSelectedOption('option1')}>
              {question.option1}
            </li>
            <li className={option === 'option2' ? 'selected' : ''} onClick={() => handleSelectedOption('option2')}>
              {question.option2}
            </li>
            <li className={option === 'option3' ? 'selected' : ''} onClick={() => handleSelectedOption('option3')}>
              {question.option3}
            </li>
            <li className={option === 'option4' ? 'selected' : ''} onClick={() => handleSelectedOption('option4')}>
              {question.option4}
            </li>
          </ul>
          <button onClick={handleNext}>Next</button>
          <div>
            Question {index + 1} of {Data.length}{" "}
          </div>
        </>
      ) : (
        <div>
          <h3>Quiz Finished...!!</h3>
          <h3>Your score is {score} out of {Data.length} </h3>
        </div>
      )}
    </div>
  );
}
