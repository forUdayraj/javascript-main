//javascript = synchronous, single threaded
//execution context = execute on line of code at a one time
//blocking code means block the flow of program ex read the file sync
//non-blocking read the file async
//file access is avaliable only in javascript

let ans = new Promise((resolve, reject) => {
  let n = Math.floor(Math.random() * 10);

  if (n < 5) {
    return resolve();
  } else {
    return reject();
  }
});

ans
  .then(function () {
    console.log("below");
  })
  .catch(function () {
    console.log("above");
  });


