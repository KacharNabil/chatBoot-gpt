import express from 'express';


const app = express();

app.use(express.json());

app.get("/",(req,res,next)=>{
    return res.send('hello man!');
})


app.listen(5000,()=>{
    console.log("server is running");
})
