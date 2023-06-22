import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AddArticle = () => {
    const [stateForm, setStateForm] = useState({
        title: "",
        articles: "",
        auteur: ""
    });

    const [messageSuccess, setmessageSuccess] = useState(false);
    const [messageError, setmessageError] = useState(false);
    const [badAuth, setBadAuth] = useState(false);

    useEffect(() => {
        console.log("stateForm",stateForm)
    }, [stateForm]);

    const handleSubmit = () => {
        console.log("stateForm", stateForm)

        console.log(localStorage.getItem("tokenBlog"))

        axios.get('https://crud-webschool-32dd1a.appdrag.site/api/checkToken', {
            params: {
                "token": localStorage.getItem("tokenBlog"),
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(function (response) {
            console.log(response.data.Table.length);
            if (response.data.Table.length > 0) {
                axios.get('https://crud-webschool-32dd1a.appdrag.site/api/addArticle', {
                    params: {
                        "title": stateForm.title,
                        "auteur": stateForm.auteur,
                        "articles": stateForm.articles
                    }
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data.affectedRows > 0) {
                        setmessageSuccess(true)
                        setmessageError(false)
                    } else {
                        setmessageError(true)
                        setmessageSuccess(false)
                    }
                });
            } else {
                setBadAuth(true)
            }
        });




    }

    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="col-8 border border-dark shadow">

                    <div>
                        <label htmlFor="">title</label>
                        <input type="text" value={stateForm.title} onChange={(e) => setStateForm((prevState) => ({ ...prevState, title: e.target.value }))} />
                    </div>
                    <div>
                        <label htmlFor="">article</label>
                        <input type="text" value={stateForm.articles} onChange={(e) => setStateForm((prevState) => ({ ...prevState, articles: e.target.value }))} />
                    </div>
                    <div>
                        <label htmlFor="">auteur</label>
                        <input type="text" value={stateForm.auteur} onChange={(e) => setStateForm((prevState) => ({ ...prevState, auteur: e.target.value }))} />
                    </div>

                    <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary">Validez pour ajouter un article</button>
                    {messageSuccess &&
                        <h1 className="text-success">Bravo un article a ete ajoute</h1>
                    }
                    {messageError &&
                        <h1 className="text-danger">Oups l'article n'est pas ajoute</h1>
                    }
                    {badAuth &&
                        <h1 className="text-danger">mauvaise auth</h1>
                    }


                </div>
            </div>
        </div>
    )
}

export default AddArticle
