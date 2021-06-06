;
;
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi x: " + point.x + " taxi y: " + point.y);
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("bus x: " + point.x + " bus y: " + point.y);
    };
    return Bus;
}());
