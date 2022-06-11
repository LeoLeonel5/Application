import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {collection, addDoc, Timestamp} from "firebase/firestore";
import {auth} from "./firebase";
import db from './firebase';
import "./Login.css";

const Register = () =>{
    const [data, setData] = useState({
        Username: " ",
        Email: " ",
        Mobile: " ",
        Password: " ",
    });
    const {Username, Email, Mobile, Password} = {...data}
    const handleData = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const nav = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, Email, Password)
            await addDoc(collection(db, 'UserInformation'),{
                Username:Username,
                Email:Email,
                Mobile:Mobile,
                Password:Password,
                Created: Timestamp.now()
          })
          window.location.reload();
          nav("./Login");
      }
      catch(err){
        if(err){
          alert(err)
        }
     }
    }
    return(
        <div>
            <div className='form-body'>
            <div className='row'>
              <div className='form-holder'>
                <div className='form-content'>
                  <div className='form-items'>
                    <h1>Register with Email</h1>
                    <p>Fill in the data below</p>
                    <form className='requires-validation' onSubmit={handleSubmit}>
                      <div className='col-md-12'>
                        <input className='form-control' type='text' placeholder='Full Name' name='Username' onChange={handleData} required></input>
                        <div class="col-md-12">
                          <input class="form-control" type="email" name="Email" placeholder="E-mail Address" required onChange={handleData}></input>
                        </div>
                        <div class="col-md-12">
                          <input class="form-control" type="tel" name="Mobile" placeholder="Mobile" required onChange={handleData}></input>
                        </div>
                        <div class="col-md-12">
                          <input class="form-control" type="text" name="Password" placeholder="Password" required onChange={handleData}></input>
                        </div>
                        <div className='col-md-12 mt-3'>
                        <div class="form-button mt-3">
                        <button id="submit" type="submit" class="btn btn-primary">Register</button>
                        </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div><br></br>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Register;