import React from "react";
import NAV from "./navbar";
import "./index.css";
function CreateCommPage(){
  return( <div  className="clubpage-first"> <div>
    <NAV></NAV>
        <div className="EachClub-page">
     <div id="club-mem"> <h1>Members</h1></div>
    
     <div id="club-post"></div>
     <div id="club-others">
     <div className="memories most-liked"><h1>Most Liked Post</h1></div>
      <div className="events most-follow"><h1>Most Following</h1></div>
     </div>
            </div> </div>
    </div>);
}
function COMMPAGE(){
    return (
      CreateCommPage()
    );
}
export default COMMPAGE;