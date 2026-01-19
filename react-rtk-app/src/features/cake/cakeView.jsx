import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
import { useState } from 'react'

export const CakeView = () => {
    const [value, setValue] = useState(1)
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <input 
                type='number'
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(value))}>Restock cakes</button>
        </div>
    )
}