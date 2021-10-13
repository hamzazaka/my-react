import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Create() {

    const [title,setTitle]=useState('')
    const [body,setbody]=useState('')
    const [author,setAuthor]=useState('mario');
    const [isPending,setisPending]=useState(false);
    const history=useHistory();


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};

        setisPending(true)
        
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setisPending(false);
            history.push('/')

        })



    }

    return (
        <div className='create'>
            <h2>New blog goes here</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title: </label>
                <input type="text"
                 required
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                />
                <label >Blog Body: </label>
                <textarea required value={body} onChange={(e)=>setbody(e.target.value)} > </textarea>
                <label >Blog Author: </label>
                <select value={author}
                onChange={(e)=>setAuthor(e.target.value)}> 
                    <option value="mario">Mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending &&<button>Add Blog</button>}
                {isPending &&<button disabled>Add Blog.....</button>}

            </form>
        </div>
    )
}
