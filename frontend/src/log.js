import React,{useState} from "react";
import axios from "axios";
const Login=()=>{
    const[name,setname]=useState([]);
    const[pass,setpassword]=useState([]);
    const Submit=async()=>{
        try{
        const res1=await axios.get("http://localhost:8000/valid/"+name);
        if (res1.data){
            alert(name+"name is already exist");
    
        }
        else{
        const res=await axios.post("http://localhost:8000/input/"+name+"/"+pass);
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
    return(
        <>
        <input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input>
        <input type="submit" onClick={Submit}></input>
        
        </>
    );
}
export default Login;