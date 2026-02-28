import React, { useState } from "react";
import {useFetch} from './useFetch'



const App = () => {
  const [post, setpost] = useState(1)
  const handlePost = ()=>{
       setpost(post => post+1)
  }
  const data = useFetch("https://dummyjson.com/posts/"+post);
  return (
    
    <div>
      

      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <button onClick={handlePost}>Next Post</button>
      
    </div>
  );
};


export default App;
