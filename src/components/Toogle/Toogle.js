import React,  { useState } from 'react'

const Toogle = () => {

    const [toogle, setToogle] = useState(false);

    const ActivToogle = () => {
        setToogle(!toogle)
    }

  return (
    <div>
      <button className='btn btn-success' onClick={()=> ActivToogle()} >Click ici pour ouvrir </button>
        { toogle === true &&
             <h1>Coucou</h1>
        }
        
    </div>
  )
}

export default Toogle
