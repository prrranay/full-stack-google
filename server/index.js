const express= require("express");
const cors = require("cors");
const port = 3000;

const app=express();
app.use(express.json());
app.use(cors([
    {
        origin:"*",
        credentials:true
    }
]));

app.get("/api/message",(req,res)=>{
    res.send({data:"hello from backend"})
})

app.listen(port,()=> console.log(`you app is runnig at http://localhost:${port}`))