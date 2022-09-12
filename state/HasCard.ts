import ATMState from './ATMState';
import ATMMachine from './ATMMachine';


export default class HasCard implements ATMState {

    private atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard() {
        console.log('You can only insert one card at a time');
    }

    ejectCard() {
        console.log('Your card is ejected');
        this.atmMachine.setATMState(this.atmMachine.getNoCardState());
    }

    insertPin(pinEntered: number) {
        if (pinEntered === 1234) {
            console.log('You entered the correct PIN');
            this.atmMachine.setCorrectPinEntered(true);
            this.atmMachine.setATMState(this.atmMachine.getHasPin());
            return;
        }
        console.log('You entered the wrong PIN');
        this.atmMachine.setCorrectPinEntered(false);
        console.log('Your card is ejected');
        this.atmMachine.setATMState(this.atmMachine.getNoCardState());
    }

    requestCash(cashToWithdraw: number) {
        console.log('You have not entered your PIN');
    }

}