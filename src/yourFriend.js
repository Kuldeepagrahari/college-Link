import React from 'react';
import "./index.css";
import img from "./logo3.png"

const propFriend = [
    { name: "kuldeep",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",
     email: ""},
     {
         name:"sam",
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",
         email:""
 
     },
     {
         name:"sam",
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",
         email:""
 
     },
     {
         name:"sam",
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",
         email:""
 
     },
     {
         name:"sam",
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",
         email:""
 
     },
     {
         name:"sam",
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",
         email:""
 
     },
     {
         name:"sam",
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",
         email:""
 
     }
 ];
 function CreateFriend(prop) {
     return (
         <div className='friend-box'>
              <h2>{prop.name}</h2>
             <img src={prop.img
             } alt="some"></img>
            
             <button>Chat</button>
             <button>Profile</button>
             <button>UnFollow</button>
         </div>
     );
 }
 function YOURFRIENDS() {

    return (
        <div>
          
            <div className='part friend'>
                <h1>Your Friends</h1>
                <div className='friend-area'>
                    {propFriend.map(CreateFriend)};
                </div></div>
            
                            </div>

                                );
}
                                
      export default YOURFRIENDS ;