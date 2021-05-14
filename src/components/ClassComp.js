import React, { Component } from 'react';
import {TodosData} from "../data/TodosData";

// const ClassComp= ()=>{
//     return (
//         <h1>Hello</h1>
//     );
// }

const ItemCont= (props)=>{
    // console.log(props);
    const customStyle={
        fontStyle: "italic",
        color: "green",
        textDecoration: "line-through"
    };

    return (
        <div className="form-check mt-3">
            <input className="form-check-input shadow-none" type="checkbox" checked={props.checked} onChange={()=>props.checkedChanged(props.index)} />
            <label className="form-check-label" style={(props.checked) ? customStyle : null}>{props.todo}</label>
        </div>
    );
}

class ClassComp extends Component{      //class based component
    constructor(){
        super();
        this.state= {
            loading: true,
            name: "Rock",
            count: 0,
            todos: TodosData,
            character: null
        }

        this.buttonClicked= this.buttonClicked.bind(this);
        this.checkedChanged= this.checkedChanged.bind(this);
    }

    componentDidMount(){        //similar to useEffect
        setTimeout(()=>{
            this.setState({loading: false});
        }, 2000);

        fetch("https://swapi.dev/api/people/1/")
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({character: data});
        });
    }

    buttonClicked= ()=>{
        // console.log("Clicked");
        this.setState(prev=>{
            // console.log(prev);
            return {count: prev.count + 1};
        })
    }

    checkedChanged= (index)=>{
        // console.log(index, "changed");
        this.setState(prev=>{
            const updatedTodosData= prev.todos;
            updatedTodosData[index].checked= !prev.todos[index].checked;
            return {
                todos: updatedTodosData
            };
        })
    }

    render(){
        return (
            <>
                <h1 className="text-center">Hello {this.state.name}</h1>
                <div className="mx-auto d-flex flex-column justify-content-center align-items-center" onClick={this.buttonClicked} style={{width: "10rem", height: "10rem", backgroundColor: "aqua", fontWeight: "bolder", fontSize: "2rem"}}>{this.state.count}</div>
                <div className="container my-5 d-flex flex-column justify-content-center align-items-center ">
                    {
                        (this.state.loading)
                        ?
                        <h3 className="text-center">Conditional Rendering- Loading...</h3>
                        :
                        <div>
                            {this.state.todos.map((todo, index)=><ItemCont {...todo} key={index} index={index} checkedChanged={this.checkedChanged} />)}
                        </div>
                    }
                </div>
                <div>
                    {
                        (this.state.character)
                        ?
                        <h3 className="text-center">{this.state.character.name}</h3>
                        :
                        <h3 className="text-center">Loading...</h3>
                    }
                </div>
            </>
        );
    }
}

export default ClassComp;