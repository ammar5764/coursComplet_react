import React, {useState} from 'react'
import "./Footer.css"

const Footer = ({name}) => {
  const [changeColor, setChangeColor] = useState("red");

  const StyleRed = {color: changeColor, fontSize: "40px"}

  return (
    <footer>
      <button onClick={()=> setChangeColor("blue")} >Change Couleur</button>
        <nav className="conteneur" ><a href="informations.html" style={StyleRed}>Informations</a> - <a href="mentionslégales.html">Mentions légales</a> - <a href="Contact.html">Contact</a></nav>
        <p className="conteneur" style={StyleRed}>© 2023 Conception et réalisation par {name} Tous droits réservés.</p>
    </footer>
  )
}

export default Footer