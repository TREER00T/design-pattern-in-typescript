import InfoTransaction from './InfoTransaction';

export default class PayPal extends InfoTransaction {

    constructor(amount) {
        super();
        this.amount = amount;
    }

}