import React, { useEffect, useState } from "react";
import "./styles.css";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { WordComponent } from "./components/WordComponent";
import DrawComponent from "./components/DrawComponent";
import { useWord } from "./components/hooks/useWord";
import { useCounter } from "./components/hooks/useConter";
import Replay from "./components/Replay";
export const HangManComponet = () => {
  const [listWord, setListWord,ifContains, isTrue] = useWord("leonel");
  const [conter,incrementCounter,resetConter]=useCounter();
  const handlerKeyPress = (key) => {
    console.log(key);
    ifContains(key);
    if (!isTrue(key)){
      incrementCounter();
    }
    console.log(isTrue(key));
  }
    return (
        <div>
          <h1>HangMan</h1>
          <hr/>
          <DrawComponent counter = {conter}/>
          <WordComponent listWord={listWord}/>
          <Replay counter = {conter} renew = {resetConter}/>
          <KeyBoardComponent handlerKeyPress={handlerKeyPress}/> 
        </div>
    );

};