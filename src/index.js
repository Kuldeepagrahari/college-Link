import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LOGIN from "./login"
import HOME from "./home";
import CLUBS from "./clubs";
import NAV from "./navbar";
import COMMUNITIES from './communities';
import App from './App';
import FOOTER from './footer';
import SIGNUP from "./signup";
import CLUBPAGE from "./clubPage";
import COMMPAGE from './commPage';
import CHAT from "./chat";
import YOURCLUBS from './yourClubs';
import YOURCOMM from './yourComm';
import YOURFRIENDS from './yourFriend';
import REGISTER from "./register";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <HOME></HOME>
 {/* <REGISTER></REGISTER> */}
 {/* <LOGIN></LOGIN> */}
{/* <CHAT></CHAT> */}
  {/* <SIGNUP></SIGNUP> */}
  {/* <CLUBS></CLUBS> */}
    {/* <NAV></NAV> */}
  {/* <COMMUNITIES></COMMUNITIES> */}
  {/* <NAV></NAV> */}
  {/* <CLUBPAGE></CLUBPAGE> */}
  {/* <NAV></NAV> */}
{/* <YOURFRIENDS></YOURFRIENDS> */}
{/* <FOOTER></FOOTER> */}

 
 </div>,
 document.getElementById("root")
);

