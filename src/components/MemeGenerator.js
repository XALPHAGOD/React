import React, { Component } from 'react';

class MemeGenerator extends Component{
    constructor(){
        super();

        this.state={
            top_text: "",
            bottom_text: "",
            top_text_top: "",
            top_text_left: "",
            bottom_text_top: "",
            bottom_text_left: "",
            style1 :{
                position: "absolute",
                top: "50%",
                left: "50%"
            },
            style2: {
                position: "absolute",
                top: "50%",
                left: "50%"
            }
        }

        this.handleChange= this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(resp=>resp.json())
        .then(resp=>{
            // console.log(resp.data.memes[0]);
            this.setState({
                allImages: resp.data.memes,
                index: 0,
                url: resp.data.memes[0].url
            });
        });
    }

    handleChange= (event)=>{
        // console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    }

    getNextImg= ()=>{
        this.setState(prev=>{
            return {
                index: prev.index+1,
                url: prev.allImages[prev.index+1].url
            };
        });
    }

    handleStyles= (event)=>{
        let {name, value}= event.target;
        if(name === "top_text_top"){
            this.setState(prev=>{
                return {
                    [name]: value,
                    style1: {
                        position: "absolute",
                        top: (value === "")?"0px":value+"px",
                        left: prev.style1.left
                    }
                };
            });
        }
        if(name === "top_text_left"){
            this.setState(prev=>{
                return {
                    [name]: value,
                    style1: {
                        position: "absolute",
                        top: prev.style1.top,
                        left: (value === "")?"0px":value+"px"
                    }
                };
            });
        }
        if(name === "bottom_text_top"){
            this.setState(prev=>{
                return {
                    [name]: value,
                    style2: {
                        position: "absolute",
                        top: (value === "")?"0px":value+"px",
                        left: prev.style2.left
                    }
                };
            });
        }
        if(name === "bottom_text_left"){
            this.setState(prev=>{
                return {
                    [name]: value,
                    style2: {
                        position: "absolute",
                        top: prev.style2.top,
                        left: (value === "")?"0px":value+"px"
                    }
                };
            });
        }
    }

    render(){

        return (
            <div className="container" style={{minHeight: "90vh"}}>
                <div className="row">
                    <input className="col text-center m-5" type="text" name="top_text" value={this.state.top_text} onChange={this.handleChange} placeholder="Top Text" autoComplete="off" />
                    <input className="col text-center m-5" type="text" name="bottom_text" value={this.state.bottom_text} onChange={this.handleChange} placeholder="Bottom Text" autoComplete="off" />
                </div>
                <div className="row">
                    <input className="col text-center mx-5" type="text" name="top_text_top" value={this.state.top_text_top} onChange={this.handleStyles} placeholder="Top Text Top" autoComplete="off" />
                    <input className="col text-center mx-5" type="text" name="top_text_left" value={this.state.top_text_left} onChange={this.handleStyles} placeholder="Top Text Left" autoComplete="off" />
                    <input className="col text-center mx-5" type="text" name="bottom_text_top" value={this.state.bottom_text_top} onChange={this.handleStyles} placeholder="Bottom Text Top" autoComplete="off" />
                    <input className="col text-center mx-5" type="text" name="bottom_text_left" value={this.state.bottom_text_left} onChange={this.handleStyles} placeholder="Bottom Text left" autoComplete="off" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button className="m-5 w-25" onClick={this.getNextImg}>Next Image</button>
                </div>
                <div className="position-relative d-flex flex-column justify-content-center align-items-center">
                    <h2 style={this.state.style1}>{this.state.top_text}</h2>
                    <h2 style={this.state.style2}>{this.state.bottom_text}</h2>
                    <img className="m-5 w-50" src={this.state.url} alt="" />
                </div>

            </div>
        );

    }

}

export default MemeGenerator;