import React from 'react'

const Count = () => {
 //   const [count, setCount] = React.useState(0)

    let count = 0 ;

    const increment = () => {
        count =  count+1
        console.log("count",count)
    }
    
    const decrement = () => {

        count =  count-1
        console.log("count",count)
    }

    const reset = () => {
        count =  0
        console.log("count",count)
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