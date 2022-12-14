import React from 'react';
import "./about.css";
import Me from "../../assets/me-about.jpg";
import {FaAward,FaUsers} from "react-icons/fa";
import Aboutcard from './AboutCard';
import {VscFolderLibrary} from "react-icons/vsc"
const About = (props) => {
    
    return (
        <section id="about">
            <h5>Get To know</h5>
            <h2>About Me</h2>
           <div className="container about__container">

<div className="about__me">
    <div className="about__me-image">
<img src={Me} alt="me" />
    </div>
</div>
<div className="about__content">
    <div className="about__cards">
        <Aboutcard heading={"Experience"} subHeading={"2+ Years Working"}><FaAward className='icon'/></Aboutcard>
        <Aboutcard heading={"Clients"} subHeading={"Worked With 5+ clients"}><FaUsers className='icon'/></Aboutcard>
        <Aboutcard heading={"Projects"} subHeading={"Worked In 3+ clients Projects"}><VscFolderLibrary className='icon'/></Aboutcard>
    </div>
    <p>Hi I am Deepanshu  </p>
<a href="#contact" style={{marginTop:"2rem"}} className="btn btn-primary">Let's Contact</a>
</div>
           </div>
           
        </section>
    );
}

export default About;
