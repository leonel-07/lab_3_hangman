import React from "react";
//import "../styles.css";
const ItemKeyComponent = ({letter,id,state,handlerClick})=>{
    //console.log("este es el key -->"+letter);
    return (
        <div className="flex-container">
           <div
              className={state ? "disablediv" : ""}
              onClick={() => {
              handlerClick(letter);
             console.log("entro");
              }}
           >
              {letter}
           </div>
        </div>
);
}
export default ItemKeyComponent;