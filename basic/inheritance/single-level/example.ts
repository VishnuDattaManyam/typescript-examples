export class Vehicle {
    private color: string;
    private model: string;
    private price: number;
    private speed: number = 0;
    private isStarted: boolean = false;
    constructor(color: string, model: string, price: number, speed?: number) {
        this.color = color;
        this.model = model;
        this.price = price;
        this.speed = speed === undefined ? 0 : speed;
    }

    start(): string {
        if (this.isStarted) {
            return 'Vehicle started already';
        }
        this.isStarted = true;
        return 'Vehicle started successfully';
    }
    run(speed: number) {
        this.speed = speed;
        return 'Vehicle took ' + this.speed + ' units per hour speed';
    }
    stop(): string {
        if (!this.isStarted) {
            return 'Vehicle is stopped already';
        }
        this.isStarted = false;
        this.speed = 0;
        return 'Vehicle stopped successfully';
    }
    status() {
        let status:string;
        if (this.isStarted) {
            if (this.speed == 0) {
                status = 'Vehicle is started and yet to move';
            } else {
                status = 'Vehicle is running @ ' + this.speed + ' units per hour speed';
            }
        } else {
            status = 'Vehicle is parked';
        }
        return status;
    }
}

export class Car {
    wheels: number = 4;
}