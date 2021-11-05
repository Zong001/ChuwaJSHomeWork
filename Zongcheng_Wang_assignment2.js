//1 _ map
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

console.log(itemsObject);

const function1 = ({ quantity, price }) => {
  return {
    quantity: quantity * 2,
    price: price * 2,
  };
};

const newItemObject1 = itemsObject.map(function1);

console.log(newItemObject1);

//2 _ filter

function function2({ quantity, price }) {
  return quantity > 2 && price > 300;
}

const newItemObject2 = itemsObject.filter(function2);

console.log(newItemObject2);

//3 _ reduce

function function3(acc, { quantity, price }) {
  return acc + quantity * price;
}

const newItemObject3 = itemsObject.reduce(function3, 0);

console.log(newItemObject3);

//4

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
const regex = /[^A-Za-z]/g;
const newString1 = string
  .trim()
  .split(" ")
  .join("")
  .toLocaleLowerCase()
  .replace(regex, "");

console.log(newString1);
console.log(newString1.length);

const newString2 = string.replace(regex, "").toLocaleLowerCase();
console.log(newString2);
console.log(newString2.length);
