// //static
// //ES6

// class PersonES6 {
//     constructor(name, job, yearOfBirth) {
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }
//     calculateAge() {
//         return 2018 - this.yearOfBirth;
//     }

//     static sayHi() {
//         console.log("Hello there");

//     }
// }

// let mukaso = new PersonES6("met", "sd", 2003);

// console.log(mukaso.calculateAge());
// PersonES6.sayHi();

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }

}


const d1 = new Point(10, 10);
const d2 = new Point(20, 20);
console.log(Point.distance(d1, d2));