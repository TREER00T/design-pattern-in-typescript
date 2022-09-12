import Sandwich from './Sandwich';


export default class ChickenSandwich extends Sandwich {

    addTopping(): this {
        console.log('Adding Chicken');
        return this;
    }

}