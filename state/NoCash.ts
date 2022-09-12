import ATMState from './ATMState';
import ATMMachine from './ATMMachine';


export default class NoCash implements ATMState {

    private atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard() {
        console.log('We don\'t have any money');
        console.log('Your card is ejected');
    }

    ejectCard() {
        console.log('We don\'t have any money');
        console.log('There is no card to eject');
    }

    insertPin(pinEntered: number) {
        console.log('We don\'t have any money');
    }

    requestCash(cashToWithdraw: number) {
        console.log('We don\'t have any money');
    }

}