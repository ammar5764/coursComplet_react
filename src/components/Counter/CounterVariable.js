import React, { useState } from 'react'

const Counter = () => {

    let Count = 0 ;

    const Increment = () => {
        Count = Count +1
        console.log(Count)
    }
    const Decrement = () => {
        Count = Count -1
        console.log(Count)
    }
    const Reset = () => {
        Count = 0
        console.log(Count)
    }


    return (
        <div>
            <div> {Count}</div>
            <button  onClick={()=> Increment()}  >Increment +</button>
            <button onClick={()=> Decrement()}>Decrement -</button>
            <button onClick={()=> Reset()}>Reset</button>
        </div>
    )
}

export default Counter
