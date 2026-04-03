require('dotenv').config();
const express= require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app=express();
app.use(express.json());
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN || "*"
}));

app.get("/api/message",(req,res)=>{
    res.send({data:"hello from backend"})
})

app.listen(port, "0.0.0.0", () => 
  console.log(`your app is running on port ${port}`)
);
