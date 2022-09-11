import PizzaFactory from './PizzaFactory';

export default class StylePizzaFactory extends PizzaFactory {

    async createPizza(type) {
        const pizzaType = await import(`./NewYorkStyle${type}Pizza`);
        return new pizzaType.default();
    }

}