import React, { useState } from 'react'

const ExempleObject = () => {

    const [state, setState] = useState({
        id : 1 ,
        metier: "Fullstack developper",
        niveau : "en formation",
      })

      const handleClickJunior = () => {
        setState((prevState)=> {
          console.log("prevState",prevState)
            return({...prevState, niveau: "Junior"  })
        })
      }

      const handleClickIntermediaire = () => {
        setState((prevState)=> ({...prevState, niveau: "Intermediaire"  }))
      }
      
      const handleClickSenior = () => {
        setState((prevState)=> ({...prevState, niveau: "Senior"  }))
      }

  return (
    <div>

        <h1>Je suis {state.metier} {" "}  {state.niveau} </h1>
        <button onClick={ ()=> handleClickJunior() } >dans 3 mois je serais  </button>
        <button onClick={ ()=> handleClickIntermediaire() } >dans 1 an je serais  </button>
        <button onClick={ ()=> handleClickSenior() } >dans 5 ans je serais  </button>


    </div>
  )
}

export default ExempleObject


// const handleClickJunior = () => {
//   setState((prevState)=> {
//     console.log("prevState",prevState)
//       return({...prevState, niveau: "Junior"  })
//   })
// }