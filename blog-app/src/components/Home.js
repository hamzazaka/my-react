import { useState } from "react";

export default function Home() {
  const [name,setName]  =useState('hamza');
  const [age,setAge]=useState(23);
  let ages=[22,23,34,55,45,65];

    // let name ='hamza';
    const handleClick=()=>{
       setName('hasnat')
       setAge(35)
       console.log(name);
    }

    return (
        <div className="home">
            <h2>HOme page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={()=>{handleClick()}} >Click me</button>
        </div>
    )
}
