import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {setDoc, doc} from "firebase/firestore";
import db from './firebase';

const Edit = () => {
    let q = new URLSearchParams(useLocation().search);
    const [data,setData] = useState({
        Username:"",
        Email:"",
        Mobile:"",
    })
    const [locationData, setLocationData] = useState({
      locationUsername:" ",
      locationEmail:" ",
      locationMobile:" ",
      locationTime:" ",
    })
    const {Username, Email, Mobile} = {...data}
    const {locationUsername, locationEmail, locationMobile} = {...locationData}
    useEffect(() =>{
        setLocationData({...locationData,
            locationUsername:q.get("Username"),
            locationEmail:q.get("Email"),
            locationMobile:q.get("Mobile"),
            locationTime:q.get("Time"),
        })
    })
    const handleData = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const docRef = doc(db, `Credentials/${q.get("Key")}`);
        try{
          await setDoc(docRef,{
            Username:Username,
            Email:Email,
            Mobile:Mobile,
          }).then(window.alert("Data updated successfully"));
          window.location.reload()
      }
      catch(err){
        if(err){
          alert(err)
        }
     }
    }
    return (
        <div>
          <div className='form-body'>
            <div className='row'>
              <div className='form-holder'>
                <div className='form-content'>
                  <div className='form-items'>
                    <h1>Edit user information</h1>
                    <p>Fill in the data below</p>
                    <form className='requires-validation' onSubmit={handleSubmit}>
                      <div className='col-md-12'>
                        <input className='form-control' type='text' name='Username' placeholder={locationUsername} onChange={handleData} required></input>
                        <div class="col-md-12">
                          <input class="form-control" type="email" name="Email" placeholder={locationEmail} required onChange={handleData}></input>
                        </div>
                        <div class="col-md-12">
                          <input class="form-control" type="tel" name="Mobile" placeholder={locationMobile} required onChange={handleData}></input>
                        </div>
                        <div className='col-md-12 mt-3'>
                        <div class="form-button mt-3">
                        <button id="submit" type="submit" class="btn btn-primary">Save</button>
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

export default Edit;