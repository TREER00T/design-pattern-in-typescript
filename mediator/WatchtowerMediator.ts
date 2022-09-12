import Mediator from './Mediator';

export default class WatchtowerMediator implements Mediator {

    private planes: {};

    constructor(planes) {
        this.planes = planes;
        for (let key in planes) {
            planes[key].setMediator(this);
        }
    }

    notify(sender: object, message: object) {
        let flyable = message['fly'];
        for (let key in this.planes) {
            this.planes[key].message();
        }

    }

}