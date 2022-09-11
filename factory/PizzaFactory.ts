import Pizza from './Pizza';

export default abstract class PizzaFactory {

    async orderPizza(type: string): Promise<Pizza> {
        let pizza = await this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }


    protected abstract createPizza(type: string): Promise<Pizza>;

}