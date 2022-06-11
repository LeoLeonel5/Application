import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import {signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, GoogleAuthProvider} from "firebase/auth";
import {auth} from "./firebase";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    Email:" ",
    Password:" ",
    Mobile:" ",
    OTP:" ",
    Button:"Request OTP",
    Final:" ",
  });
  const {Email, Password, Mobile, OTP, Button, Final} = {...credentials}
  const provider = new GoogleAuthProvider();
  const nav = useNavigate();
  const handleData = (e) =>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
  }

  const googleSignIn = async() =>{
    try{
      const result = await signInWithPopup(auth,provider);
      alert(`Successfully logged in as ${result.user.email}`);
      nav(`/Home?Gmail=${result.user.email}`)
    }
    catch(err){
      if(err){
        alert(err);
      }
    }
  }

  const login = async() =>{
    try{
      await signInWithEmailAndPassword(auth, Email, Password);
      alert(`Successfully logged in as ${Email}`);
      nav(`/Home?Email=${Email}`)
    }
    catch(err){
      if(err){
        alert(err)
      }
    }
  }

  const signin = async() =>{
    try{
      if(Button==="Request OTP"){
      setCredentials({Button:"Sign In"});
      let verify = new RecaptchaVerifier('Captcha', {
        'size':'invisible',
        'callback':(response) =>{
        }
      },auth);
      await signInWithPhoneNumber(auth, Mobile, verify)
      .then((result) =>{
        setCredentials({Final:result});
      }).catch((err) =>{
        alert(err);
        
      });
      }
      else{
        Final.confirm(OTP).then(alert(`Successfully logged in as ${Mobile}`))
        nav(`./Home?Mobile=${Mobile}`)
      }
    }
    catch(err){
      if(err){
        alert(err);
        window.location.reload();
      }
    }
  }
  return (
    <div className="login">
      <div className="login__container">
      <h2>Sign in with Email</h2><br></br>
        <input type="text" className="login__textBox" placeholder="E-mail Address" name="Email" onChange={handleData}/>
        <input type="password" className="login__textBox" placeholder="Password" name="Password" onChange={handleData}/>
        <button className="login__btn" onClick={login}>Login</button>
        <button className="login__btn login__google" onClick={googleSignIn}>Sign in with Google</button>
        <div>
          <Link to="/reset">Forgot Password</Link>
          <h1>{Mobile}</h1>
        </div>
        <div>
          Don't have an account? <Link to="/Register">Register</Link> now.
          <div id="Captcha"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;