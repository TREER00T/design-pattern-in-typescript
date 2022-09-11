export default class AccountNumberCheck {

    private accountNumber = 123456789;

    getAccountNumber(): number {
        return this.accountNumber;
    }

    accountActive(accountNumberToCheck: number): boolean {
        return accountNumberToCheck == this.getAccountNumber();
    }

}
