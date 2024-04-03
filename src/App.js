import { useState } from 'react';
import './App.css';
import questions from './Assets/questions';

function App() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [score, setscore] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const currQuestion = questions[questionIdx];
  const selectOption = (idx) => {
     if (currQuestion.answer === idx) {
      setscore(score + 1);
     }
     const nextQ = questionIdx + 1;
     if (nextQ < questions.length) {
      setQuestionIdx(questionIdx + 1);
     } else {
      setshowScore(true);
     }
  };
  const reset = () => {
     setQuestionIdx(0);
     setscore(0);
     setshowScore(false);
  };
  return (
    <div className='quiz-container'>
      {
        showScore ? (
        <>
        <h1 className='scorehone'>Your score is : {score}/5</h1>
        <button onClick={reset} className='rstbutton'>Restart Quiz</button>
        </>
        ) : (<div className='quiz-container__question'>
        <p className='ptag'>{ currQuestion.question }</p>
        <div className='quiz-container__options'>
          <ul className='quiz-container__ul'>
          { currQuestion.option.map((option, i) => {
            return <li className='quiz-container__li' onClick={() => selectOption(i)}>{option}</li>;
          }) }
          </ul>
        </div>
      </div>)
      }
      
    </div>
  );
}

export default App;
