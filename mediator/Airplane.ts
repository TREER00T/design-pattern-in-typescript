import Status from './Status';
import BaseComponent from './BaseComponent';

export default class Airplane extends BaseComponent implements Status {

    fly() {
        this.mediator.notify(this, {fly: false});
    }

    message() {
        console.log('Airplane -> OK, I\'m not flying');
    }

}