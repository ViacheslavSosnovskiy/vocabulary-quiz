import React, { useState } from 'react'
import Result from '../Result'
import Game from '../Game'
import { questions } from '../questions'
import s from './App.module.scss'

const App = () => {
  const [step, setStep] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrectAnswer(correctAnswer + 1)
    }
  }

  return (
    <div className={s.app}>
      {step !== questions.length ? (
        <>
          <Game step={step} question={question} onClickVariant={onClickVariant} />
        </>
      ) : (
        <Result correctAnswer={correctAnswer} />
      )
      }
    </div>
  )
}

export default App