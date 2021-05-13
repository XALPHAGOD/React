import React from 'react';

function Component1(props){
    // console.log(props);
    return (
        <>
            <h1>This is Component1</h1>
            <p>function name should be same as component name</p>
            <p>{props.prop2}    {props.prop1}   {props.prop3}</p>
            <p>Prop name should be same as defined</p>
        </>
    );
}

export default Component1;      //exporting component