const express = require('express');

const app = express();

// create a middleware function to log the request method and URL
const middleware = (req, res, next) => {
    console.log(1)
    next();
    console.log(2)
}

app.use(middleware);

app.get("/home",(req,res)=>{
    res.send("home page")
})



app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(1587,()=>{
    console.log("server is running on port 1587")});

    /// custom middleweare function
    //npx autocannon // url