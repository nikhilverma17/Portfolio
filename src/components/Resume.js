import React from "react";
import me from '../assets/img/Resume.jpg'; // Path to your image file
import resumePdf from '../assets/pdf/Resume.pdf'; // Path to your PDF file
import '../components/resume.scss';

function Resume() {
    return (
        <div className="resume-container">
            {/* Download Button above the image */}
            <a href={resumePdf} download="Resume.pdf" className="download-button">
                Download Resume 
            </a>

            {/* Display Image */}
            <img className="image" src={me} alt="Resume" />
        </div>
    );
}

export default Resume;
