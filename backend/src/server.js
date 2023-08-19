import express from 'express'
import {db,connectToDB} from './db.js';
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    const data=db.collection("db").insertOne({name:"sanju"})
    res.json(data);
    res.send("Server running!");
})


app.post('/update/:mail/:newPassword',async(req,res)=>{
    const result=await db.collection("bp").findOneAndUpdate({mail:req.params.mail},{$set:{password:req.params.newPassword}})
    res.json(result);
})

app.post('/input/:name/:pass/:mail',async(req,res)=>{
    const result=await db.collection("bp").insertOne({name:req.params.name,password:req.params.pass,mail:req.params.mail})
    res.json(result);
})
app.post('/enter/:mail/:pass',async(req,res)=>{
    const result=await db.collection("db").insertOne({mail:req.params.mail,password:req.params.pass})
    res.json(result);
})
app.get('/valid/:mail',async(req,res)=>{
    const result=await db.collection("bp").findOne({mail:req.params.mail})
    res.json(result);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})

