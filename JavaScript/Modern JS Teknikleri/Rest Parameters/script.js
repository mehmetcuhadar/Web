//Es6

function sum() {
    let arr = Array.prototype.slice.call(arguments);
    console.log(arguments);
    let result = 0;
    arr.forEach(element => {
        result += element;
    });
    console.log(result);


}

sum(10, 20, 30);


