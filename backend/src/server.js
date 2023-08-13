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

// app.post('/updatePassword', (req, res) => {
//     const { mail, newPassword } = req.body;
  
//     MongoClient.connect(mongoUrl, (err, client) => {
//       if (err) throw err;
// const db = client.db(dbName);
// const collection = db.collection(collectionName);

// collection.updateOne(
//   { mail: mail },
//   { $set: { password: newPassword } },
//   (err, result) => {
//     if (err) {
//       res.status(500).json({ message: 'Error updating password.' });
//     } else {
//       res.json({ message: 'Password updated successfully.' });
//     }

//     client.close();
//   }
// );
// });
// });

app.post('/update/:mail/:newPassword',async(req,res)=>{
    const result=await db.collection("db").insertOne({mail:req.params.mail,password:req.params.newPassword})
    res.json(result);
})

app.post('/input/:name/:pass/:mail',async(req,res)=>{
    const result=await db.collection("db").insertOne({name:req.params.name,password:req.params.pass,mail:req.params.mail})
    res.json(result);
})
app.post('/enter/:mail/:pass',async(req,res)=>{
    const result=await db.collection("db").insertOne({mail:req.params.mail,password:req.params.pass})
    res.json(result);
})
app.get('/valid/:mail',async(req,res)=>{
    const result=await db.collection("db").findOne({mail:req.params.mail})
    res.json(result);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})