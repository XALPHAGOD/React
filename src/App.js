// const React= require('react');
// const ReactDOM= require('react-dom');



import React from 'react';    //react module for using jsx, create html elements
import Heading, {anyHead} from './components/Heading';    //1st one any name doesn't matter it will map to export default, remaining should match
import Greetings, {FromGreet} from './components/Greetings';
import Component1 from './components/Component1';   //if using export default then here naming doesn't matter
import Leaders from './components/Leaders';
import ReactHooks from './components/ReactHooks';
import ButtonComponent from './components/ButtonComponent';
import FormComponent from './components/FormComponent';



import Todo from './components/Todo';
import ClassComp from "./components/ClassComp";
// import Keep from './components/Keep';



import Contexts from './components/Contexts';
import Pokemon from './components/Pokemon';
import User from "./components/User";
import Search from "./components/Search";
import MemeGenerator from "./components/MemeGenerator";



// //traditional way using only JavaScript
// const newElem= document.createElement('h1');
// newElem.innerHTML= 'Hello Guys Using JavaScript';
// const elemId= document.getElementById('root');
// elemId.appendChild(newElem);

// //using react
// ReactDOM.render(
//   React.createElement('h1', null, 'Hello Guys Using React'),
//   document.getElementById('root')
// );


//only one jsx elem, multiple elems have to be wrapped inside a single jsx elem
// {/* <React.Fragment>
//   <h1>Hello Guys Using ReactDOM</h1>
//   <h3>2nd Line</h3>
// </React.Fragment> */}





import {Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./components/Error";

function App(){    
    // [         //array of elems
    //   <h1>Hello Guys Using ReactDOM</h1>,
    //   <h3>2nd Line</h3>
    // ]

    return (
    // or <>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" component={Heading} exact />
            <Route path="/fromgreet" component={FromGreet} />
            <Route path="/greetings" component={Greetings} />
            <Route path="/component1" render={()=><Component1 prop1="Testing Props" prop3="Prop 3" prop2="Test 2" />} />
            <Route path="/leaders" component={Leaders} />
            <Route path="/reacthooks" component={ReactHooks} />
            <Route path="/buttoncomponent" component={ButtonComponent} />
            <Route path="/formcomponent" component={FormComponent} />
            <Route path="/todo" component={Todo} />
            <Route path="/classComp" component={ClassComp} />
            <Route path="/contexts" component={Contexts} />
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/user/:param1/:param2" component={User} />
            <Route path="/search" component={Search} />
            <Route path="/meme" component={MemeGenerator} />
            <Route component={Error} />
            {/* <Redirect to="/" /> */}
          </Switch>
          
          {/* Route with No Path Cannot Work Together With Redirect to="/" */}
          
          {/* <Heading />
          <>{anyHead}</>
          <>{FromGreet()}</>
          <FromGreet />
          <Greetings />
          <Component1 prop1="Testing Props" prop3="Prop 3" prop2="Test 2" />
          <Leaders />
          <ReactHooks />
          <ButtonComponent />
          <FormComponent />



          <Todo />



          <Contexts />
          <Pokemon /> */}
        </React.Fragment>
    );
}   //not html elem but jsx elem

export default App;