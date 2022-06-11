import React from 'react';
import {Link} from 'react-router-dom';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';
import Typewriter from 'typewriter-effect';

import image from './image.ico';
import pic from './leo.ico';
import './Application.css';

class Application extends React.Component{
  render(){
    return (
    <div>
      <header>
        <title>Portfolio Website</title>
      </header>
      <body>
        <div className='hero'>
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
          <div className='info'>
            <h1>I'm <span className='auto-type'>Prasanna Kumar</span></h1>
            <h2 className='type-writer'><Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 85,
              strings:[
                "I'm a Software Developer",
                "I'm a Front End Web Developer",
                "I'm a Logical Thinker and Quick Learner" 
              ]
            }}></Typewriter>
            </h2><br></br>
            <p>This is my official portfolio website to let you know all about me and my work</p>
            <button><Link to='/View'>View CV</Link></button>
          </div>
          <div className='img-box'>
            <img src={pic} className='main-img' alt='pic'></img>
          </div>
          <div className='social-links'>
            <a href='https://www.Linkedin.com/in/prasanna-kumar-7bb228217'><FaLinkedin size={40}></FaLinkedin></a>
            <a href='https://www.instagram.com/invites/contact/?i=1slcx25i00tb4&utm_content=72rmrq0'><FaInstagram size={40}></FaInstagram></a>
            <a href='https://github.com/LeoLeonel5'><FaGithub size={40}></FaGithub></a>
          </div>
        </div>
      </body>
    </div>
  );
  }
}

export default Application;

/*fetchUsers = () =>{
  fetch("http://localhost:3001/users")
  .then(res =>res.text())
  .then(res => window.alert(res))
}
fetchCities = (val) =>{
    fetch("http://localhost:3001/cities", {method: 'POST', body: JSON.stringify(val)})
    .then(res =>res.text())
    .then(res => window.alert(res))
}*/
