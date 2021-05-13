import React, { createContext } from 'react';
import ComA from './ComA';

const FirstName= createContext("Abcd");     // Better Way
const LastName= createContext();

export default function Contexts()
{
    return (
        <>
            <h1>Contexts</h1>
            <LastName.Provider value={"Pqrs"}>      {/* Cumbersome due to nesting */}
                <ComA />
            </LastName.Provider>
        </>
    );
}

export {FirstName, LastName};