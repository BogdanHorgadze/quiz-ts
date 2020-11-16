import { ActionsTypes } from "../actions/action";
import { GETQUESTIONS, START } from "../actions/actionTypes";
import { getDataType } from "../../Interfaces/Interfaces";

export interface IQuiz {
    url: string,
    questions: Array<getDataType>,
    start: boolean
}


const initialState = {
    url: 'https://quizapi.io/api/v1/questions?apiKey=YpdIe1v8v7GAVsGpcqV4BBfrQQz678Mrf9qF0nSh',
    questions: [],
    start: false
}

export default function quizReducer(state: IQuiz = initialState, action: ActionsTypes) {
    switch (action.type) {
        case GETQUESTIONS:
            return { ...state, questions: action.data }
        case START:
            return { ...state, start: action.payload }
        default:
            return state
    }
}