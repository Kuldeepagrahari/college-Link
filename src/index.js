import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LOGIN from "./login"
import HOME from "./home";
import CLUBS from "./clubs";
import COMMUNITIES from './communities';
import App from './App';
import SIGNUP from "./signup";
import CHAT from "./chat";
import REGISTER from "./register";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  {/* <HOME></HOME> */}
 {/* <REGISTER></REGISTER> */}
 {/* <LOGIN></LOGIN> */}
{/* <CHAT></CHAT> */}
  <SIGNUP></SIGNUP>
  {/* <CLUBS></CLUBS> */}
  {/* <COMMUNITIES></COMMUNITIES> */}
 
 </div>,
 document.getElementById("root")
);

