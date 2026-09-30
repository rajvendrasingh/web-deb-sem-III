const express = require("express");
const fs =require("fs");

// midlewere 
const trainerRouter = express.Router();

trainerRouter.get("/",(req,res)=>{
    fs.readFile("trainer.json","utf-8",(err,data)=>{
        if (err) {
            return res.status(500).send(err.message);
        }

        res.send(data);
    });
});

module.exports = trainerRouter;