const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name: 'IPhone 8',
            price: 4000,
            color: "silver"
        }
        resolve(phone);
    } else {
        const error = new Error('mom is not happy');
        reject(error);
    }
});


const showToFriends = function (phone) {
    const message = "Hi friends this is my new phone " + phone.name;
    return Promise.resolve(message);
}

const askMom = function () {
    willGetNewPhone
        .then(showToFriends)
        .then(message => console.log(message))
        .catch(error => {
            console.log(error);
        })
}

askMom();