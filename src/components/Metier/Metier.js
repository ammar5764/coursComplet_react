import React, {useState} from 'react'

const Metier = () => {
    const [state, setState] = useState({
        id: 1, 
        metier : "Fullstack Dev", 
        Niveau : "en formation"
    });

   
    const handleJunior = () => {
     //   setState((prevstate)=>  ({...prevstate, Niveau: "Junior" }))
        setState((prevstate)=> {
            console.log("prevstate", prevstate)
            return(
                {...prevstate, Niveau: "Junior" }
            )
        })
    }
    const handleIntermediaire = () => {
        setState((prevstate)=> ({...prevstate, Niveau: "Intermediaire" }))
    }
    const handleSenior = () => {
        setState((prevstate)=> ({...prevstate, Niveau: "Senior" }))
    }

  return (
    <div>
        <h1>je suis  {state.metier}   {" "}  {state.Niveau}  </h1>
        <button  onClick={() => handleJunior() }  >dans trois mois je serais </button>
        <button  onClick={() => handleIntermediaire() }>dans un an je serais</button>
        <button  onClick={() => handleSenior() }>Dans 5 ans je serais </button>
      
    </div>
  )
}

export default Metier
