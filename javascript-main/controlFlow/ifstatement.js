//if

if(true){
     
}
// < LESS THAN, > GREAYER THAN
// == EQUAL TO ,===datatype CHEACK

if(2 == "2"){
    console.log("executed");
}
if(2 === "2"){
    console.log("not executed");

}else{
    console.log('dataype is different');
}
 
const balance = 10;
if(balance > 10) console.log(`${balance} is greater`);

if(balance > 500){
    console.log("less than");
}
else if (balance < 10){
    console.log("less than 500");
}
else{
    console.log("greater than all");
}


// && and ,|| OR

const loggedIn =true
const debitcard = true
const googleLoggedIn=false


//all condition true
if(loggedIn && debitcard ){
    console.log("allow to buy course");
}


//at least one condition true
if (loggedIn || debitcard || googleLoggedIn) {
    console.log('loggedIn');
    
}