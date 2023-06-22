import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, useParams  } from "react-router-dom"

const Article = () => {
    const [data, setData] = useState();
    
    const getParams = useParams();
    console.log(getParams.id);

    let location = useLocation()
    console.log("",location.pathname)
    useEffect(() => {
        axios.get('https://crud-webschool-32dd1a.appdrag.site/api/getApiID', {
            params: {
                "id": getParams.id,
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(function (response) {
            console.log(response.data);
            console.log(response.data.Table);
            setData(response.data.Table[0])
        });
    }, [getParams.id]);
    return (
        <div className='container '>
            <div className="row justify-content-center">
                {data &&
                    <div className="col-10 bg-light shadow rounded-4 m-3 p-3">
                        <div>{data.id}</div>
                        <h1 className='text-center'>{data.title}</h1>
                        <p className='p my-4'>{data.articles}</p>
                        <img src={data.imageArticle} className='img-fluid' alt="" />
                        <p>
                            auteur : {data.auteur}
                        </p>
                    </div>
                }
            </div>

        </div>
    )
}

export default Article
