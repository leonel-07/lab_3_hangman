import React from "react";
import { useWord } from "./hooks/useWord";
import { LetterBoardComponent } from "./LetterComponent";

export const WordComponent = ({ listWord })=>{
    return (
        <div className="word">
        {listWord.map((item)=>(<LetterBoardComponent key={item.id} {...item}/>))}
        </div>
    );
};