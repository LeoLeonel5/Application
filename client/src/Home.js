import React, {useState,useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import { useLocation } from 'react-router-dom';
import { collection, query, where, onSnapshot} from 'firebase/firestore';
import db from "./firebase";
import './Home.css';

const Home = () =>{
  let q = new URLSearchParams(useLocation().search);
  const [tasks, setTasks] = useState([]);
  const Email = q.get("Email");
  const Gmail = q.get("Gmail");
  const docRef = collection(db, "UserInformation");
  const Q = query(docRef, where("Email", "==", `${Email}`));

  useEffect(() =>{
    onSnapshot(Q,(snapshot) =>
      setTasks(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
    )
  },[])
    return (
    <div>
      <header>
        <title>Bank Application</title>
      </header>
      <body>
        <div className='heroes'>
          <nav>
          </nav>
          <h5 style={{"color":"white"}}>User Information:</h5>
          {
            tasks.map((task) => (
                  <div style={{"color":"white"}}>
                  <h5>UID: {task.id}</h5>
                  <h5>Username: {task.Username}</h5>
                  <h5>Email: {task.Email}</h5>
                  <h5>Mobile:{task.Mobile}</h5>
                  </div>   
              ))
          }
          <h1 className='title'>Hello! {Email} {Gmail}</h1>
          <div className='information'>
            <h2 className='type-writer'>
              <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 85,
              strings:[
                "Wecome to Beast online Banking System",
                "A place for secure transactions",
                "Thank You for choosing us",
              ]
            }}></Typewriter>
            </h2>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;