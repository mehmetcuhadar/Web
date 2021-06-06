interface Point { x: number, y: number };


interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;

};

class Taxi implements Vehicle {

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taxi x: ${point.x} taxi y: ${point.y}`);

    }

}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`bus x: ${point.x} bus y: ${point.y}`);
    }

}
