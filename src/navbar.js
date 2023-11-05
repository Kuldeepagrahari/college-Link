import React from 'react';
import "./index.css";
import img from "./logo3.png"

function NAV() {

    return (
        <div>
            <header>
                <div id="logo"><img src={img} alt='logo'></img></div>
                <nav>
                    <div className='nav-items'>
                        <a href="" className='material-symbols-outlined'>home</a>
                        <a href="#club-sec">Clubs</a>
                        <a href="#comm-sec">Communities</a>
                      
                        <a href="#footer">Feedback</a>
                        <a href="">LOGIN</a>
                      <div id="profile"> <a href="" className='material-symbols-outlined'>account_circle</a></div> 
                    </div>

                </nav>
            </header>
                             </div>

                                );
}
                                
                                
                                
                                
                                
                                
                                
                                
export default NAV;