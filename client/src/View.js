import React from "react";
import image from './image.ico';
import { Link } from "react-router-dom";

import './View.css';
import Resume from './Resume.pdf';
import ResumeImage from './Resume.ico';
class View extends React.Component{
    render(){
        return(
            <div>
                <div className="hero">
                    <nav>
                        <img src={image} className='logo' alt='logo'></img>
                        <ul>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/Components/About'>ABOUT</Link></li>
                            <li><Link to='/Components/Projects'>PROJECTS</Link></li>
                            <li><Link to='/Components/Skills'>SKILLS</Link></li>
                            <li><Link to='/Components/Contact'>CONTACT</Link></li>
                        </ul>
                    </nav>
                    <button><a href={Resume} download='Resume'>Download CV</a></button>
                    <img src={ResumeImage} className='Image' alt="logo"></img>
                </div>
            </div>
        )
    }
}

export default View;