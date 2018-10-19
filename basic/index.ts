
import { controller } from './scope-with-export';

console.log(controller.get());

controller.add('1');

console.log(controller.get());

