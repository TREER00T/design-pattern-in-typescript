import Dog from './Dog';
import Bird from './Bird';


let sparky = new Dog();
let tweety = new Bird();


console.log(`Dog: ${sparky.tryToFly()}`);
console.log(`Bird: ${tweety.tryToFly()}`);