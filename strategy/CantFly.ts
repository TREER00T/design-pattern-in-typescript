import Fly from './Fly';

export default class CantFly implements Fly {

    fly(): string {
        return 'I can\'t fly';
    }

}