import React from 'react'
import { Link } from 'react-router-dom'
import { answers, CorrectAnswers } from '../../Interfaces/Interfaces'

interface Props {
    question: string,
    answers: answers,
    showAnswers: boolean,
    score: number,
    start: boolean,
    limit : number,
    currentQuestion: number,
    correctAnswers: CorrectAnswers,
    nextQuestion: () => void,
    checkAnswer: (selectedAnswer: string) => void
}

const Questions: React.FC<Props> = ({
    question, 
    answers, 
    nextQuestion, 
    checkAnswer, 
    showAnswers, 
    score, start, 
    correctAnswers , 
    limit,
    currentQuestion
}) => {

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
        return Object.keys(answers).map((item, i) => {
            if (answers[item as keyof typeof answers]) {
                return Object.keys(correctAnswers).map(correct => {
                    if (correct.slice(0, 8) === item) {
                        return (
                            <div key={i}>
                                <li style={String(correctAnswers[correct as keyof CorrectAnswers]) === 'true' ? {color : 'green'} : {color:'red'}}>
                                    {answers[item as keyof typeof answers]}
                                </li>
                            </div>
                        )
                    }
                })
            }
        })
    }

    return (
        <div>
            <h2>Score:{score}</h2>
            <h2>{question}</h2>
            {
                showAnswers && start
                    ? renderAnswers()
                    : renderQuestion()
            }
            <div>{currentQuestion + 1} / {limit}</div>
            <button onClick={nextQuestion} disabled={!showAnswers}>{currentQuestion === limit - 1 ? <Link to="/category">finish</Link> : 'next'}</button>
        </div>
    )
}

export default Questions
