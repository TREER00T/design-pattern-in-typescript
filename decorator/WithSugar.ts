import CoffeeDecorator from './CoffeeDecorator';
import Coffee from './Coffee';

export default class WithSugar extends CoffeeDecorator {

    getCost(): number {
        return this.coffee.getCost() + .85;
    }

    coffee: Coffee;

    constructor(coffee: Coffee) {
        super();
        this.coffee = coffee;
    }


    getDescription(): string {
        return this.coffee.getDescription() + ' And Sugar';
    }

}