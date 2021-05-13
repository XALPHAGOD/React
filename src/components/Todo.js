import React, { useState } from 'react';
import '../css/todo.css';
import CancelIcon from '@material-ui/icons/Cancel';

const LI= (props)=>{

    return (
        <li key={props.id} className="todoLi">
            <CancelIcon onClick={()=>props.itemToBeDeleted(props.id)} className="delItem" />
            {props.item}
        </li>
    );
}

const Todo= ()=>{

    const [itemName, updItemName]= useState("");
    const [listItems, updListItems]= useState([]);

    const formSubmit= (event)=>{
        event.preventDefault();
        if(itemName !== "")
        {
            updListItems((prevItems)=>{
                return [...prevItems, itemName];
            });
            
            updItemName("");
        }
    }

    const updName= (event)=>{
        updItemName(event.target.value);
    }

    const deleteSelectedItem= (whichOne)=>{
        // console.log(whichOne);

        updListItems((prevItems)=>{
            return prevItems.filter( (eachItem, index)=> index !== whichOne )
        });
    }

    return (
        <div id="todoCont">
            <div id="todo">
                <h1 id="todoHead">To Do</h1>
                <form onSubmit={formSubmit} id="todoForm">
                    
                    <input 
                    type="text" 
                    name="itemName" 
                    value={itemName} 
                    onChange={updName} 
                    id="itemName" 
                    autoComplete="off" 
                    placeholder="Add Item" />

                    <button 
                    type="submit" 
                    id="addItem">+</button>

                </form>
                <ul id="todoUl">
                    { listItems.map((curItem, index)=><LI item={curItem} key={index} id={index} itemToBeDeleted={deleteSelectedItem} />) }
                </ul>
            </div>
        </div>
    );
}

export default Todo;