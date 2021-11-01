const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/views/proyecto.html"))
});






app.listen(2000, ()=>{
    console.log("servidor funcionando 2000")
});