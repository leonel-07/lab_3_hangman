import React from "react";
import { useKeyBoard } from "./hooks/useKeyBoard";
import ItemKeyComponent from "./ItemKeyComponent";
export const KeyBoardComponent = ({handlerKeyPress}) =>{
    const [keyState, setKeyState] = useKeyBoard();
    const handlerClick = (key) => {
    const newState = keyState.map((item) => {
         const { key:keylist}=item;
         if (key === keylist) {
          item.state = true;
         }
        return item;
    });
    setKeyState(newState);
    handlerKeyPress(key);
    };
return (
  <div className="flex-container" >
  {keyState.map((item) => (
  <ItemKeyComponent
  id={item.id}
  letter={item.letter}
  state={item.state} 
  handlerClick={handlerClick}
  />
  ))}
  </div>
);
};