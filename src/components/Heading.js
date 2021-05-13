import React from 'react';

function Heading(){
    
const jhj= "JS inside HTML inside JSX";
const tempLit= 'Literals';

    return (
        <>
            <h1 className="heading">Using ReactDOM</h1>   {/* contentEditable="true" attribute */}
            <h2>{jhj} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Random= {Math.round(Math.random()*Math.pow(10,Math.round(Math.random()*10)))}  {console.log('No check conditions')}</h2>
            <h2>Tem{`plate ${tempLit}`}</h2>
        </>
    );
}

export default Heading;



const anyHead= "Not export default then see from Heading.js";

export {anyHead};