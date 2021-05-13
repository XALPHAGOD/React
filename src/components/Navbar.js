import React from 'react';
import {Link} from "react-router-dom";

const Navbar= ()=>{
    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/fromgreet">FromGreet</Link>
                        <Link className="nav-link" to="/greetings">Greetings</Link>
                        <Link className="nav-link" to="/component1">Component1</Link>
                        <Link className="nav-link" to="/leaders">Leaders</Link>
                        <Link className="nav-link" to="/reacthooks">ReactHooks</Link>
                        <Link className="nav-link" to="/buttoncomponent">ButtonComponent</Link>
                        <Link className="nav-link" to="/formcomponent">FormComponent</Link>
                        <Link className="nav-link" to="/todo">Todo</Link>
                        <Link className="nav-link" to="/contexts">Contexts</Link>
                        <Link className="nav-link" to="/pokemon">Pokemon</Link>
                        <Link className="nav-link" to="/user/Abc/Xyz">User</Link>
                        <Link className="nav-link" to="/search">Search</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;