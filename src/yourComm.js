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

function CreateCommunity(prop) {
    return (
        <div className='friend-box'>
             <h2>{prop.name}</h2>
            <img src={prop.img
            } alt="some"></img>
           
            <button>Enter</button>
            {/* <button>Follow</button> */}
            <button>Leave</button>
        </div>
    );
}

function YOURCOMM() {

    return (
        <div>
            
            <div className='part communities'>  <h1>Your Communities</h1>
                <div className='commu-area'>
                    {propCommunity.map(CreateCommunity)};
                </div>
            </div>
           
          

                </div>
          

            
                          

                                );
}
                                
                                
                                
                                
                                
                                
                                
                                
export default YOURCOMM;