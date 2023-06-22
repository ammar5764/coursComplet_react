import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import List from "../../components/List/List"

const UseStateList = () => {

    const code = `const List = () => {

        const [list, setList] = useState([{
            id: 1, 
            coursImportant :  "React js "
        }, {
            id: 2, 
            coursImportant :  "html css"
        }, {
            id: 3, 
            coursImportant :  "vanilla javascript"
        }]);
    
    
    
      return (
        <div>
          <h1>List des cours les plus importants</h1>
          {
            list.map((cour, index)=> (
                <div key={index}>
                    {cour.coursImportant}
                </div>
            ))
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
                <List />
            </div>
        </>
    )
}

export default UseStateList
