let task = new Promise((res,rej)=>{
    return res("first promise")
})

let p2 = task.then((data)=>{
    console.log(data);
    return new Promise ((res,rej)=>{
        return res("second promise")
    })
})
p2.then(function(data){
    console.log(data);
})
