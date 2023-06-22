import React from 'react'

const Count = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
    }

  return (

    <div>
        <button onClick={()=> increment() }>increment + </button>
        <br />
        <h1>{count}</h1>
        <br />
        <button onClick={()=> decrement() }>decrement - </button>
        <br />
        <button onClick={()=> reset() }>Reset </button>
    </div>

  )
}

export default Count