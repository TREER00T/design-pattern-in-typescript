export default interface ATMState {
    insertCard();

    ejectCard();

    insertPin(pinEntered: number);

    requestCash(cashToWithdraw: number);
}