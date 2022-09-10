import Coffee from './Coffee';

export default abstract class CoffeeDecorator extends Coffee {

    abstract getCost(): number;

    abstract getDescription(): string;

}
