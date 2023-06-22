import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom" // step 1 jimporte le link

const UseEffectCompo = () => {
  const [data, setData] = useState();
  useEffect(() => {

    axios.get('https://crud-webschool-32dd1a.appdrag.site/api/getAllArticles', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    }).then(function (response) {
      console.log(response.data.Table);
      setData(response.data.Table)
    });

  }, []);

  return (
    <div className='container'>
      <h1>hello uSeEffect</h1>
      {
        data?.map((row) => (
          <Link className='text-decoration-none text-dark' to={`/article/${row.id}`}>
            <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
              <h2>{row.title}</h2>
              <p>{row.articles.slice(0, 500)}...</p>
              <img src={row.imageArticle} className='img-fluid' alt="" />
              <p>{row.auteur}</p>
            </div>
          </Link>
        ))
      }
      <Link to="/">
        <button className="btn btn-primary">retourner a la page initial</button>
      </Link>
    </div>
  )
}

export default UseEffectCompo
