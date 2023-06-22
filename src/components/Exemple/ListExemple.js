import React, { useState } from 'react'

const ListExemple = () => {

    const [list, setList] = useState([ 
      {
        id : 1 ,
        coursLePlusImportant: "React"
      },
      {
        id : 2 ,
        coursLePlusImportant: "html/css"
      },
      {
        id : 3 ,
        coursLePlusImportant: "Javascript"
      }

      ])

  return (
    <div>

        <h1>Application List</h1>
        {
          list.map((item)=>(
            <div key={item.id}>
              le cours le plus important est le : {item.coursLePlusImportant}
            </div>
          ))
        }

    </div>
  )
}

export default ListExemple