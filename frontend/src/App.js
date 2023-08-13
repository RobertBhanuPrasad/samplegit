// import road from './road.jpg';
// import Road from './road';
// import Lakes from './lakes';
import './App.css';
// import Bhanu from './bhanu';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Login from './login';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Signup from './log';
import Update from './update';
import Login from './login';
import "./styles.css";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/log' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Signup/> */}
    </>
  );
}
export default App;
