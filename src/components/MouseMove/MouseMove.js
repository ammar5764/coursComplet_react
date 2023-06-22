import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log("event", event)
      setPosition({ x: event.clientX, y: event.clientY });
      console.log("position", { x: event.clientX, y: event.clientY })
    };

    window.addEventListener('mousemove', handleMouseMove);

    // La fonction de nettoyage est définie ici
    return () => {
      // Suppression de l'écouteur d'événements lors du démontage du composant
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Le tableau vide [] indique que l'effet doit être exécuté une seule fois (au montage du composant)

  return (
    <div>
      <Link to="/">
        <button className="btn btn-danger">retour a l'accueil</button>
      </Link>
      <p>Position de la souris :</p>
      <p>
        X: {position.x}, Y: {position.y}
      </p>
    </div>
  );
};

export default MouseTracker;