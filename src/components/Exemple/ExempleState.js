import React, {useState} from 'react'

const ExempleState = () => {

    const [state, setState] = useState("Elie")

    const handleClick = () => {
        setState(" ou pas ? ")
    }

  return (
    <div>
        <p>Bonjour, je m'appel {state}</p>
        <button  onClick={()=>handleClick() } >Hello</button>
     </div>
  )
}

export default ExempleState