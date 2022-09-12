import FastFood from './FastFood';
import FastFoodPriceVisitor from './FastFoodPriceVisitor';


let fastFood = new FastFood();

console.log(fastFood.getPrice());

fastFood.accept(new FastFoodPriceVisitor().visit);

console.log(fastFood.getPrice());