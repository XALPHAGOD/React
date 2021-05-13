import React, { useContext } from 'react';
import {FirstName, LastName} from './Contexts';

const ComC= ()=>{

    const fname= useContext(FirstName); //good way

    return (
        <h1>{fname} <LastName.Consumer>{(lname)=>lname}</LastName.Consumer></h1>
    );
}

export default ComC;