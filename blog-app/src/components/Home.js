import { useState } from "react";

export default function Home() {
  const [blogs,setBlogs]=useState([
      {title:'My new website',body:'lorem ipsum ......',author:'mario',id:1},
      {title:'Welcome Party',body:'lorem ipsum ......',author:'yoshi',id:2},
      {title:'Web dev Top Tips',body:'lorem ipsum ......',author:'hamza',id:3}
  ]);

    return (
        <div className="home">
            {blogs.map((blog)=>{
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <h2>i am ahamza</h2>
         
                </div>
            })}
        </div>
    )
}
