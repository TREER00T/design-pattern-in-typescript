import ATMMachine from './ATMMachine';

let atmMachine = new ATMMachine();

atmMachine.insertCard();

atmMachine.ejectCard();

atmMachine.insertCard();

atmMachine.insertPin(1234);

atmMachine.requestCash(2000);

atmMachine.insertCard();

atmMachine.insertPin(1234);