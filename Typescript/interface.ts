interface Point { x: number, y: number };


interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passanger): void;
    removePassanger(passenger: Passanger): void;
};

interface Passanger {
    name: string;
    phone: string;
}
