import React from 'react'
import { questions } from '../questions'
import s from './Result.module.scss'

const Result = ({correctAnswer}) => {
  return (
    <div className={s.result}>
        <img className={s.image} src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' alt='finish'/>
        <h2>You answered {correctAnswer} out of {questions.length} questions</h2>
        <a href='/'>
          <button className={s.button}>Try again</button>
        </a>
    </div>
  )
}

export default Result