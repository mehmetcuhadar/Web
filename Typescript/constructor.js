;
;
var Taxi = /** @class */ (function () {
    function Taxi(location) {
        this.currentLocation = location;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi x: " + point.x + " taxi y: " + point.y);
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation.x);
