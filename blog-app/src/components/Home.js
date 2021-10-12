import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

export default function Home() {
  const [blogs,setBlogs]=useState([
      {title:'My new website',body:'lorem ipsum ......',author:'mario',id:1},
      {title:'Welcome Party',body:'lorem ipsum ......',author:'yoshi',id:2},
      {title:'Web dev Top Tips',body:'lorem ipsum ......',author:'mario',id:3}
  ]);

  const [name,setName]=useState('mario')


    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs)
    }

    useEffect(()=>{
      console.log('use effect ran');
      console.log(blogs);
    },[])

    return (
        <div className="home">
            <Bloglist blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
            <button onClick={()=>setName('hamza')}>Change name</button>
            <p>{name}</p>


        </div>
    )
}
