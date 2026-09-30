//2nd class 
// crypto 
//1 hashing data
//const crypto = require("crypto");

// const key = "hello";

// const hash = crypto.createHash("sha256");

// const data = hash.update(key);

// console.log(data);

// const ans = data.digest("hex");
// console.log(ans);

// 2.  random int;
// for (let i=0; i<10; i++){

//     const ans1 = crypto.randomInt(1,7);

//     const ans2 = crypto.randomUUID();
//     console.log(ans1, ans2)
// 

//}


//5. fs module
// read async
const fs = require("fs");
// fs.readFile("./1.text", "utf-8", (err, data) => {
//    if(err){
//     console.log("something went wrong");

//    }else{
//     console.log(data);
//    }
// });

// read sync.
// const data = fs.readFileSync("./1.text", "utf-8");
// console.log(data);

// write data;
// fs.writeFile("./1.text", "hello world", (err) => {
//     if(err){
//         console.log("somthing went wrong");
//     }
//     else{
//         console.log("data written sucees");
//     }
//})
// fs.writeFileSync("./1.text","hello world");
// console.log("data written sucees");
// update data;
//fs.appendFile("./1.text", "nikal lode",(err)=>{
//     if(err){
//         console.log("something went wrong");
//     }
//     else{
//         console.log("data updated successfully");
//     }
// })

// fs.appendFileSync("./1.text", "\ aman ki b....");
// console.log("data updated successfully");

// rename file ;
fs.rename("./1.text", "./2.text", (err) => {
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log("file renamed success");
    }
})