import Pizza from './Pizza';

export default class NewYorkStylePepperoniPizza extends Pizza {

    bake() {
        console.log('Backing NewYork Style Pepperoni Pizza...');
    }

    box() {
        console.log('Boxing NewYork Style Pepperoni Pizza...');
    }

    cut() {
        console.log('Cutting NewYork Style Pepperoni Pizza...');
    }

    prepare() {
        console.log('Preparing NewYork Style Pepperoni Pizza...');
    }

}