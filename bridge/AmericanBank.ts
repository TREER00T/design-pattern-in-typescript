import PaymentReceiver from './PaymentReceiver';

export default class AmericanBank implements PaymentReceiver {

    private output: object;

    constructor(output: object) {
        this.output = output;
    }

    getPay() {
        console.log(`American bank received ${this.output['amount']} dollars.`);
    }

}