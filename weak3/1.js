const http = require("http");

const server = http.createServer((request,response) =>{
    if(request.url == "/"){
        response.end("home page");
    }else if (request.url == "/add" && request.method == "POST"){
        // on->mehod , data->event , chunk->data
        request.on("data",(chunk) =>{
            str += chunk;
        });

        request.on("end",() =>{
            console.log(str);
            response.end("created page");
        });
    }else{
        response.end("page not found");
    }
});