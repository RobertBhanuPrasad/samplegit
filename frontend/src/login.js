import React,{useState, useEffect} from "react";
import axios from "axios";
const Login=()=>{
    const[mail,setmail]=useState([]);
    const[pass,setpassword]=useState([]);
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
          {
        const res=await axios.post("http://localhost:8000/enter/"+mail+"/"+pass);
        if(res)
        {
            alert("login sucessfully!");
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
        <div className="container">
        <input type="text" placeholder="mail" onChange={(e)=>setmail(e.target.value)}></input><br></br>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input><br></br>
        <input type="submit" onClick={Submit} value="Login"/>
        
        </div>

        
        </>
    );
}
export default Login;

{/* 
function Bpp() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/bhanu' element={<Bhanu/>}></Route>
      <Route path='/road' element={<Road/>}></Route>
      <Route path='/lakes' element={<Lakes/>}></Route>
    </Routes>
    </BrowserRouter>
    <div className='bh'>
        <img src={require('./road.jpg')} />
      </div>
      <div className='bh'>

      <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flove&psig=AOvVaw3HqHgs4bHbKOEZBKSnjHwz&ust=1690898924176000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjjj8CPuYADFQAAAAAdAAAAABAE'}/>
       </div>





        
        </>
    );
  }
export default Login;  */}