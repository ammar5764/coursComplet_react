import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import MouseMove from "../../components/MouseMove/MouseMove"

const UseEffectVide = () => {

    const code = `  
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            console.log("event",event)
        setPosition({ x: event.clientX, y: event.clientY });
        console.log("position",{ x: event.clientX, y: event.clientY })
        };

        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {   // La fonction de nettoyage est définie ici
        // Suppression de l'écouteur d'événements lors du démontage du composant
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); 

    return (
        <div>
            <Link to="/">
                <button className="btn btn-danger">retour</button>
            </Link>
            <p>Position de la souris :</p>
            <p>
                X: {position.x}, Y: {position.y}
            </p>
        </div>
  );
    `

    return (
        <>
            <NavbarOffCanva />
            <div className="container">
                <h1>Presentation du useEffect avec un return</h1>
                  <p>Ce useEffect s'activera a chaque fois que le composant est demonté</p>
                  <p>Exemple de demontage : changement de page</p>
                  <p>Pour bien comprendre l'interet de ce hooks, ouvrez votre console, supprimez le return et changer de page </p>
                    <p>Vous pourrez constater que le addEventListener joue toujours en tache de fond, et utilise de la memoire</p>
              
                <div className="bg-dark text-light p-5 rounded-4">
                    <pre>{code}</pre>
                </div>
            </div>
            <MouseMove />

        </>
    )
}

export default UseEffectVide
