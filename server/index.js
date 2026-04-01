const express= require("express");
const cors = require("cors");
const port = 3000;

const app=express();
app.use(express.json());
app.use(cors({
    origin: "http://34.57.31.183:5173 , http://34.57.31.183:5173/"
}));

app.get("/api/message",(req,res)=>{
    res.send({data:"hello from backend"})
})

app.listen(port, "0.0.0.0", () => 
  console.log(`your app is running on port ${port}`)
);
