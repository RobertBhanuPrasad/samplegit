// import road from './road.jpg';
// import Road from './road';
// import Lakes from './lakes';
import './App.css';
// import Bhanu from './bhanu';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Login from './login';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from './log';
import "./styles.css";

function App(){
  return(
    <>
    <Login/>
    </>
  );
}
export default App;

// function App() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Full Name </label>
//           <input type="text" name="fullname" required />
//           {renderErrorMessage("fullname")}
//         </div>
//         <div className="input-container">
//           <label>Mail ID</label>
//           <input type="text" name="mail" required />
//           {renderErrorMessage("mail")}
//         </div>
//         <div className="input-container">
//           <label>Phone NO. </label>
//           <input type="text" name="number" required />
//           {renderErrorMessage("number")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Sign Up</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default App;

// // function App() {
// //   return (
// //     <>
// //     <BrowserRouter>
// //     <Routes>
// //       <Route path='/' element={<Login/>}></Route>
// //       <Route path='/bhanu' element={<Bhanu/>}></Route>
// //       <Route path='/road' element={<Road/>}></Route>
// //       <Route path='/lakes' element={<Lakes/>}></Route>
// //     </Routes>
// //     </BrowserRouter>
// //     <div className='bh'>
// //         <img src={require('./road.jpg')} />
// //       </div>
// //       {/* <div className='bh'>

// //       <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flove&psig=AOvVaw3HqHgs4bHbKOEZBKSnjHwz&ust=1690898924176000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjjj8CPuYADFQAAAAAdAAAAABAE'}/>
// //       </div> */}
// //   </>
// //   );
// // }

// // export default App;




