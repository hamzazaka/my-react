import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

export default function Home() {

  const [blogs,setBlogs]=useState(null);
//   const [isPending,setisPending]=useState(true);


    useEffect(()=>{
      fetch('http://localhost:8000/blogs')
      .then(res=>{
          return res.json()
      })
      .then((data)=>{
          console.log(data);
          setBlogs(data);
        //   setisPending(false)
      })
    },[])


    return (
        <div className="home">
            {/* {isPending && <div> Loading ...</div>} */}
           {blogs && <Bloglist blogs={blogs} title='All Blogs!'/>
            }


        </div>
    )
}
