import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const ReactHooks= ()=>{

    const classes = useStyles();

    const [counter, nextCount]= useState(0);        //initialise counter variable with 0 passed as argument to useState i.e. initial state
    const [secCnt, updsecCnt]= useState(100);

    // useEffect(()=>{
    //     alert("Something changed/page load/refresh in ReactHooks.js comp which changed the ReactDOM.render()");
    // }, []);        //pass empty arr as 2nd argument to useEffect to make it take effect only after page load/refresh

    useEffect(()=>{
        alert("useEffect only on 2nd Counter change");
    }, [secCnt]);      //passed values to monitor changes, as an array 2nd argument to useEffect i.e. useEffect activates only on changes to values it looks out for

    const Incr= ()=>{
        nextCount(counter+1);       // nextCount function updates current state to next state i.e. counter to counter+1
    }

    const Decr= ()=>{
        if(counter>0)
            nextCount(counter-1);
        else
            alert("0 limit reached");
    }

    const Reset= ()=>{
        nextCount(0);
    }

    const [curTime,updateTime]= useState(new Date().toLocaleTimeString());      //array destructuring

    setInterval( ()=>updateTime(new Date().toLocaleTimeString()), 1000);

    useEffect(()=>document.title= curTime, [curTime]);      //can use multiple useEffect for different functionalities on different objects

    return (
        <div style={{marginBottom: "20rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1 className="my-5">ReactHooks Comp</h1>
            <h1 style={{textAlign: "center"}}>{counter}</h1>
            <div className={classes.root}>
                <Tooltip title="Decrease">
                    <IconButton onClick={Decr} style={{color: "#3333ff"}}>
                        <RemoveIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Increase">
                    <IconButton onClick={Incr} style={{color: "#00e600"}}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <div className={classes.root}>
                <Tooltip title="Reset">
                    <IconButton onClick={Reset} style={{color: "#ff6600"}}>
                        <RefreshIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <h1 style={{textAlign: "center"}}>{curTime}</h1>
            <br/>
            <h4>passed values to watch for changes, as an array 2nd argument to useEffect i.e. useEffect activates only on changes to values it looks out for</h4>
            <h1 style={{textAlign: "center"}}>2nd Counter {secCnt}</h1>
            <IconButton onClick={()=>updsecCnt(secCnt+1)} style={{color: "#00e600"}}>
                <AddIcon />
            </IconButton>
            {/* <button onClick={()=>updateTime(new Date().toLocaleTimeString())} style={{width: "4rem", marginBottom: "1rem", cursor: "pointer"}}>Time</button> */}
        </div>
    );
}

export default ReactHooks;