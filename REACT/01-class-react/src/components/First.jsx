import React from 'react'
import { useState } from 'react'
const First = () => {
  const [count, setcount] = useState(0);

return(


    <div>
        <h1>{count}</h1>
        <button onClick={() => setcount (count + 1)}> click me </button>
    </div>
  )
}

export default First