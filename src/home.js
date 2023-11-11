import React from 'react';
import "./index.css";
import NAV from './navbar';
import FOOTER from './footer';
import img from "./logo3.png"

function HOME() {

    return (
        <div>
<div className='homepage-first'>
    <NAV></NAV>
    <div className='home-page'>
    <div id="club-mem"> <h1>Members</h1></div>
    
    <div id="club-post"></div>
    <div id="club-others">
    <div className="memories most-liked"><h1>Most Liked Post</h1></div>
     <div className="events most-follow"><h1>Most Following</h1></div>
    </div>
           {/* </div> */}
    </div>
    <FOOTER></FOOTER>
</div>
        </div>

    );
}








export default HOME;