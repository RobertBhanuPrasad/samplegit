import React,{useState, useEffect} from "react";
import axios from "axios";
import Login from './login';
import './App.css';
const Signup=()=>{
    const[name,setname]=useState([]);
    const[pass,setpassword]=useState([]);
    const[mail,setmail]=useState([]);
    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    const Submit=async()=>{
        try{
        const res1=await axios.get("https://server-qcrd.onrender.com/valid/"+mail);
        if (res1.data){
            alert(mail+ " mail is already exist go and login");
    
        }
        else{
        const res=await axios.post("https://server-qcrd.onrender.com/input/"+name+"/"+pass+"/"+mail);
        if(res)
        {
            alert("saved sucessfully!");
        }
    }
    }
    catch(e)
    {
        alert(e);
    }
    }
    const Login=()=>{
        window.location.href="/login"
    }
    return(
        <>
  
        <div className="container">
        <input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}></input><br></br><br></br>
        <input type="text" placeholder="mail" onChange={(e)=>setmail(e.target.value)}></input><br></br><br></br>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input><br></br><br></br>
        <input type="submit" onClick={Submit} value="sub"/><br></br><br></br>
        <input type="submit" onClick={Login} value="Login"/>
        
        </div>

        <style >
      {`.container {
          

          @media (min-width: 1000px) {
            background-color:blue;
            // width:50px;
            // height:20px;
            align-item:center;
            justify-content:center;

          }

        }
        input{
          @media (min-width:1000px){
            // width:20px;
            // height:20px;
          }
        }
      `}

    </style>

        </>
    );
}
export default Signup;