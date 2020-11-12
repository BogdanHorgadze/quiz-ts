import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataType } from '../../Interfaces/Interfaces';
import { AppState } from "../../store/reducers/rootReducer";
import { useParams } from 'react-router-dom'
import { getQuestionsThunk } from "../../store/actions/action";

type Params = {
    category: string,
    difficult: string
}

const Quiz: React.FC = () => {
    const dispatch = useDispatch()
    const url: string = useSelector((state: AppState) => state.quizReducer.url)
    const questions: Array<getDataType> = useSelector((state: AppState) => state.quizReducer.questions)
    let match = useParams<Params>();
    console.log(questions)
    useEffect(() => {
        dispatch(getQuestionsThunk(`${url}&category=${match.category}&difficulty=${match.difficult}&limit=5`))
    }, [])

    return (
        <div>
            quiz
        </div>
    )
}

export default Quiz
