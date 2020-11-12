import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

interface ICategory {
    category: string
}

const Main: React.FC = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState<ICategory[]>([{ category: 'Linux' }, { category: 'DevOps' }, { category: 'Docker' }])

    const renderCategories = () => {
        return data.map((item, i) => {
            return (
                <div key={i}>
                    <Link to={`/category/${item.category}`} >
                        {item.category}
                    </Link>
                </div>
            )
        })
    }

   

    return (
        <div>
            <ul>
                {renderCategories()}
            </ul>
        </div>
    )
}

export default Main
