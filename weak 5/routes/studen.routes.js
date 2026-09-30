const express = require("express");
const fs =require("fs");

// midlewere 
const studenRouter = express.Router();

studenRouter.get("/",(req,res)=>{
    fs.readFile("studen.json","utf-8",(err,data)=>{
        if (err) {
            return res.status(500).send(err.message);
        }

        res.send(data);
    });
});

module.exports = studenRouter;