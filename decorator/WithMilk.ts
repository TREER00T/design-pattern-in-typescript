import CoffeeDecorator from './CoffeeDecorator';
import Coffee from './Coffee';

export default class WithMilk extends CoffeeDecorator {

    coffee: Coffee;

    constructor(coffee: Coffee) {
        super();
        this.coffee = coffee;
    }

    getCost(): number {
        return this.coffee.getCost() + .05;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ' With Milk';
    }

}