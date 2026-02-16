import React from 'react'
import { useState } from 'react'

const App = () => {
  return (
    <div>
      <ToggleMessage />

    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setisVisible] = useState(true);

  function toggleMessage() {
    setisVisible(!isVisible);
}

return (
  <div>
    <button onClick={toggleMessage}>Toggle Message</button>
    {isVisible && <p>This message is conditionally rendered.</p>}
  </div>
);
};

export default App