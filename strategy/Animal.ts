import Fly from './Fly';
import Flyable from './Flyable';

export default class Animal implements Flyable {
    protected flyingType: Fly;

    tryToFly(): string {
        return this.flyingType.fly();
    }

}