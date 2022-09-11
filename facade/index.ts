import BankAccountFacade from './BankAccountFacade';

let accessingBank = new BankAccountFacade(123456789, 1234);
accessingBank.withdrawCash(50.00);
accessingBank.withdrawCash(990.00);
accessingBank.depositCash(200.00);