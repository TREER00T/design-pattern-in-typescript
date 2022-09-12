import PaymentReceiver from './PaymentReceiver';


export default class IranBank implements PaymentReceiver {
    private output: object;

    constructor(output: object) {
        this.output = output;
    }

    getPay() {
        console.log(`Iran bank received ${this.output['amount']} dollars.`);
    }

}