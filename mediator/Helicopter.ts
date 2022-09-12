import Status from './Status';
import BaseComponent from './BaseComponent';

export default class Helicopter extends BaseComponent implements Status {

    fly() {
        this.mediator.notify(this, {fly: true});
    }

    message() {
        console.log('Helicopter -> I want to fly');
    }

}