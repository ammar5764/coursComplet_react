import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'

const PresUseState = () => {
  return (
    <>
      <NavbarOffCanva />
      <div className="container">
        <h1>Presentation du UseState</h1>
        <p>useState est une fonction de la bibliothèque React qui permet de créer et de gérer des états locaux dans des composants fonctionnels.</p>
        <div className="bg-dark text-light p-5 rounded-4">
          <p>const [state, setState] = useState("")</p>
        </div>

          <p>ici state joue le role de getter, c'est un dire qu'il permet de recuperer la valeur passé</p>
          <p>setState ( noté que par convention, le Set commence par une majuscule) joue le role de Setter, il permet de de modifier la valeur passée</p>
          <p>Entre les parenthese on passera la valeur a laquel on l'initialise (ici ce sera un string)</p>
 
      </div>
      
    </>
  )
}

export default PresUseState
