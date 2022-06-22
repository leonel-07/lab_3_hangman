import React from "react";
import "../styles.css";
const Replay = ({counter,renew})=> {
     if(counter==5){
       return <button className="replayButton" onClick={()=>{
        renew();
       }}>Jugar de nuevo</button>
     }
}
export default Replay;