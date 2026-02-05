import React from 'react'
import {useEffect, useState} from 'react'

const App = () => {

  const [time, settime] = useState(0)

 useEffect(() => {
  setInterval(()=>{

    settime(time=> time+1)

  },1000)
 }, [])

  return (
    <div>
      <h1>hi there</h1>
      <h1>{time}</h1>
      
    </div>
  )
}

export default App