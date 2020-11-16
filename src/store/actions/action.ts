import { Dispatch } from "react"
import { GETQUESTIONS , START } from "./actionTypes"
import { getDataType } from "../../Interfaces/Interfaces";
import axios from 'axios'


type dispatchType = Dispatch<ActionsTypes>

export const getQuestionsThunk = (url : string) => {
    return async (dispatch : dispatchType) => {
        const res = await axios.get(url)
        dispatch(getQuestions(res.data))
    }
}

type getQuestionsType = {
        type : typeof GETQUESTIONS,
        data : any
}

const getQuestions = (data : getDataType)  : getQuestionsType => {
    return {
        type : GETQUESTIONS,
        data
    }
}

type startChangeType = {
    type : typeof START,
    payload : boolean
}

export const startChange = (value : boolean) : startChangeType => {
    return {
        type: START,
        payload : value
    }
}

export type ActionsTypes = getQuestionsType | startChangeType