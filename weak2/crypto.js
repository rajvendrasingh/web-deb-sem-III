const crypto =require("crypto");
const { buffer } = require("stream/consumers");
 // hashing 
//  const hash = crypto
//  .createHash('sha256')
//  .update('helloo')
//  .digest('hex');
//  console.log(hash)

// random secure value;
// crypto.randomBytes(16,(err,buffer)=>{
//     if(err){
//         console.log('somthing went wrong');
//         return
//     }
//     console.log(buffer.toString('hex'))
// })


// random uid
// const id = crypto.randomUUID();
// console.log("id",id)

// randomInt
// const num =crypto.randomInt(1,10)
// console.log(num)

// signing 
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
});
const sign = crypto.createSign('SHA256');
sign.update('hello word');
sign.end();
const signature = sign.sign(privateKey, 'hex');
console.log(signature);