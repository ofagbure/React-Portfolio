import React from "react";

function Portfolio() {
    return (
        <div className="container">
            <div className="col-md-12 text-center padding-top">
                <h3>Freelance Front-end Wed Developer and Technical Recruiter based in Atlanta GA</h3>
                <h3>Experience in front end web application design and data base engineering</h3>
            </div>


            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://ofagbure.github.io/Password-Generator/">
                            <img src="images/Password Generator.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-center">Password Generator</h5>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/ofagbure/Developer-Team-Generator">
                            <img src="images/Team Generator.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-center">Developer Team Generator</h5>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://secure-beach-74289.herokuapp.com/">
                            <img src="images/ravens.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-center">Project 2 - Ravens Athletic Club</h5>

                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://ofagbure.github.io/Traveller-Handbook/">
                            <img src="images/Project1.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-center">Project 1 - The Traveller's Handbook</h5>

                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://ofagbure.github.io/Code-Quiz/">
                            <img src="images/Code Quiz.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-center">Code Quiz</h5>

                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://choober.herokuapp.com/">
                            <img src="images/Choober.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-center">Project 3 - Choober</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Portfolio;