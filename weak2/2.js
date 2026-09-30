// const add = require("./1.js")
// console.log(add(10,20));
// types of modules in Node.js
// 1. Core Modules
// 2. Local Modules
// 3. Third-party Modules

// core module 
//fs module 
// write data
const fs = require ("fs");
// fs.writeFileSync("1.text","hello node.js");
// read data

// const data=fs.readFileSync("1.text","utf8")
// console.log(data);
 // add data 
//  fs.appendFileSync("1.text"," \ lungi baab")
//  fs.unlinkSync("1.text")


// for creating folder
// fs.mkdirSync("myfolder")

// folder ke andar file create karne lke liye
// fs.writeFileSync("myfolder/data.texr","hello raj")

// replace data 
let data =fs.readFileSync("1.text","utf8");
data = data.replace("data","")
fs.writeFileSync("1.text",data);