import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { answers, getDataType } from '../../Interfaces/Interfaces';
import { AppState } from "../../store/reducers/rootReducer";
import { useParams } from 'react-router-dom'
import { getQuestionsThunk } from "../../store/actions/action";
import Questions from '../../components/Questions/Questions';

type Params = {
    category: string,
    difficult: string
}

const Quiz: React.FC = () => {
    const dispatch = useDispatch()

    const url: string = useSelector((state: AppState) => state.quizReducer.url)
    const questions: Array<getDataType> = useSelector((state: AppState) => state.quizReducer.questions)

    const [start, setStart] = useState<boolean>(false)
    const [limit , setLimit] = useState<number>(5)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [showAnswers, setShowAnswers] = useState<boolean>(false)
    let match = useParams<Params>();

    useEffect(() => {
        dispatch(getQuestionsThunk(`${url}&category=${match.category}&difficulty=${match.difficult}&limit=${limit}`))
    }, [])

    const nextQuestion = () => {
        if (showAnswers && currentQuestion < limit - 1) {
            setCurrentQuestion(prev => prev + 1)
            setShowAnswers(false)
        }
    }

    const checkAnswer = (selectedAnswer: string) => {
        const correctAnswers = questions[currentQuestion].correct_answers
        Object.keys(correctAnswers).map((item, i) => {
            if (item.slice(0, 8) === selectedAnswer && String(correctAnswers[item as keyof answers]) === 'true') {
                setScore(prev => prev + 1)
                setShowAnswers(true)
            }
            else {
                setShowAnswers(true)
            }
        })
    }

    return (
        <div>
            <h1>{questions[0]?.category}</h1>
            <h2>{questions[0]?.difficulty}</h2>
            {
                !start
                    ? <button onClick={() => setStart(true)}>start</button>
                    : <Questions
                        answers={questions[currentQuestion].answers}
                        correctAnswers={questions[currentQuestion].correct_answers}
                        question={questions[currentQuestion].question}
                        nextQuestion={nextQuestion}
                        checkAnswer={checkAnswer}
                        score={score}
                        showAnswers={showAnswers}
                        start={start}
                        limit={limit}
                        currentQuestion={currentQuestion}
                    />
            }
        </div>
    )
}

export default Quiz
