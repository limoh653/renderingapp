import React from "react"


function Button(props){
if(props.isOn){
    return <h2>The button is ON</h2>
}
return <h2>The button is OFF</h2>
}
export default Button