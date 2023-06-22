import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import Counter from "../../components/Counter/Counter"

const UseStateNumber = () => {


    const code = `const Counter = () => {

        const [counter, setCounter] = useState(5);
      
        const Increment = () => {
            setCounter(counter +1)
        }
        const Decrement = () => {
            setCounter(counter -1)
        }
        const Reset = () => {
            setCounter(0)
        }
    
    
        return (
            <div>
                <div> {counter}</div>
                <button  onClick={()=> Increment()}  >Increment +</button>
                <button onClick={()=> Decrement()}>Decrement -</button>
                <button onClick={()=> Reset()}>Reset</button>
            </div>
        )
    }
    `

    return (
        <>
            <NavbarOffCanva />
            <div className="container">
                <h1>Presentation du UseState</h1>
                <p>useState est une fonction de la bibliothèque React qui permet de créer et de gérer des états locaux dans des composants fonctionnels.</p>
                <div className="bg-dark text-light p-5 rounded-4">
                    <pre>{code}</pre>
                </div>
                <Counter />
            </div>
        </>
    )
}

export default UseStateNumber
