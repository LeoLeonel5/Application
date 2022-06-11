import React from "react";
import {Link} from 'react-router-dom';
import './Skills.css';
import image from './image.ico';

class Skills extends React.Component{
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
                    <div className="container">
                        <h1>JAVA</h1>
                    </div>
                    <div className="container">
                        <h1>PYTHON</h1>
                    </div>
                    <div className="container">
                        <h1>HTML5</h1>
                    </div>
                    <div className="container">
                        <h1>CSS</h1>
                    </div>
                    <div className="container">
                        <h1>JAVASCRIPT</h1>
                    </div>
                    <div className="container">
                        <h1>MYSQL</h1>
                    </div>
                    <div className="container">
                        <h1>REACT JS</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;