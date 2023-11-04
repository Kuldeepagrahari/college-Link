import React from "react";
import "./index.css";
function REGISTER()
{
return (
<div className="reg-page">
        <h1>SIGN UP</h1>
<form>
<p>
            <label>Username: <input type="text" /></label></p>
 
        
        <p>
            <label>Email: <input type="email" /></label></p>
 
        <p>
            <label>Password: <input type="password" /></label>
        </p>
        <p>
            <label>Year of Course: <input type="text" /></label></p>
          <label>Course: <select name="course">
            <option value="btech">BTech</option>
            <option value="bdes">BDes</option>
            <option value="mtech">MTech</option>
            <option value="mdes">MDes</option>
            <option value="phd">PHD</option>
        </select></label> 
        <label>Branch: <select name="branch">
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="mechanical">Mechanical</option>
            <option value="smart">SM</option>
            <option value="other">Other</option>
        </select></label> 
        <p>
            <label>Your Clubs: <input type="text" /></label>
        </p>
        <p>
            <label>Mention your Skills: <input type="password" /></label>
        </p>
       <label>About Yourself: <textarea name="about" rows="3"
                  cols="40" placeholder="write from here">
              
          </textarea></label>
        <p>
            <button type="submit">submit</button>
        </p>
</form>

    </div>
);
}
export default REGISTER;