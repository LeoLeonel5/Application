import React from "react";
import {Link} from 'react-router-dom';
import './Projects.css';
import image from './image.ico';


class Projects extends React.Component{
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
                    <div className="cont-main">
                        <h1>Projects</h1>
                    </div>
                    <div className="cont">
                        <h2>Plant Leaf Disease Analysis</h2><br></br>
                        <h3>Description:</h3>
                        <p>This is a project developed for determining the disease 
                           acquired by the plant by analysis it's leaf. 
                           This is achieved by using Machine Learning.</p>
                        <h3>Algorithms and Libraries used:</h3>
                        <p> Image pre processing<br></br>
                             Image data generator<br></br>
                             Image to array and load image<br></br>
                             Keras<br></br>
                             NumPy<br></br>
                             Pandas<br></br>
                             Matplotlib</p>
                        <h3>Practical Impact:</h3>
                        <p>This project ease the process of determining the disease 
                            acquired by the plant through which farmers can save their 
                            money as well as time. This gives the results more accurately 
                            and efficiently than the conventional methods which are 
                            following by majority of the people.</p>
                    </div>
                    <div className="cont">
                    <h2>Employee Management System</h2><br></br>
                        <h3>Description:</h3>
                        <p>This is a project developed for organising and maintaining the 
                            data of employees and other staff in an organisation. </p>
                        <h3>Technolgies used:</h3>
                        <p> JavaScript<br></br>
                             HTML5<br></br>
                             CSS</p>
                        <h3>Practical Impact:</h3>
                        <p>This project ease the process of managing and 
                            organising the data in an effective way through which an 
                            organisation saves it's time. This will help in maintaining 
                            a clean and clear record of the data.</p>
                    </div>
                    <div className="cont">
                    <h2>Voice Command Based Assistant System</h2><br></br>
                        <h3>Description:</h3>
                        <p>This is project developed for providing assistance to visually impaired people by 
                            guiding them in the format of speech as output whereas input is video captured by camera. 
                            This is achieved by using Machine Learning.</p>
                        <h3>Algorithms and Libraries used:</h3>
                        <p> Open  CV<br></br>
                             NumPy<br></br>
                             Pandas<br></br>
                             Matplotlib<br></br>
                            </p>
                        <h3>Practical Impact:</h3>
                        <p>This project will provide assistance to visually impaired people and 
                            make them independent in performing thier daily activities. </p>
                    </div>
                    <footer>
                        <h1><br></br></h1>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Projects;