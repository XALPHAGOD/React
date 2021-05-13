import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

// const User= (props)=>{
//     const {params}= props.match;
//     // console.log(params);
//     return (
//         <h1>Hello {params.param1} {params.param2}</h1>
//     );
// }

const User= ()=>{

    const params= useParams();
    // console.log(params);

    const loc= useLocation();
    // console.log(loc);

    const hist= useHistory();       //try not to use as it is mutable
    // console.log(hist);

    return (
        <h1 className="mt-5 text-center">Hello {params.param1} {params.param2} Path= {loc.pathname} {(loc.pathname === "/user/secret/page")?<button onClick={()=>{alert("useHistory().goBack()");hist.goBack();}}>/wp-admin</button>:null}</h1>
    );
}

export default User;