
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

var swift = new Car('Red', 'Swift Dezire', 750000);

swift.start();
swift.run(10);
swift.run(55);
console.log(swift.status());
swift.stop();
console.log(swift.status());