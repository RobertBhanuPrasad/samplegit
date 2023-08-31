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
import Success from './success';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Signup/> */}
    </>
  );
}
export default App;


// <style>
//             .body{
//             background-color:black;
//             }
//             @media only screen and (max-width:480px){
//                 .body{
//                     background-color: blue;
//                 }
//             }
//             @media only screen and (max-width:1000px){
//                 .body{
//                     background-color: red;
//                 }
//             }
//             @media only screen and (max-width:800px){
//                 .body{
//                     background-color: pink;
//                 }
//             }
//         </style>
//         <div class="body">
//            <p>this is bhanu</p>
//         </div>