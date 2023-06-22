import React, {useState, useEffect} from 'react'

const CountInterval = () => {

    const [time, setTime] = useState(0);
    
    useEffect(() => {

        const SetIntervalId = setInterval(()=> {
            setTime((prevstate) => {
                console.log(prevstate)
                return prevstate +1
            }   )
        }, 1000 )

        return ()=> clearInterval(SetIntervalId)

    }, []);

  return (
    <div>
      <h1>mon compteur tourne depuis : {time}    </h1>
    </div>
  )
}

export default CountInterval
