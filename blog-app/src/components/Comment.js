export default function Comment(props) {
    let mycomment=['hello this is great','hi is hello']
    return(
        <div>{mycomment.map((aa)=>{
            return (
                <h2>{aa}</h2>
            )
        })}</div>
    )
}