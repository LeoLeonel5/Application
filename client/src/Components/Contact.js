import React from "react";
import {Link} from 'react-router-dom';
import './Contact.css';
import image from './image.ico';

class Contact extends React.Component{
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
                            <li><Link to='/Components/Users'>USERS</Link></li>
                        </ul>
                    </nav>
                    <div className='content'>
                        <h1>E Mail: <a href='https://mail.google.com/'>prasannakumarleo5@gmail.com</a></h1>
                        <h1>Mobile: +919177021233</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;