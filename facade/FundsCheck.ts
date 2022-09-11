export default class FundsCheck {

    private cashInAccount = 1000.00;

    getCashInAccount(): number {
        return this.cashInAccount;
    }

    decreaseCashInAccount(cashWithdrawn: number) {
        this.cashInAccount -= cashWithdrawn;
    }

    increaseCashInAccount(cashDeposited: number) {
        this.cashInAccount += cashDeposited;
    }

    haveEnoughMoney(cashToWithdrawal): boolean {
        let result = cashToWithdrawal > this.getCashInAccount();
        if (result) {
            console.log('Error: You don\'t have enough money');
            console.log(`Current Balance: ${this.getCashInAccount()}`);
            return false;
        }
        this.decreaseCashInAccount(cashToWithdrawal);
        console.log(`Withdrawal Complete: Current Balance is ${this.getCashInAccount()}`);
        return true;
    }

    makeDeposit(cashToDeposit: number) {
        this.increaseCashInAccount(cashToDeposit);
        console.log(`Deposit Complete: Current Balance is ${this.getCashInAccount()}`);
    }

}