import Pizza from './Pizza';

export default class NewYorkStyleCheesePizza extends Pizza {

    bake() {
        console.log('Backing NewYork Style Cheese Pizza...');
    }

    box() {
        console.log('Boxing NewYork Style Cheese Pizza...');
    }

    cut() {
        console.log('Cutting NewYork Style Cheese Pizza...');
    }

    prepare() {
        console.log('Preparing NewYork Style Cheese Pizza...');
    }

}