import ATMState from './ATMState';
import HasCard from './HasCard';
import NoCard from './NoCard';
import HasPin from './HasPin';
import NoCash from './NoCash';

export default class ATMMachine {
    private hasCard: ATMState;
    private noCard: ATMState;
    private hasCorrectPin: ATMState;
    private atmOutOfMoney: ATMState;

    private atmState: ATMState;
    private cashInMachine: number = 2000;
    private correctPinEntered: boolean = false;


    constructor() {
        this.hasCard = new HasCard(this);
        this.noCard = new NoCard(this);
        this.hasCorrectPin = new HasPin(this);
        this.atmOutOfMoney = new NoCash(this);
        this.atmState = this.noCard;

        if (this.cashInMachine < 0)
            this.atmState = this.atmOutOfMoney;
    }

    setATMState(newATMState: ATMState) {
        this.atmState = newATMState;
    }

    setCashInMachine(newCashInMachine: number) {
        this.cashInMachine = newCashInMachine;
    }

    setCorrectPinEntered(correctPinEntered: boolean) {
        this.correctPinEntered = correctPinEntered;
    }

    insertCard() {
        this.atmState.insertCard();
    }

    ejectCard() {
        this.atmState.ejectCard();
    }

    insertPin(pinEntered: number) {
        this.atmState.insertPin(pinEntered);
    }

    requestCash(cashToWithdraw: number) {
        this.atmState.requestCash(cashToWithdraw);
    }

    getYesCardState(): ATMState {
        return this.hasCard;
    }

    getNoCardState(): ATMState {
        return this.noCard;
    }

    getHasPin(): ATMState {
        return this.hasCorrectPin;
    }

    getNoCashState(): ATMState {
        return this.atmOutOfMoney;
    }

    getCashInMachine(): number {
        return this.cashInMachine;
    }

}