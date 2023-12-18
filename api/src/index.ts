import {connectToDatabase} from "./db/connection.js";
import app from "./app.js";
import { error } from "console";

const PORT = process.env.PORT || 5000;


connectToDatabase().then(()=>{
    app.listen(PORT,
    ()=>console.log("server is running and connected to database"));
})
.catch((err)=> console.log(err))