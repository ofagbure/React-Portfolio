import React from "react";
import "./index.css";

function Home() {
    return (
        <div className="container">
            <div className="col-md-12 text-center padding-top">
                <h3>Freelance Front-end Wed Developer and Technical Recruiter based in Atlanta GA</h3>
                <h3>Experience in front end web application design and data base engineering</h3>
            </div>

            <div className="card text-center intro">
                <img src="./images/intro.png" className="card-img-right" alt="..." />
                <div className="card-body">
                    <h4 className="card-text">I build aesthetically pleasing, fully responsive web applications with YOU in mind!</h4>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card text-right">
                        <img src="./images/web-design.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Web Design</h5>
                            <p className="card-text text-center">I have experience creating dynamic, innovative websites and applications</p>
                            <a href="./contact.html" className="btn btn-warning">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-right">
                        <img src="./images/project-management.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Project Management</h5>
                            <p className="card-text text-center">Great project management skills. Reach out to me to help organize your project and make it the best it can be</p>
                            <a href="./contact.html" className="btn btn-warning">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Home;