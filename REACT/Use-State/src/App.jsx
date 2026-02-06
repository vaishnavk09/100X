import React, { useState } from 'react'

const App = () => {
 

  return (
   <SizeGola />

  )
}

const SizeGola=()=>{
   const [size, setsize] = useState('100px')
 
  const increase = () => {
    setsize(parseInt(size) + 100 + 'px')
  }
  return (
  <div style={{ width: size, height: size, backgroundColor: 'lightblue', borderRadius: '50% 50% 50% 50%' }}>
      <button onClick={increase}>make it Large</button>
    </div>
  )
}
export default App