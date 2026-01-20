import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './iceCreamSlice'
import { useState } from 'react'

export const IceCreamView = () => {
    const [value, setValue] = useState(1);
    const numberOfIceCreams = useAppSelector((state) => state.iceCream.numberOfIceCreams)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>Number of ice Creams - {numberOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice Cream</button>
            <input 
                type='number' 
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(value))}>Restock ice Creams</button>
        </div>
    )
}