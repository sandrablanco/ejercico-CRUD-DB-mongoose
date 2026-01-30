const express = require("express");
const router = require("./routes");
const dbConnection = require("./config/mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.APP_PORT || 3001;
app.use(express.json());
//app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/api",router);

dbConnection();
app.listen(PORT,()=>{
    console.log(`Servidor en el puerto ${PORT}`);
})
