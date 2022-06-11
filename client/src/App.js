import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Main from "./Add";
import Application from "./Application";
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import View from './View';
import Users from './Components/Users';
import Amount from "./Components/Amount";
import Edit from "./Edit";
import Login from "./Login";
import Add from "./Add";
import Register from "./Register";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login/>}></Route>'
                    <Route exact path='/Register' element={<Register/>}></Route>'
                    <Route exact path='/Add' element={<Add/>}></Route>
                    <Route exact path='/Main' element={<Main/>}></Route>
                    <Route exact path='/Home' element={<Home/>}></Route>
                    <Route exact path='/Edit' element={<Edit/>}></Route>
                    <Route exact path='/Application' element={<Application/>}></Route>
                    <Route exact path='/Components/About' element={<About/>}></Route>
                    <Route exact path='/Components/Projects' element={<Projects/>}></Route>
                    <Route exact path='/Components/Skills' element={<Skills/>}></Route>
                    <Route exact path='/Components/Contact' element={<Contact/>}></Route>
                    <Route exact path='/View' element={<View/>}></Route>
                    <Route exact path='/Components/Users' element={<Users/>}></Route>
                    <Route exact path='/Components/Amount' element={<Amount/>}></Route>
                </Routes>
          </BrowserRouter>
        );
    }
}

export default App;