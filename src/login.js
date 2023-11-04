import React from "react";
import "./index.css"
function LOGIN(){
    return (
        <div id="login">
            <h1>LOGIN</h1>
            <div id="login-items">
         <input placeholder="USER ID"></input>
         <input placeholder="PASSWORD"></input>
         <button>Login</button>
            </div>
        </div>
    );
}
export default LOGIN;