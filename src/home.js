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
function CreateClub(prop) {
    return (
        <div className='friend-box'>
             <h2>{prop.name}</h2>
            <img src={prop.img
            } alt="some"></img>
           
            <button>Enter</button>
            {/* <button>Follow</button> */}
            
        </div>
    );
}
function HOME() {

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
            <div className='part friend'>
                <h1>Your Friends</h1>
                <div className='friend-area'>
                    {propFriend.map(CreateFriend)};
                </div></div>
            <div className='part communities'>  <h1>Your Communities</h1>
                <div className='commu-area'>
                    {propCommunity.map(CreateCommunity)};
                </div>
            </div>
            <div className='part clubs'> <h1>Your Clubs</h1>
                <div className='club-area'>
                    {propCommunity.map(CreateClub)}
                    </div></div>
            <div className='part Allclub' id='club-sec'>  <h1>ALL  CLUBS</h1>
                <div></div>
            </div>
            <div className='part Allcommunities' id="comm-sec">  <h1>ALL  COMMUNITIES</h1>
                <div>

                </div>
            </div>

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
                                
                                
                                
                                
                                
                                
                                
                                
export default HOME;