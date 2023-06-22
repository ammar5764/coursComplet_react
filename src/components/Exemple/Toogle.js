import React, { useState } from 'react'

const Toogle = () => {

    const [toogle, setToogle] = useState(true)

  return (
    <div>

        <h1>Application Toogle</h1>

        <button onClick={()=> setToogle(!toogle) } >Toogle</button>
        {   toogle && 
            <div >
                <p>Coucou</p>
            </div>
        }
    </div>
  )
}

export default Toogle