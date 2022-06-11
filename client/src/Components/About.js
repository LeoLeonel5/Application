import React from "react";
import {Link} from 'react-router-dom';
import './About.css';
import image from './image.ico';

class About extends React.Component{
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
                    <h1>Education</h1>
                    <div className='contents'>
                        <h2>Bachelor's of Technology</h2><br></br>
                        <h3>University: Vellore Institute of Technology-AP</h3>
                        <h3>(Amaravati, India)</h3><br></br>
                        <h3>2018-2022</h3><br></br>
                        <h3>Branch: Electronics and Communication Engineering</h3><br></br>
                        <h3>Board: VIT</h3>
                    </div>
                    <div className='contents'>
                        <h2>Secondary Education</h2><br></br>
                        <h3>College: Sri Chaitanya Junior College</h3>
                        <h3>(Vijayawada, India)</h3><br></br>
                        <h3>2016-2018</h3><br></br>
                        <h3>Branch: M.P.C</h3><br></br>
                        <h3>Board: BIEAP</h3>
                    </div>
                    <div className='contents'>
                        <h2>Primary Education</h2><br></br>
                        <h3>School: Vidya Vikas EM High School</h3>
                        <h3>(India)</h3><br></br>
                        <h3>2015-2016</h3><br></br>
                        <h3>Board: SSC</h3>
                    </div>
                    <h1>Internship</h1>
                    <div className='contents'>
                        <h2>Software Development Intern</h2><br></br>
                        <h3>Company: GAO-TEK Inc</h3>
                        <h3>(Remote)</h3><br></br>
                        <h3>Role: Software Developer</h3><br></br>
                        <h3>Duration: 3 months</h3><br></br>
                        <h3>Description: Improving the functionality and efficiency of the website.
                            Developing website using React JS
                        </h3>
                    </div>
                    <footer>
                        <h1><br></br></h1>
                    </footer>
                </div>
            </div>
        );
    }
}

export default About;