//this keyword
//ES5

let list = {
    category: "phone",
    names: ["Iphone 8", "Samsung", "Iphone"],
    call: function () {
        var self = this;
        this.names.map(function (name) {
            console.log(`${name} ${self.category} `);

        })

    }
}
list.call();

//ES6
let musa = {
    category: "phone",
    names: ["Iphone 8", "Samsung", "Iphone"],
    call: function () {
        var self = this;
        this.names.map((name) =>
            console.log(`${name} ${this.category} `)

        )

    }
}
musa.call();


function Game() {
    this.live = 0;
    this.addLive = function () {
        this.OneUp = setInterval(() => {
            console.log(++this.live)
        }, 1000)
    }
}
let player = new Game();
player.addLive();


