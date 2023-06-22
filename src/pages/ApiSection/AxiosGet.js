import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import axios from 'axios'

const PresUseEffect = () => {

    const code = `  
    const Handleclick = () => {
      axios.get('')
      .then(res => {
        console.log(res) // ici on gerera notre reponse
      })
      .catch(err => {
        console.log(err) // ici on agira en fonction de notre erreur
      })
    }
    ` 
    const Handleclick = () => {
      axios.get('')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }

    return (
        <>
            <NavbarOffCanva />
            <div className="container">
                <h1>faire un get avec Axios</h1>
                <button onClick={()=> Handleclick()}>get une data</button>
                <div className="bg-dark text-light p-5 rounded-4">
                    <pre>{code}</pre>
                </div>
            </div>
        </>
    )
}

export default PresUseEffect
