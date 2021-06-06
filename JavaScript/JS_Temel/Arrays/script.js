// Arrays

let names = ['çınar', 'sena', 'ada', 'yiğit'];
let years = [2017, 1970, 1990, 1998];
let mix = ['sadık', 'turan', 1983, null, undefined, ['sinema', 'kitap']];

// // get array item
// console.log(names[0])
// console.log(names[3])

// // set array item
// names[names.length]='emel';

// // add item
// years.push(1986);
// years.unshift(1986);

// // remove item
// years.pop();
// years.shift();

// //indexof
// let index = names.indexOf('ada');
// console.log(' index : '+index);

// // reverse
// names.reverse();

// // sort
// years.sort();

// //concat
// let val = years.concat(names);
// console.log(val);

// splice
// console.log(names);
// names.splice(0,1);

function over18(year) {
    let age = 2018 - year;
    return age >= 18;
}

// find
// let val = years.find(over18);

// filter
let val = years.filter(over18);

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
// [1,2,5,80] dizisini sıralayın.
var numbers = [1, 2, 5, 80, 15];

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log(numbers.sort(compare));

// "Opel" değeri dizinin bir elemanımıdır ?
console.log(arr);
console.log(arr.indexOf('Opel'));
console.log(arr.includes('Opel'));


// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.

var str = "Chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2)

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
var arr3 = arr.concat(arr2);
console.log(arr3);

// Oluşturulan diziden son 2 elemanı siliniz.

// console.log(arr3.pop());
// console.log(arr3.pop());

// console.log(arr3.splice(6,2));
console.log(arr3.slice(6, 8));

console.log(arr3);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   
*/

var studentA = ['Yiğit', 'Bilgi', 2010];
var studentB = ['Sena', 'Turan', 1999];
var studentC = ['Ahmet', 'Turan', 1998];

var students = [studentA, studentB, studentC];

console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

