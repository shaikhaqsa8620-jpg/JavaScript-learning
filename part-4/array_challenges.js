let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
console.log(firstTea);

let cities = ["London", "Tokyo", "paris", "Newyork"];
let favoritecity = cities[2];
console.log(favoritecity);

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
console.log(softCopyTeas);

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
console.log(hardCopyCities);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
const menuLength = teaMenu.length;
console.log(menuLength);

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);