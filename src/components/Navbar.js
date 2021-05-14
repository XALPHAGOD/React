import React from 'react';
import {Link} from "react-router-dom";

const Navbar= ()=>{
    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-xl-flex justify-content-center" id="navbar">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/fromgreet">Greet</Link>
                        <Link className="nav-link" to="/greetings">Greetings</Link>
                        <Link className="nav-link" to="/component1">Comp1</Link>
                        <Link className="nav-link" to="/leaders">Leaders</Link>
                        <Link className="nav-link" to="/reacthooks">Hooks</Link>
                        <Link className="nav-link" to="/buttoncomponent">Button</Link>
                        <Link className="nav-link" to="/formcomponent">FormComp</Link>
                        <Link className="nav-link" to="/todo">Todo</Link>
                        <Link className="nav-link" to="/classComp">ClassComp</Link>
                        <Link className="nav-link" to="/contexts">Contexts</Link>
                        <Link className="nav-link" to="/pokemon">Pokemon</Link>
                        <Link className="nav-link" to="/user/Abc/Xyz">User</Link>
                        <Link className="nav-link" to="/search">Search</Link>
                        <Link className="nav-link" to="/meme">Meme</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;