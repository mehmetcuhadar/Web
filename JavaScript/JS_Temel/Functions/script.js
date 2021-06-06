// Functions

function yasHesapla(dogumYili) {
    return 2018 - dogumYili;
}

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);

function EmekligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
    } else {
        console.log('Zaten emekli oldunuz');
    }
}

EmekligeKacYilKaldi(2012, 'Ada');
EmekligeKacYilKaldi(2010, 'Yiğit');
EmekligeKacYilKaldi(1950, 'Çınar');

// Function Declarations

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Function Expressions

// const sum = function(a,b){

//     if(typeof a === 'undefined'){ a=0; }
//     if(typeof b === 'undefined'){ b=0; }

//     var c = a+b;
//     return c;
// }

// ES6 Default Parameters
const sum = function (a = 0, b = 0) {
    var c = a + b;
    return c;
}

function sumAll() {
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(10, 30));
console.log(sum(10)); // NaN
console.log(sum(10, 30, 40, 50));
console.log(sumAll(10, 20, 30, 10, 30));