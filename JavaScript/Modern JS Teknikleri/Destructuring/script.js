//Destrucuring

var a, b, rest;


[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(rest);

({ a, b } = { a: 10, b: 20 });

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });


const arrConfig = ["localhost", "8080", "900"];

//es5
// var server = arrConfig[0];
// var port = arrConfig[1];
// console.log(server, port);

//es6

const [server, port, timeout] = arrConfig;
console.log(server, port, timeout);

///object destructuring

const objConfig = {
    mine: "localhost",
    part: "7777",
    time: 900,
}

// const { mine, part, time } = objConfig;
// console.log(mine, part, time);


// let { time: t } = objConfig;
// console.log(t);

let { mine, part, time, mukaos = 1000 } = objConfig;

const days = ["m", "a", "q", "c"];

const [, , r, t] = days;
console.log(r, t);







