import React, { useRef, useState } from 'react'

const App = () => {
const [val, setval] = useState(0)
    let input=useRef(null)
    let count=useRef(0)
    const handleFocus=()=>{
        input.current.focus()
        count.current+=1
        setval(count.current)
    } 
    
    

    
  return (
    <div>
<input  ref={input} type="text" placeholder='FOCUSSSSS!'/>

<button onClick={handleFocus}>FOCUS</button> 

<br />
<h1>{val}</h1>


    </div>
  )
}

export default App