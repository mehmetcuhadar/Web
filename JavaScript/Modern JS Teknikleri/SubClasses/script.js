//subclass

//es5


function PersonES5(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonES5.prototype.sayHi = function () {
    return "hi";
}

function CustomerES5(firstName, lastName, phone, userName) {
    PersonES5.call(this, firstName, lastName);
    this.phone = phone;
    this.userName = userName;
}


CustomerES5.prototype = Object.create(PersonES5.prototype);


var customer = new CustomerES5("met", "çu", "46545", "asdasd");
console.log(customer.sayHi());


//es6


class PersonES6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return "hi";
    }
}

class CustomerES6 extends PersonES6 {
    constructor(firstName, lastName, phone, userName) {
        super(firstName, lastName);
        this.phone = phone;
        this.userName = userName;
    }

    static getTotal() {
        return 1000;
    }

}





let customer123 = new CustomerES6("mwdw", "dsaa", 2131231, "weqwesad");
console.log(customer123.sayHi());
console.log(CustomerES6.getTotal());

