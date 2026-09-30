const express= require("express");
const fs = require("fs");

const app = express();
// routes
app.get('/',(req,res)=>{
    res.send("welcome to express server");
})

app.get('/read',(req,res)=>{
    const data= fs.readFileSync("db.json", "utf-8")

    const jsdata= JSON.parse(data);
    console.log(jsdata,typeof jsdata);
    res.send(jsdata);
})
app.get('/stread',(req,res)=>{
    const data= fs.readFileSync("db.json", "utf-8")

    const jsdata= JSON.parse(data);
    console.log(jsdata,typeof jsdata);
    res.send(jsdata.student);
})
app.get('/trread',(req,res)=>{
    const data= fs.readFileSync("db.json", "utf-8")

    const jsdata= JSON.parse(data);
    console.log(jsdata,typeof jsdata);
    res.send(jsdata.trainer);
})

app.get('/home',(req,res)=>{
    res.send("welcome to home page");
})
app.get('/about',(req,res)=>{
    res.send("welcome to about page");
})




app.listen(1526,()=>{
    console.log("server is started")
})


