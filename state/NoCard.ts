import ATMState from './ATMState';
import ATMMachine from './ATMMachine';


export default class NoCard implements ATMState {

    private atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard() {
        console.log('Please enter your pin');
        this.atmMachine.setATMState(this.atmMachine.getYesCardState());
    }

    ejectCard() {
        console.log('You didn\'t enter a card');
    }

    insertPin(pinEntered: number) {
        console.log('You have not entered your card');
    }

    requestCash(cashToWithdraw: number) {
        console.log('You have not entered your card');
    }

}