import React, {useState} from 'react'
import "./Header.css"
const Header = (props) => {
  console.log("props depuis Header", props)
  const [changeColor, setChangeColor] = useState("red");
  

  return (
    <div className="conteneur">
        <div className="normal-flex">
        <div className="haut-gauche"  >
            <h1 className={`text-${changeColor}`} onClick={()=> setChangeColor("blue")} > {props.name} </h1>
            <strong><span>C</span>ommunication</strong> 
            <strong><span>M</span>arketing</strong> 
            <strong><span>D</span>igital</strong>
        </div>
        <div className="haut-droit">
            <a href="/">Télécharger mon c.v.</a>
        </div>
        </div>
  </div> 
  )
}

export default Header


  // console.log("props Header", props) {props.name}