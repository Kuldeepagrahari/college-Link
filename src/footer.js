import React from 'react';
import "./index.css";
import img from "./logo3.png"

function FOOTER() {

    return (
        <div>
           
           

            <footer id="footer">
            <div id="btn-part">  <h1>Suggest Changes...</h1>  <button>Submit</button></div>
                <div id="form">
                   <div> <label for ="name">Name: </label>
                    <input type="text" name="name"></input></div>
                 <div>   <label for ="email">Email: </label>
                    <input type="email" name="email"></input></div>
                  <div id="textarea">  <label for="comment">Comments: </label>
                    <textarea cols="27" rows="5"name="comment " placeholder='write hare:'></textarea></div>
                  
                                    </div>
                                </footer>
                            </div>

                                );
}
                                
                                
                                
                                
                                
                                
                                
                                
export default FOOTER;