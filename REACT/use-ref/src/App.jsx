import React from 'react'
import { useState,useRef } from 'react'


const App = () => {

  const [time, settime] = useState(1)
  let timer = useRef()

  const startTimer = () => {

    let value = setInterval(function () {
      settime(c => c+1)
    }, 1000)

    timer.current = value
    
  
  }

  const stopTimer = () => {

    clearInterval(timer.current)
  }

  return (
    <div>
      {time}
      <br />
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </div>
  )
}

export default App