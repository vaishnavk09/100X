/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setdata] = useState({});

  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    
    setdata(res);
  };

  useEffect(() => {
    try{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData();}
    catch(error){
        console.log(error);
    }
  }, [url]);

  return data;
  


};