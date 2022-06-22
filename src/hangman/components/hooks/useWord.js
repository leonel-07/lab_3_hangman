import React from "react";
import { useState } from "react";
export const useWord = (word) => {
    const listLetters = word.split("").map((item, index)=>{
        item = item.toUpperCase();
        item = {letter:item, status: false, id: "letter_"+ index};
        return item;
    });
    const [listWord, setListWord] = useState(listLetters);
    const ifContains = ( letter) => {
    const newListWord = listWord.map((item)=>{
        if (item.letter === letter && item.status === false){
            item.status = true;
        }
        return item;
    });
    setListWord(newListWord);
    };
    const isTrue = ( letter) => {
        for (let i = 0; i < listWord.length; i++){
            let item = listWord[i];
            console.log("comp"+letter+"item->"+item.letter);
            if (item.letter === letter ){
                return true;
            }
        }
        return false;
        };
    return [listWord, setListWord, ifContains, isTrue];
};