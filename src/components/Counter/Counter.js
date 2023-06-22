import React, { useState,useEffect } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(5);

    useEffect(() => {
        document.title = `le compteur est a ${counter} `
    }, [counter]);

    const Increment = () => {
        setCounter(counter +1)
    }
    const Decrement = () => {
        setCounter(counter -1)
    }
    const Reset = () => {
        setCounter(0)
    }

    return (
        <div>
            <div> {counter}</div>
            <button className='btn btn-success' onClick={()=> Increment()}  >Increment +</button>
            <button className='btn btn-danger' onClick={()=> Decrement()}>Decrement -</button>
            <button  className='btn btn-warning' onClick={()=> Reset()}>Reset</button>
        </div>
    )
}

export default Counter
