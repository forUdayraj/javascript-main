const http = require("http");

const myserver = http.createServer((req,res)=>{
    console.log("hello from server");
    res.end("started");
});

myserver.listen(8000,()=>"server started")