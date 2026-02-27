function greet() {
  console.log("Hello!");
}
// greet();

function helloThere(name) {
  console.log(`hello ${name}`);
}
helloThere("Aqsa");

function makeTea(typeOfTea) {
  console.log(`Making ${typeOfTea}`);
}
makeTea("green tea");
makeTea("lemon tea");

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder);

function orderTea(teaType) {
  function confirmOrder() {
    return "Order confirmed for chai";
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("masala chai");
console.log(orderConfirmation);

const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(499, 100);
console.log(totalCost);


function introduce(name, age) {
  return `Hi, my name is ${name} and I am ${age} years ol
d.`;
}
let intro = introduce("Alice", 25);
console.log(intro);


const isEven = (number) => number % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(10)); // true


function prepareOrder(item) {
 function wrapItem() {
 return `Wrapping: ${item}`;
 }
 return wrapItem();
}
let result = prepareOrder("Book");
console.log(result);


const shopReceipt = (itemName, price, quantity) =>
  `Receipt: ${quantity}x ${itemName} @ $${price} each =
$${price * quantity} total`;
let receipt = shopReceipt("Coffee", 5, 3);
console.log(receipt);