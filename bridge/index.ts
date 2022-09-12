import AmericanBank from './AmericanBank';
import IranBank from './IranBank';
import PayPal from './PayPal';
import IdPay from './IdPay';


let paypal = new PayPal(2400);
let idPay = new IdPay(100);

let americanBank = new AmericanBank(paypal);
let iranBank = new IranBank(idPay);

americanBank.getPay();
iranBank.getPay();