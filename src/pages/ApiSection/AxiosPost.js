import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import axios from 'axios'

const AxiosPost = () => {

    const code = `  

    axios.post('', {})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

    ` 
    const Handleclick = () => {
      axios.post('', {})
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

export default AxiosPost
