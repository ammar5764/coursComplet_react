import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = ` ${counter} le compteur est a `
    }, [counter]);

    const Increment = () => {
        setCounter(counter + 1)
    }

    return (
        <button className='btn btn-success' onClick={() => Increment()}  >{counter}  Increment +</button>
    )
}

export default Counter
