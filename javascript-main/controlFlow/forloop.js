for(index = 1; index < 10; index++){
    const ele= index;
    if (ele == 5){
        console.log("5 is best Number");
    }
    // console.log(ele);
}

for(i = 1; i<=10;i++){
    console.log(`Outer loop:${i}`);
    for(j=1;j<=10;j++){
        //console.log(`Inner Loop:${j} and inner loop ${i}`);
        console.log(i+"*"+j+"="+i*j);

    }
}

let myArray = ["ironman", "batman", "flash", "wonder women"]
console.log(myArray.length);
for (i =0; i<myArray.length;i++){
    const ele = myArray[i]
    console.log(ele);
}

//break and continue

console.log("stopes the iteration");
for (i =1; i<=20; i++){
    if (i == 5 ) {
        console.log("detected 5");
        break
    }
    console.log(`value of ${i}`);
}


console.log("continue skips the one iteration ");
for (i =1; i<=20; i++){
    if (i == 5 ) {
        console.log("detected 5");
        continue
    }
    console.log(`value of ${i}`);
}

const  arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i = 1; i<=arr.length;i++){
    if(arr[i] == arr[i+1]){
        let a = arr[i]
        console.log(a);
    }
}