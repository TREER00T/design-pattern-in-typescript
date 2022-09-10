import Coffee from './Coffee';

export default class Espresso extends Coffee {

    constructor() {
        super();
        this.description = 'Espresso';
        this.cost = 1.99;
    }

}