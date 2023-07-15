import logo from './logo.svg';
import './App.css';
import Bhanu from './bhanu';


function App() {
  return (
    <>
    <div 
style={{
  position: "absolute",
  top: "5%",
  left: "45%",
  fontWeight:'bold',
  fontSize:30,
  textAlign:"center"
}}
>RESUME
      <hr
      style={{
        background: "#000000",
        height: "5px",
        border: "none",
      }}></hr>
      <hr
      style={{
          background:"#000000",
          height:"2px",
          border:"none"
      }}>
      </hr>
    </div>
    <div 
style={{
  position: "absolute",
  top: "20%",
  left: "38%",
  fontWeight:'bold',
  fontSize:30,
  textAlign:"center"
}}
>
      ROBERT BHANU PRASAD
    </div>
    <div className="header">
   <h1>OBJECTIVE</h1>
    <hr
    style={{
      left:"1%",
      right:"80%",
      position: "absolute",
  top: "40%",
  fontWeight:'bold',
  fontSize:"30%",
  textAlign:"center"
    }}></hr>
    </div>
   
<div class = "vertical"></div>
    <p>An Active Electrical and Electronics Engineering(EEE) student seeking a <br></br>
      responsible opportunity where I can enhance my knowledge of skills <br></br>to 
      achieve personal as well as full organization. Aiming to make a <br></br>signifcant contribution to the growth & success of the organization.</p>
      <div class = "vertical"></div>

      <div className="contact">
   <h1>CONTACT</h1>

    <hr
    style={{
      left:"1%",
      right:"80%",
      position: "absolute",
  top: "60%",
  fontWeight:'bold',
  fontSize:"30%",
  textAlign:"center"
    }}></hr></div>
  <div class = "vertical"></div>
  </>
  );
}

export default App;



