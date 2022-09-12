import ATMState from './ATMState';
import ATMMachine from './ATMMachine';


export default class HasPin implements ATMState {

    private atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard() {
        console.log('You already entered a card');
    }

    ejectCard() {
        console.log('Your card is ejected');
        this.atmMachine.setATMState(this.atmMachine.getNoCardState());
    }

    insertPin(pinEntered: number) {
        console.log('You already entered a PIN');
    }

    requestCash(cashToWithdraw: number) {
        if (cashToWithdraw > this.atmMachine.getCashInMachine()) {
            console.log('You don\'t have that much cash available');
            console.log('Your card is ejected');
            this.atmMachine.setATMState(this.atmMachine.getNoCardState());
            return;
        }
        console.log(`${cashToWithdraw} is provided by the machine`);
        this.atmMachine.setCashInMachine(this.atmMachine.getCashInMachine() - cashToWithdraw);
        console.log('Your card is ejected');
        this.atmMachine.setATMState(this.atmMachine.getNoCardState());

        if (this.atmMachine.getCashInMachine() <= 0)
            this.atmMachine.setATMState(this.atmMachine.getNoCashState());
    }

}