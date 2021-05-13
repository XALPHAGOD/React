import React from 'react';
import {LeadersData} from '../data/LeadersData';

function Card(prop){
    return (
        <div className="leader_div">
            <img className="leader_img" src={prop.leaderProps.image} alt={prop.leaderProps.name} />
            <div>
                <h5 style={{textAlign : "center"}}>{prop.leaderProps.name}</h5>
                <a href={"https://www.google.com/"+prop.leaderProps.name} target="_" >{prop.leaderProps.designation}</a>
                <p className="leader_desc">{prop.leaderProps.description}</p>
            </div>
            <br/><br/><br/><br/><br/>
        </div>
            
    );
}

function Leaders(){

    return (
        <div className="leaders_div">
            { LeadersData.map( (leader)=> <Card key={leader.id} leaderProps={leader} /> ) }
        </div>
    );
}

export default Leaders;