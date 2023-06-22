import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useTranslation } from "react-i18next"

const Portfolio = () => {
  const [data, setData] = useState();
  const { t } = useTranslation()
  useEffect(() => {
    
    console.log("mon composant est montE",process.env)


    axios.get('https://crud-webschool-32dd1a.appdrag.site/api/getPortfolio', {
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
      <h1>{t("Portfolio.title")}</h1>
      { 
        data?.map((row)=>(
          // je place mon link avec les backticks
        
          
          <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
            <h2>{row.title}</h2>
            <p>{row.description}...</p>
            <figure className='text-center'>
              <img src={row.image} className='img-fluid' alt="" />
            </figure>
            
          </div>
         
        ))
      }
    </div>
  )
}

export default Portfolio
