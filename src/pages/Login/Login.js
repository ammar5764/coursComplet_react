import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate  } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorAuth, setErrorAuth] = useState(false);

    const handleSubmit = (e) => {
        console.log("onsubmit work")
        e.preventDefault()
        console.log(email, password)
        axios.get('https://crud-webschool-32dd1a.appdrag.site/api/checkUsers', {
            params: {
                "email": email,
                "password": password,
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(function (response) {
            console.log(response.data.Table[0].token);
            if (response.data.Table.length === 0) {
                console.log("auth error")
                setErrorAuth(true)
            }else{
                setErrorAuth(false)
                console.log("auth reussi")
                localStorage.setItem("tokenBlog",response.data.Table[0].token )
                navigate("/")
            }
        });
    }

    const handleEmail = (e) => {
        console.log(e)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
         console.log(e.target.value)
        setPassword(e.target.value)
    }

    return (
        <div className='container bg-secondary'>
            <div className="row justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="col-6 rounded shadow bg-light">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" value={email} onChange={handleEmail} required />
                        </div>
                        <div>
                            <label htmlFor="">password</label>
                            <input type="password" value={password} onChange={(e)=>  setPassword(e.target.value) } required />
                        </div>
                        <button type="submit">Se connecter</button>
                    </form>
                    { errorAuth &&
                    <h1 className='text-danger'>mauvais user ou mot de pase</h1>
                     }
                </div>
            </div>

        </div>
    )
}

export default Login
