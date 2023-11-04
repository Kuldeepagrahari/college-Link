import React from "react";
import commdet from "./allComm";

import "./index.css"

function CreateComm(prop) {
    return (
        <div className='clubs'>
             <h1>{prop.name}</h1>
        <div className="lower">    <img src={prop.img
            } alt="some"></img>
       <div className="last-box">
          <div className="countClub">
             <h3>{prop.members} members</h3>
          <h3>{prop.followers} followers</h3>
         </div> 
          <div className="buttons"> 
           <button>Enter</button>
           <button>Add</button>
            <button>Follow</button></div>
            </div></div>
            
        </div>
    );
}
function COMMUNITIES(){
    return (
        <div className="club-page">
            <center> <h1>ALL COMMUNITIES</h1></center> 
        <div id="clubs">
          
          {commdet.map(CreateComm)};
        </div></div>
    );
}
export default COMMUNITIES;