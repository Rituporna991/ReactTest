import Mails from "./Mails"
import { useState } from "react"
import "./YourPostMan.css"
export default function YourPostman({name}){
    const [openmail,setOpenmail]=useState(false);
    const openmailbox=()=>{
        setOpenmail(true);
    }
    return(
        <div className="YourPostMan">
            {!openmail && (
            <>
        <h1>✉️</h1>
          <h4>Hello {name}! </h4>
          <p>Welcome Back!</p>
          <button style={{backgroundColor:"seagreen"}} onClick={openmailbox}>Open your mailbox</button>
            </>
      )}
            {openmail && <Mails/>}
            
        </div>
    )
}