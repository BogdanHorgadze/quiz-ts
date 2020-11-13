import React from 'react'
import { answers , CorrectAnswers } from '../../Interfaces/Interfaces'

interface Props {
    question: string,
    answers: answers,
    showAnswers: boolean,
    score: number,
    start: boolean,
    correctAnswers: CorrectAnswers,
    nextQuesion: () => void,
    checkAnswer: (selectedAnswer: string) => void
}

const Questions: React.FC<Props> = ({ question, answers, nextQuesion, checkAnswer, showAnswers, score, start , correctAnswers }) => {

    const renderQuestion = () => {
        return Object.keys(answers).map((item, i) => {
            if (answers[item as keyof typeof answers]) {
                return (
                    <div key={i}>
                        <li onClick={() => checkAnswer(item)}>
                            {answers[item as keyof typeof answers]}
                        </li>
                    </div>
                )
            }
        })
    }

    const renderAnswers = () => {
        return Object.keys(answers).map((answer, i) => {
            if (answers[answer as keyof typeof answers]) {
                Object.keys(correctAnswers).map(correctAnswer => {
                    console.log(correctAnswers)
                })
                // return (
                //     <div key={i}>
                //         <li>
                //             {answers[item as keyof typeof answers]}
                //         </li>
                //     </div>
                // )
            }
        })
    }
    console.log(showAnswers)
    return (
        <div>
            <h2>Score:{score}</h2>
            <h2>{question}</h2>
            {
                showAnswers && start
                    ? renderAnswers()
                    : renderQuestion()
            }
            <button onClick={nextQuesion} disabled={!showAnswers}>next</button>
        </div>
    )
}

export default Questions
