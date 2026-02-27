// checking if a number is greater than
let num1=5;
let num2=10;

if(num1<num2){
    console.log("num1 is greater than num2");
}else{
    console.log("nope,num1 is not greater");
}

let username="chai";
let anotherUsername="chai";
if(username==anotherUsername){
    console.log("Pick another username");
}else{
    console.log("You can pick this username");
}

let score="44";
if(typeof score==="number"){
    console.log("yep,this is a number");
}else{
    console.log("No that is not a number")
}

let isTeaReady=false;
if(isTeaReady){
    console.log("Tea is Ready");
}else{
    console.log("Tea is not ready");
}

let items=["item1"];
if(items.length===0){
    console.log("Array is empty");
}else{
    console.log("Array is Not empty");
}
