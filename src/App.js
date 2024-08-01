import React from "react";


import Greetings from './greetings.js'
import Button from "./button.js";


function App(){
  return(
    <div>
    < Greetings isloggedIn={true} username="Hesbon"/>
    < Button isOn={true}/>
    
    </div>
  )
}
export default App