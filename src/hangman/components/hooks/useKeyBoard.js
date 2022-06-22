import { useState } from "react";
export const useKeyBoard = () => {
 const generateKeyBoard = () => { 
    let letters= [];
    for (let i = 0; i < 26; i++) {
      let letter = String.fromCharCode(i + 65);
      //console.log(`este es la key -->${letter}`);
      letters = [...letters, { letter, state: false, id: "key_"+i}];
    }
    return letters;
 };
const [keyState, setKeyState] = useState(generateKeyBoard());
return [keyState, setKeyState];
};