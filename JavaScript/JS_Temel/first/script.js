console.log('Merhaba')
console.log(1234)
console.log(true)
console.log([1, 2, 3])
console.error('Hata oluştu')
console.warn('Bir uyarı oluştu')

// tek satırlık yorum satırı

/*
    yorum satırları
    yorum satırları
    yorum satırları
*/

//Değişkenler

var age;
age = 20;
var name = "Mehmet Çuhadar";

//var let const

let city = "Tarsus";
console.log(city);
const email = "mehmet@gmail.com"

//Değişken Türleri

//String
let firstname = "Mete";
//Number
let myAge = 20;
let money = 100.5;
//Boolean
let isActive = true;
//null
let job = null;
//undefined
let car;
//Referance Types - Objects
//Array
let names = ["Mete", "Mahmut", "Can"];
//Object
let address = {
    city: "Kocaeli",
    country: "Türkiye",
}

Function
var calculateAge = function () {
    return 0;
}


//Tür Dönüşümü


let num1 = Number("5");
let num2 = Number("10");
let total = num1 + num2;
console.log(total);

let value;
value = String(19);
console.log(value.length);


let boo = String(true);
console.log(boo);

let x = new Date().getDate;
console.log(x);


//array to string

val = String([1, 2, 3, 4]);

//toString
val = parseInt("10");


console.log(val);


// // Operatörler

// let val;
// const a=10;
// const b=5;
// const c=5;
// let   d=3;

// // 1- Aritmetik Operatörler

// val = a+b;
// val = a-b;
// val = a*b;
// val = a/b;
// val = a%b;
// val = d++;
// val = ++d;
// val = --d;
// val = d--;

// // 2- Atama Operatörleri

// val = a;
// val +=a; // val = val + a;
// val -=a; // val = val - a;
// val *=a; // val = val * a;
// val /=a; // val = val / a;
// val %=a; // val = val % a;


// // 3- Karşılaştırma Operatörleri

// val = a==b;
// val = b==c;
// val = b===c; // değer kontrolü & type
// val = 5 === '5';
// val = a!=b;
// val = a!==b;
// val = a > b;
// val = b < a;
// val = a >= b;
// val = 5 >= 5;
// val = a <= b;

// // 4- Mantıksal Operatörler

//    // && (And)
//    // true  && true  => true
//    // true  && false => false
//    // false && false => false

//    val=  (a>b) && (a>c) 
//    val = (a>b) || (a<c)
//    val = !(a>b)


//    // || (Or)

//    // true  && true  => true
//    // true  && false => true
//    // false && false => false

//    // ! (Not)

//    // !true  => false
//    // !false => true

// console.log(val);
// console.log(typeof val);


// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtAda = 1.50;

IndexAda = (kgAda) / (heigtAda * heigtAda);
IndexCan = (kgCan) / (heigtCan * heigtCan);

console.log(IndexAda.toFixed(2), IndexCan.toFixed(3));

let adaHigherIndex = IndexAda > IndexCan;
let canHigherIndex = IndexCan > IndexAda;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : " + adaHigherIndex);

console.log("Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : " + canHigherIndex);

let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaKilolu = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30) && (IndexAda <= 34.9);

console.log("Ada zayıf :" + AdaZayif);
console.log("Ada'nın kilosu normal : " + AdaNormal);
console.log("Ada kilolu mu : " + AdaKilolu);
console.log("Ada şişman mı : " + AdaSisman);

