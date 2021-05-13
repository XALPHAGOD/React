import React, { useState } from 'react';

const ButtonComponent= ()=>{

    const btnTextArr= ["You Clicked Me", "You Clicked Me Again", "Ouch!", "Don't Touch Me", "Push Me", "Heh, Let's Go", "C'mon Click", "Do It"];
    const btnStyleArr= [{height: "4rem", color: "red", backgroundColor: "greenyellow", fontSize: "30px", borderRadius: "0", cursor: "pointer"}, 
                        {height: "3rem", color: "blue", backgroundColor: "white", fontSize: "20px", borderRadius: "10px", cursor: "pointer"},
                        {height: "5rem", color: "green", backgroundColor: "violet", fontSize: "15px", borderRadius: "15px", cursor: "pointer"},
                        {height: "4.5rem", color: "yellow", backgroundColor: "#0000cc", fontSize: "35px", borderRadius: "20px", cursor: "pointer"}, 
                        {height: "3.5rem", color: "orange", backgroundColor: "#9966ff", fontSize: "25px", borderRadius: "10px", cursor: "pointer"}];

    const [btnText, setBtnText]= useState("Click Me");
    const [btnStyle, setBtnStyle]= useState({height: "3rem", color: "greenyellow", backgroundColor: "red", fontSize: "20px", borderRadius: "20px", cursor: "pointer"});

    const changeStyle= ()=>{
        var x= Math.round(Math.random()*100);
        setBtnText(btnTextArr[x%8]);
        setBtnStyle(btnStyleArr[x%5]);
    }

    return (
        <div style={{height: "20vh", backgroundColor: "steelblue", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button onClick={changeStyle} style={btnStyle}>{btnText}</button>
        </div>
    );
}

export default ButtonComponent;