let balance=120;
let anotherBalance=new Number(120);

console.log(typeof balance);
console.log(typeof anotherBalance);

console.log(balance);
console.log(anotherBalance.valueOf());

let isActive=true;
console.log(typeof isActive);

let firstName;
console.log(firstName);
let firstname=null;
console.log(firstname);

let str1="Hello";
let str2="Hola";
let greetMessage=`Hello`;

let username="Hitesh";
let oldGreet="Hello"+username+"!";
console.log(oldGreet);

let greetmessage=`Hello ${username}!`;
console.log(greetmessage);

let demo=`Value is ${2,2}`;

let sm1= Symbol();
let sm2= Symbol();
console.log(sm1==sm2);
