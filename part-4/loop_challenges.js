let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

let numbers = [2, 4, 6];
let multipliedNumbers = [];
for (let l = 0; l < numbers.length; l++) {
  let takeNumber = numbers[l] * 2;
  multipliedNumbers.push(takeNumber);
}
console.log(multipliedNumbers);

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let c = 0; c < cities.length; c++) {
  let myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);

