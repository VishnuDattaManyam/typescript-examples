
import { Vehicle } from './example';
import { Car } from './example';

/// Operations on vehicle
var vehicle1 = new Vehicle('White', 'Swift Dezire', 700000);

console.log(vehicle1.status());

console.log(vehicle1.start());

console.log(vehicle1.status());

console.log(vehicle1.run(20));

console.log(vehicle1.status());

console.log(vehicle1.start());

console.log(vehicle1.run(40));

console.log(vehicle1.status());

console.log(vehicle1.stop());

console.log(vehicle1.stop());