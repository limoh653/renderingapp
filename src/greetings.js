import React from "react"


function Greetings(props){
if(props.isloggedIn){
    return <h2>Welcome {props.username}</h2>
}
return <h2>Please login to continue</h2>
}
export default Greetings