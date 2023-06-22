import React, { useState } from 'react'

const ExempleState = () => {
   
    const [text, setText] = useState("Hello, world!");
    const [count, setCount] = useState(0);
    const [list, setList] = useState([ ]);
    const [person, setPerson] = useState({ name: "John", age: 30 });
    const [error, setError] = useState(true);
 
  return (
    <div>
         <p>{text}</p>

         <p>Count: {count}</p>

         {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

        <p>Age: {person.age}</p>

        { error === true &&
            <p> il y'a une erreur </p>
        }

    </div>
  )
}

export default ExempleState