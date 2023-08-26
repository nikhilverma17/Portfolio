import React from "react";
import me from '../assets/img/Resume.jpg'
import '../components/resume.scss'

function Resume(){
    return(
        <img className="image" src={me}></img>
    )
}
export default Resume