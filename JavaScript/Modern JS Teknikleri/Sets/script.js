let val;
var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("2");
mySet.add({ a: 1, b: 2 });
var obj = { a: 1, b: 2 };
mySet.add(obj);
val = mySet.has("2");
console.log(val);

for (let item of mySet) {
    console.log(item);

}

for (let item of mySet.keys()) {
    console.log(item);
}

for (let item of mySet.values()) {
    console.log(item);

}

for (let item of mySet.entries()) {
    console.log(item);
}

console.log(Array.from(mySet));
let mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2);

//intersection
var intersection = new Set(Array.from(mySet).filter(x => mySet2.has(x)));
console.log(intersection);


//difference

var intersection = new Set(Array.from(mySet).filter(x => !mySet2.has(x)));
console.log(intersection);

















