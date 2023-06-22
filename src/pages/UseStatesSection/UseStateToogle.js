import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import Toogle from "../../components/Toogle/Toogle"

const UseStateToogle = () => {

    const code = `const Toogle = () => {

        const [toogle, setToogle] = useState(false);
    
        const ActivToogle = () => {
            setToogle(!toogle)  // je lui demande d'etre l'inverse de son statut actuel, donc il fera : true, false ,true , false etc....
        }
    
      return (
        <div>
          <button className='btn btn-success' onClick={()=> ActivToogle()} >Click ici </button>
            { toogle === true &&
                 <h1>Coucou</h1>
            }
            
        </div>
      )
    }`

    return (
        <>
            <NavbarOffCanva />
            <div className="container">
                <h1>Presentation du UseState</h1>
                <p>useState est une fonction de la bibliothèque React qui permet de créer et de gérer des états locaux dans des composants fonctionnels.</p>
                <div className="bg-dark text-light p-5 rounded-4">
                    <pre>{code}</pre>
                </div>
                <Toogle />
            </div>
        </>
    )
}

export default UseStateToogle
