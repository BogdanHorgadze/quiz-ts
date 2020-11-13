type answersType = string | null 

export type answers = {
    answer_a :answersType,
    answer_b :answersType,
    answer_c :answersType,
    answer_d :answersType,
    answer_e :answersType,
    answer_f :answersType
}

export type CorrectAnswers = {
    answer_a :boolean,
    answer_b :boolean,
    answer_c :boolean,
    answer_d :boolean,
    answer_e :boolean,
    answer_f :boolean
}

export type getDataType = {
    id: number,
    category : string,
    difficulty : string,
    answers : answers,
    correct_answers : CorrectAnswers,
    question : string
}