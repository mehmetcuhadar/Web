//Classes

//ES5

var PersonES5 = function (name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}
PersonES5.prototype.calculateAge = function () {
    return 2018 - this.yearOfBirth;
}

var yigit = new PersonES5("mete", "student", 2011);
console.log(yigit.calculateAge());
//ES6

class PersonES6 {
    constructor(name, job, yearOfBirth) {
        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }
    calculateAge() {
        return 2018 - this.yearOfBirth;
    }
}

let mukaso = new PersonES6("met", "sd", 2003);

console.log(mukaso.calculateAge());
