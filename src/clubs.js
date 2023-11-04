import React from "react";
import CLUBDET from "./AllClubs"
import "./index.css"

function CreateClub(prop) {
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
            <button>Follow</button></div>
            </div></div>
            
        </div>
    );
}
function CLUBS(){
    return (
        <div className="club-page">
            <center> <h1>ALL CLUBS</h1></center> 
        <div id="clubs">
          
          {CLUBDET.map(CreateClub)};
        </div></div>
    );
}
export default CLUBS;