import Coffee from './Coffee';
import Espresso from './Espresso';
import WithMilk from './WithMilk';
import WithSugar from './WithSugar';

let espresso: Coffee = new Espresso();



espresso = new WithMilk(espresso);

print(espresso);



espresso = new WithSugar(espresso);

print(espresso);




function print(coffee: Coffee) {
    console.log(`Cost -> ${coffee.getCost()}\nDescription -> ${coffee.getDescription()}`);
}