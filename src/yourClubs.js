import React from 'react';
import "./index.css";
import img from "./logo3.png"
const propCommunity=[
    {
        name:"CP",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",

    },{
        name:"CP",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",

    },{
        name:"CP",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",

    },{
        name:"CP",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",

    },{
        name:"CP",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",

    },{
        name:"CP",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",

    },{
        name:"CP",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0QBQ9-sYDLtn2f6__6372F7DJCf_2-HJw&usqp=CAU",

    }
]


function CreateClub(prop) {
    return (
        <div className='friend-box'>
             <h2>{prop.name}</h2>
            <img src={prop.img
            } alt="some"></img>
           
            <button>Enter</button>
         
            
        </div>
    );
}
function YOURCLUBS() {

    return (
        <div>
           
            <div className='part clubs'> <h1>Your Clubs</h1>
                <div className='club-area'>
                    {propCommunity.map(CreateClub)}
                    </div></div>
           

              
            </div>

          
                         

                                );
}
                                
 export default YOURCLUBS;                           
                                
                                
                                
                                
                                
                                
