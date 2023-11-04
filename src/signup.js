import React from "react";
import "./index.css"
function SIGNUP(){
    return (
        <div className="head-signup"> 
        <img src=""></img>
        {/* <center> <h1>SIGN UP</h1></center> */}
        <div className="signup-page">
        
        <div id="signup">
           <div className="left-signup">   <center> <h1>SIGN UP</h1></center>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU"></img></div>
            <div id="signup-items">
        <input placeholder="UserName" ></input>
         <input placeholder="Email"></input>
         <input placeholder="Password"></input>
         <button>Login</button>
            </div></div>
        </div></div>
    );
}
export default SIGNUP;