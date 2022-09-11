import Animal from './Animal';
import CantFly from './CantFly';

export default class Dog extends Animal {

    constructor() {
        super();
        this.flyingType = new CantFly();
    }

}