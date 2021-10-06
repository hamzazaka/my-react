export default function Greeting(props) {
    console.log(props);
    return(
<div>
      <h1>hello from Greeting {props.name}</h1>
      <h2>I am {props.age} years old</h2>
      </div>
    )
}