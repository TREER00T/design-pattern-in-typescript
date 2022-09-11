import Animal from './Animal';
import ItFly from './ItFly';

export default class Bird extends Animal {

    constructor() {
        super();
        this.flyingType = new ItFly();
    }

}