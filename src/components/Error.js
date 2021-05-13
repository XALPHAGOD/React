import React from 'react';
import { useHistory } from 'react-router';

const Error= ()=>{
    const hist= useHistory();
    return (
        <div className="p-0 m-0 w-100 d-flex flex-column justify-content-center align-items-center" style={{minHeight: "90vh", backgroundColor: "#273c75", color: "#1d88c1"}}>
            <h1>Oops! Page Not Found</h1>
            <button className="btn btn-warning mt-3" onClick={()=>hist.goBack()}>Back</button>
        </div>
    );
}

export default Error;