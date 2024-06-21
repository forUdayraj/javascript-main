const { log } = require("console");
const http = require("http");
const fs = require("fs")


const myServer = http.createServer((req,res) =>{
    console.log(req.headers);
    const log = `${Date.now()} ${req.url}: New Req Received`;
    fs.appendFile("log.txt",log, (err,data) =>{
        console.log("new Req rec.");
        res.end("hello from server");
    });
    
});

myServer.listen(8000,()=>console.log("server started"));
//req contain = ip address who is user all meta in req objecct
//res contain = all information provised by server 

//handle function that handle incoming requests
