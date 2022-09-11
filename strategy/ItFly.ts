import Fly from './Fly';

export default class CantFly implements Fly {

    fly(): string {
        return 'Flying High';
    }

}