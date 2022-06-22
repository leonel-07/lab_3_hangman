import React, { useState } from "react";
export const useCounter = (initCounter = 0) => {
const [counter, setCounter] = useState(initCounter);
const incrementCounter = (step = 1) => {
if (counter < 5) {
setCounter(counter + step);
}
};
const resetCounter = () => {
setCounter(initCounter);
};
return [counter, incrementCounter, resetCounter];
};