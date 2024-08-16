const express = require("express")
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(4000, ()=>{
    console.log("Server Running");
})