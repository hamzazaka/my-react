
import {useEffect, useState} from 'react'

export default function useFetch(url) {

const [data, setData]=useState(null);
const [isPending,setisPending]=useState(true);
const[error,setError]=useState(null);



      useEffect(()=>{
      fetch(url)
      .then(res=>{
         if (!res.ok) {
             throw Error('helo this is wrong data')
         }
         return res.json()
      })
      .then((data)=>{
          console.log(data);
         setData(data);
          setisPending(false);
          setError(null);
      })
      .catch((err)=>{
        setisPending(false);
        setError(err.message);
      })
    },[url])


    return {data,isPending,error}
}
