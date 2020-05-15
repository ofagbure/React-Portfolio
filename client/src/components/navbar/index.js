import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    
  } from "react-router-dom";
import logo from "./lgo.webp";
import Home from "../../pages/home";
import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Resume from "../../pages/resume";
import Contact from "../../pages/contact";


function Navbar() {
    return (
        <Router>
        <div>
            <nav className="navbar navbar-expand-md text-secondary navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="..." /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse a justify-content-end" id="collapsibleNavbar"
                        data-target="#navbarToggl">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                              
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">About Me</Link>
                             
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                              
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                                
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                             
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
          <Resume />
          </Route>
          <Route path="/portfolio">
          <Portfolio />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
        </Switch>
        </div>

        </Router>
    )
};

export default Navbar;