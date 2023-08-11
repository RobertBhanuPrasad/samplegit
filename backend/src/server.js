import express from 'express'
import {db,connectToDB} from './db.js';
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(cors())
// app.get('/',(req,res)=>{
//     res.send("Server running!");
// })
app.get('/',(req,res)=>{
    const data=db.collection("db").insertOne({name:"sanju"})
    res.json(data);
    res.send("Server running!");
})
// app.post('/input/:name/:pass',async(req,res)=>{
//     const result=await db.collection("db").insertOne({name:req.params.name,password:req.params.pass})
//     res.json(result);
// })
// app.post('/input/:name/:pass',async(req,res)=>{
//     const result=await db.collection("db").insertOne({name:req.params.name,password:req.params.pass})
//     res.json(result);
// })
app.post('/input/:name/:pass',async(req,res)=>{
    const result=await db.collection("db").insertOne({name:req.params.name,password:req.params.pass})
    res.json(result);
})
app.get('/valid/:name',async(req,res)=>{
    const result=await db.collection("db").findOne({name:req.params.name})
    res.json(result);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})