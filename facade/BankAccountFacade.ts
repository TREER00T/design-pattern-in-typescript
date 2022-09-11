import WelcomeToBank from './WelcomeToBank';
import AccountNumberCheck from './AccountNumberCheck';
import SecurityCodeCheck from './SecurityCodeCheck';
import FundsCheck from './FundsCheck';

export default class BankAccountFacade {

    private readonly accountNumber: number;
    private readonly securityCode: number;

    private welcomeToBank: WelcomeToBank;
    private accountNumberCheck: AccountNumberCheck;
    private securityCodeCheck: SecurityCodeCheck;
    private fundsCheck: FundsCheck;

    constructor(accountNumber: number, securityCode: number) {
        this.accountNumber = accountNumber;
        this.securityCode = securityCode;

        this.welcomeToBank = new WelcomeToBank();
        this.accountNumberCheck = new AccountNumberCheck();
        this.securityCodeCheck = new SecurityCodeCheck();
        this.fundsCheck = new FundsCheck();
    }

    withdrawCash(cashToGet: number) {
        if (this.accountNumberCheck.accountActive(this.accountNumber) &&
            this.securityCodeCheck.isCodeCorrect(this.securityCode) &&
            this.fundsCheck.haveEnoughMoney(cashToGet)) {

            console.log('Transaction Complete\n');
            return;
        }
        console.log('Transaction Failed\n');

    }

    depositCash(cashToDeposit: number) {
        if (this.accountNumberCheck.accountActive(this.accountNumber) &&
            this.securityCodeCheck.isCodeCorrect(this.securityCode)) {

            this.fundsCheck.makeDeposit(cashToDeposit);
            console.log('Transaction Complete\n');
            return;
        }
        console.log('Transaction Failed\n');
    }
}