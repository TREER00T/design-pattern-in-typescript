import InfoTransaction from './InfoTransaction';


export default class IdPay extends InfoTransaction {

    constructor(amount) {
        super();
        this.amount = amount;
    }

}