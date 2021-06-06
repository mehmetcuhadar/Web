// array is in ES6

const boxes = document.querySelectorAll(".box");


// ES5

let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box) {
//     box.style.bacgroundColor="red";
// });

// ES5
// Array.from(boxes).forEach(box =>
//     box.style.backgroundColor = "green");

// for (let i = 0; i < boxesES5.length; i++) {
//     if (boxesES5[i].className == "box blue") {
//         continue;
//     }
//     boxesES5[i].textContent = "I am changed";
//     boxesES5[i].style.backgroundColor = "blue";
// }

//ES6

// var boxesES6 = Array.from(boxes);
// for (let box of boxesES6) {
//     if (box.className = "box blue") {
//         continue;
//     }
//     box.textContent = "I am changed";
//     box.style.backgroundColor = "blue";
// }

//from
let arr = Array.from("Modern Javascript");
const products = [
    { name: "Samsung S8", price: 5000 },
    { name: "Samsung S7", price: 500 },
    { name: "Samsung S5", price: 50230 },
]

console.log(Array.from(products, prd => prd.price));

console.log(products.find(prd => prd.name == "Samsung S8"));
console.log(products.filter(prd => prd.name == "Samsung S8"));

console.log(products.findIndex(prd => prd.name == "Samsung S8"));

let numbers = ["a", "b", "c"];
let entries = numbers.entries();
for (let i of entries) {
    console.log(i);

}

for (let i of numbers.keys()) {
    console.log(i);
}

for (let i of numbers.values()) {
    console.log(i);

}



