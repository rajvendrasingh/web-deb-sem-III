//  1 npm init -y
//2. npm install express
// 3. import karo
//4. use
//5. node filename[run file]

// step 1 import express module
const express = require("express");

// step 2 create application
const app = express();

// step 3 create route;
app.get("/", (req,res)=>{
    res.send("welcome to express server");

});
app.get("/home",(req,res)=>{
    res.send("welcome to home page");
});

app.listen(3000,()=>{
    console.log("server is started at port 3000");
})