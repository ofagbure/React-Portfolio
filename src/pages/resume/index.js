import React from "react";
import resume from "./Resume_1.pdf"
import "./index.css";

function Resume() {
    return (
        <div>
            <embed className="resume" src={resume} width="1500px" height="1000px" />
        </div>
    )
};

export default Resume;