import React, { useState } from 'react';

const FormComponent= ()=>{

    const [userName, updUserName]= useState("");  // no/undefined or empty string or null initialization, prefer not to use null
    const [userPassword, updUserPassword]= useState("");
    const [disp, updDisp]= useState(""); 

    const updName= (eventObj)=>updUserName(eventObj.target.value);
    const updPass= (event)=>updUserPassword(event.target.value);
    const submitClicked= (event)=>{
        event.preventDefault();
        console.log(userPassword);
        updDisp(userName);
    }





    const [userInfo, updUserInfo]= useState({
        username: "",
        email: "",
        contact: "",
        password: ""
    });
    const updInfo= (eventObj)=>{
        
        // const fieldName= eventObj.target.name;
        // const value= eventObj.target.value;

        const {name: fieldName,value}= eventObj.target;        //object destructuring

        // console.log(eventObj.target.name);
        
        updUserInfo((prevState)=>{
            // console.log(prevState);
            return {
                ...prevState,       //return prevState with updated values
                [fieldName]: value      //prevState value updated with currValue
            };
        });
    }
    const submitInfo= (evObj)=>{
        evObj.preventDefault();
        console.log(userInfo);
    }

    return (
        <>
            <div style={{margin: "5rem", height: "35rem", backgroundColor : "blueviolet", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h1>Hello {disp}</h1>
                <form onSubmit={submitClicked} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <input type="text" onChange={updName} placeholder="Enter Your Name" style={{width: "20rem", height: "2rem", margin: "1rem", textAlign: "center", outline: "none"}} />
                    <input type="password" onChange={updPass} placeholder="Enter Password" style={{width: "20rem", height: "2rem", margin: "1rem", textAlign: "center", outline: "none"}} />
                    <button type="submit" style={{width: "5rem", height: "2rem", textAlign: "center", textTransform: "uppercase", fontSize: "medium", color: "whitesmoke", backgroundColor: "blueviolet", borderRadius: "5px", border: "2px solid white"}}>Submit</button>
                </form>
            </div>



            <div style={{margin: "5rem", height: "35rem", backgroundColor : "blueviolet", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <form onSubmit={submitInfo} 
                style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

                    <input type="text" 
                    name="username" 
                    value={userInfo.username} 
                    onChange={updInfo} 
                    placeholder="Username" 
                    autoComplete="off" 
                    style={{width: "20rem", height: "2rem", margin: "1rem", textAlign: "center", outline: "none"}} />

                    <input type="text" 
                    name="email" 
                    value={userInfo.email} 
                    onChange={updInfo} 
                    placeholder="Email" 
                    autoComplete="off" 
                    style={{width: "20rem", height: "2rem", margin: "1rem", textAlign: "center", outline: "none"}} />

                    <input type="number" 
                    name="contact" 
                    value={userInfo.contact} 
                    onChange={updInfo} 
                    placeholder="Contact No." 
                    autoComplete="off" 
                    style={{width: "20rem", height: "2rem", margin: "1rem", textAlign: "center", outline: "none"}} />

                    <input type="password" 
                    name="password" 
                    value={userInfo.password} 
                    onChange={updInfo} 
                    placeholder="Password" 
                    autoComplete="off" 
                    style={{width: "20rem", height: "2rem", margin: "1rem", textAlign: "center", outline: "none"}} />

                    <button type="submit" 
                    style={{width: "5rem", height: "2rem", textAlign: "center", textTransform: "uppercase", fontSize: "medium", color: "whitesmoke", backgroundColor: "blueviolet", borderRadius: "2px", border: "2px solid white"}}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default FormComponent;