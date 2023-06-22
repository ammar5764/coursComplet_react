import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'

const PresUseEffect = () => {

    const code = `  
    import React, { useRef, useState } from 'react'
    import axios from "axios"
    
    const DeleteArticle = () => {
    
      const inputRef = useRef(null)
      const [messageSuccess, setMessageSuccess] = useState(false);
      const [messageError, setmessageError] = useState(false);
      // console.log(inputRef)
    
      const handleSubmit = (e) => {
        console.log("ma fonction est declenchE")
        e.preventDefault()
    
        console.log(inputRef.current.value)
    
        axios.get('https://crud-webschool-32dd1a.appdrag.site/api/deleteArticle2', {
          params: {
            "id": inputRef.current.value
          }
        }).then(function (response) {
          console.log(response.data);
          if (response.data.affectedRows > 0) {
            setMessageSuccess(true)
            setmessageError(false)
          }else{
            setmessageError(true)
            setMessageSuccess(false)
          }
          
        });
      }
    
      return (
        <div>
          <h1> DeleteArticle</h1>
    
          <form onSubmit={handleSubmit} >
            <label htmlFor=""> Id de mon article</label>
            <input style={{backgroundColor : "red"}} type="text" ref={inputRef} />
            <input type="submit" value="Supprimer" />
            { messageSuccess &&
              <h2 className="text-success">Larticle a ete supprime</h2>
            }
            {messageError &&
              <h2 className="text-warning">larticle na pas ete supprime</h2>
            }
    
          </form>
              
        </div>
      )
    }
    
    export default DeleteArticle
    
    `

    return (
        <>
            <NavbarOffCanva />
            <div className="container">
                <h1>Presentation du UseRef</h1>
                <div className="bg-dark text-light p-5 rounded-4">
                    <pre>{code}</pre>
                </div>
            </div>
        </>
    )
}

export default PresUseEffect
