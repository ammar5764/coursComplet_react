import React from 'react'

const CardEnfant = (props) => {

  console.log(props)
  // result : { name : elie }
  
  return (
    <div>
        {props.name}
    </div>
  )

}

export default CardEnfant