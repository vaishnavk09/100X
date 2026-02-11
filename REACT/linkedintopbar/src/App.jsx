import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [Tab, setTab] = useState("Feed")

  useEffect(()=>{
console.log("sent backend request for ",Tab);

  },[Tab])


  return (
    <div className='main'>
      <button  onClick={()=>{setTab("Feed")}}
      style={{color: Tab=='Feed' ? "red" : "white"}}>Feed</button>
      
      <button onClick={()=>{setTab("Messages")}} style={{color: Tab=='Messages' ? "red": "white"}}>Messages</button>


      <button onClick={()=>{setTab("Notification")}} style={{color: Tab=='Notification' ? "red": "white"}}>Notification</button>

      <button onClick={()=>{setTab("Profile")}} style={{color: Tab=='Profile' ? "red": "white"}}>Profile</button>

    </div>
  )
}

export default App