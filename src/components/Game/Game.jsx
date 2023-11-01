import React from 'react'
import s from './Game.module.scss'
import { questions } from '../questions'

const Game = ({step, question, onClickVariant}) => {
    const persentage = Math.round((step / questions.length) * 100)
    console.log(persentage)

  return (
    <>
        <div className={s.progress_bar}>
            <div style={{ width: `${persentage}%`}} className={s.progress}></div>
        </div>
        <h1 className={s.title}>
            Choose the correct translation of the word: 
            &nbsp; <span>{question.word}</span>
        </h1>
        <ul>
            {question.variants.map((answer, index) => (
                <li className={s.item}
                    key={answer}
                    onClick={() => onClickVariant(index)}
                >
                    {answer}
                </li>
            ))}
        </ul>
    </>
  )
}

export default Game