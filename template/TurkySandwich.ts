import Sandwich from './Sandwich';


export default class TurkySandwich extends Sandwich {

    addTopping(): this {
        console.log('Adding Turky');
        return this;
    }

    addOther() {
        console.log('Adding coca cola');
    }

}