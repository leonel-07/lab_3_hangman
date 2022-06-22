import React from 'react';
import ReactDOM from 'react-dom/client';
import { HangManComponet } from './hangman/HangMnaComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HangManComponet/>
  </React.StrictMode>
);