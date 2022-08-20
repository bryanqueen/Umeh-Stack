import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";


// function AboutMe() {
//   return(
//     <>
//   <h1>About Me</h1>
//   <p>Hi guys my name is Daniel, i am 17 years old and i am a programmer. I code alot but i hate debugging my codes</p>
//     </>
//   )
// }

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
,
  document.getElementById('root')
);


