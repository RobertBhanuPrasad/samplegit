import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://roberbhanu:Bhanu@cluster0.uq4qgwf.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Database")
    cb();
}
export { connectToDB,db};