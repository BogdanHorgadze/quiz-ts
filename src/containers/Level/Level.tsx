import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';

interface IDifficult {
    difficult: string
}

type Category = {
    category: string
}

const Level = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState<IDifficult[]>([{ difficult: 'easy' }, { difficult: 'medium' }, { difficult: 'hard' }])

    let { category } = useParams<Category>()
    let history = useHistory();

    const nextHandler = (difficult: string) => {
        history.push(`/category/${category}/${difficult}`)
    }

    const renderLevels = () => {
        return data.map((item, i) => {
            return (
                <div key={i}>
                    <a onClick={() => nextHandler(item.difficult)}>
                        {item.difficult}
                    </a>
                </div>
            )
        })
    }

    return (
        <div>
            {renderLevels()}
        </div>
    )
}

export default Level
