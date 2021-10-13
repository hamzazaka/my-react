import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

export default function Home() {

  const [blogs,setBlogs]=useState(null);
  const [isPending,setisPending]=useState(true);
  const[error,setError]=useState(null);


    useEffect(()=>{
    
      fetch('http://localhost:8000/blogs')
      .then(res=>{
         if (!res.ok) {
             throw Error('helo this is wrong data')
         }
         return res.json()
      })
      .then((data)=>{
          console.log(data);
          setBlogs(data);
          setisPending(false);
          setError(null);
      })
      .catch((err)=>{
        setisPending(false);
        setError(err.message);
      })
    },[])


    return (
        <div className="home">
            {error && <div>{error} </div>}
            {isPending && <div> Loading ...</div>}
           {blogs && <Bloglist blogs={blogs} title='All Blogs!'/>
            }


        </div>
    )
}
