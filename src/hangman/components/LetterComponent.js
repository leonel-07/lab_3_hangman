import React from "react";
export const LetterBoardComponent = ({letter, status})=>{
    return (
        <div>{status ? letter : "?"}</div>
    );
};