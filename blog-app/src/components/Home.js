import Comment from "./Comment"
export default function Home({title,author,comment}) {
  
    return(
        <div>
        <h2>The title is {title}</h2>
        <h3>The author name is {author}</h3>
        <p>I am a really great writer and i love writing</p>
        <h1>{comment}</h1>
        </div>
    )
}