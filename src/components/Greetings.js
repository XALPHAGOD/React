import React from 'react';



const dobj= new Date();

var src1,src2,src3;
// src1= "https://picsum.photos/350/200";
// src2= "https://picsum.photos/300/200";
// src3= "https://picsum.photos/325/200";
const link= "https://picsum.photos/";
// const h3style= {
//   textAlign: "center"
// };

var curDate= new Date();
curDate= curDate.getHours();
// var curDate= 18;
var showRes= "Good Night";
var resStyle= {
  color: "#000099",
  textAlign: "center"
};
if(curDate>=3 && curDate<=11){
  showRes= "Good Morning";
  resStyle.color= "#ff8c1a";
}else if(curDate>=12 && curDate<=16){
  showRes= "Good Afternoon";
  resStyle.color= "#ffff00";
}else if(curDate>=17 && curDate<=20){
  showRes= "Good Evening";
  resStyle.color= "#3399ff";
}



const Greetings= ()=>{
    return (
        <>
            <h3>{`Current Date: ${dobj.toLocaleDateString()} Current Time: ${dobj.toLocaleTimeString()}`}</h3>
            <div className="imgDiv">
                <img src={src1} alt="Server Error"/>
                <img src={src2} alt="Server Error"/>
                <a href={link} target="_">
                <img src={src3} alt="Server Error"/>
                </a>
            </div>
            <h2 style={{color: "blue", textTransform: "capitalize", textAlign: "center"}}>inline css && text transform</h2>



            <h3 style={resStyle}>{showRes}</h3>
        </>
    );
}

export default Greetings;



function FromGreet(){
  return (
    <>
      <h2>function FromGreet() from Greetings.js</h2>
    </>
  );
}

export {FromGreet};