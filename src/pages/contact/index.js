import React from "react";

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">

                    <div className="card text-center">
                        <img src="./images/workhours.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Get in touch</h5>
                            <p className="card-text">I am very happy to collaborate on projects. However, please expect a delay in replies. I am usually available to collaborate on weekends.</p>
                        </div>
                    </div>

                    <div className="card text-center">
                        <img src="./images/teach.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Teach me stuff</h5>
                            <p className="card-text">I am always open to learn new things so if you have pointers to help with any of my projects, feel free to also reach out to me about that as well!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">

                    <h3 className="display-8 text-center">Have a question? Please enquire below</h3>
                    <div className="card mb-3">
                        <div className="row no-gutters">
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label for="name">Full Name</label>
                                        <input type="name" className="form-control" id="fullname"
                                            placeholder="First Name Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                            placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control" id="message" rows="8"
                                            placeholder="Type your message here"></textarea>
                                        <br />
                                        <button id="submit">Submit</button>
                                    </div>
                                </form>

                                <div>
                                    
                                </div>
                                <div className="push"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Contact;