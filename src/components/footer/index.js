import React from "react";

function Footer() {
    return (
        <div>
            <footer className="footer bg-secondary text-dark">
                <div className="container">
                    <nav className="navbar justify-content-center">
                        <span className="text-muted clickme" id="text">
                            <a href="https://www.linkedin.com/in/femi-fagbure/"><img className="icon"
                                src="./images/linkedin.png" /></a>
                            <a href="https://github.com/ofagbure"><img className="icon" src="./images/github.png" /></a>
                            <a href="mailto:femifagbure@gmail.com"><img className="icon" src="images/email.png" /></a>
                            <a href="tel:917-442-0383"><img className="icon" src="images/phone.jpg" /></a>
                            <div className="row text-center">
                                <a className="nav-link" href="index.html">Home</a>
                                <a className="nav-link" href="about.html">About Me</a>
                                <a className="nav-link" href="portfolio.html">Portfolio</a>
                                <a className="nav-link" href="resume.html">Resume</a>
                                <a className="nav-link" href="contact.html">Contact</a>
                            </div>
                            <p>Copyright &copy; 2020 Femi Fagbure&nbsp;• Georgia Institute of Technology&nbsp;</p>
                        </span>
                    </nav>
                </div>
            </footer>
        </div>
    )
};

export default Footer;