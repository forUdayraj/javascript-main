// fs api is imported in this file
const fs = require('fs');

fs.writeFile('greeting.txt','hello world',err=>{
    if(err){
        console.log("Error is cccured when writing");
    }
});