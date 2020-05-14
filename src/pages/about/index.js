import React from "react";

function About() {
    return (
        <div className="container">
            <div className="col-md-12 text-center padding-top">
                <h3>Freelance Front-end Wed Developer and Technical Recruiter based in Atlanta GA</h3>
                <h3>Experience in front end web application design and data base engineering</h3>
            </div>

            <div className="card text-center">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/IMG_0874.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/IMG_0875.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/IMG_0876.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/IMG_0877.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/IMG_0878.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="card-body">
                    <p className="card-text-right">
                        After receiving a BA in Industrial
                        Psychology from the University of Kentucky, and a MS in Business Communications from
                        Spalding
                        University in Louisville, Kentucky,
                        I followed my passion into the field of HR, and worked for 2 years with Huamana, Inc. I currently
                        work for
                        BlackRock
                        (the world's largest investment management firm) as a recruiter for our
                        campus
                        recruiting program. Specifically, I help the firm recruit talented college students into
                        our Summer
                        Analyst and Program Analyst classNamees.
                    <br />
                        <br />
                                Working with software engineers and learning about their needs and work projects got me
                                interested
                                in the field. BlackRock is also a FinTech company and technology in general is a huge
                                part of what
                                we do. The more I thought about this, the more I realized that I owed it to myself to
                                learn a little
                                more about this field. It would not only help me be better at my role, but it would also
                                give me the
                                flexibility to pursue a different career if I so chose.
                                Moving to Atlanta and working out of the office located on Georgia Tech's campus gave me
                                the
                                opportunity to enroll in Georgia Tech's coding bootcamp.
                                My hope is to gain some knowledge that I would be able to use in my current role, and my
                                career
                                going forward.
                    <br />
                        <br />
                                        I am Nigerian but I currently live and work in Midtown Atlanta. I love to travel and am
                                        obsessed
                                        with Harry
                                        Potter. I have lived in 7 different cities in the US in the 8 years that I have been
                                        here. I speak 2
                                        languages
                                        (English and French), and understand 2 others (Yoruba and Bini).
                </p>
                    <a href="./portfolio.html" className="btn btn-warning">View My Portfolio Here</a>
                </div>
            </div>
        </div>
    )
};

export default About;