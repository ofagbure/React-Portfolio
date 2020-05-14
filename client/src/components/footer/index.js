import React from "react";



function Footer() {
    return (
  
        <div>
            <footer className="footer bg-secondary text-dark">
                <div className="container">
                    <nav className="navbar justify-content-center">
                        <span className="text-muted clickme" id="text">
                            <a href="https://www.linkedin.com/in/femi-fagbure/"><img className="icon"
                                src="./images/linkedin.png" alt="..." /></a>
                            <a href="https://github.com/ofagbure"><img className="icon" src="./images/github.png" alt="..." /></a>
                            <a href="mailto:femifagbure@gmail.com"><img className="icon" src="./images/email.png" alt="..." /></a>
                            <a href="tel:917-442-0383"><img className="icon" src="./images/phone.jpg" alt="..." /></a>
                            <p>Copyright &copy; 2020 Femi Fagbure&nbsp;• Georgia Institute of Technology&nbsp;</p>
                        </span>
                    </nav>
                </div>
            </footer>
        
        </div>

    )
};

export default Footer;