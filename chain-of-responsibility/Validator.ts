import Handler from './Handler';


export default class Validator implements Handler {

    protected successor: any;

    setNext(successor: any) {
        this.successor = successor;
    }

    handle(request: string) {
        throw new Error('Method not implemented.');
    }

    next(request: string) {
        if (this.successor)
            this.handle(request);
    }


}