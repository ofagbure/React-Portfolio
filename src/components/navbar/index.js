import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md text-secondary navbar-light">
                <div className="container">
                    <a className="navbar-brand"><img className="logo" src="images/lgo.webp" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse a justify-content-end" id="collapsibleNavbar"
                        data-target="#navbarToggl">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="resume.html">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;