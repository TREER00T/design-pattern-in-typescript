import Command from './commands/Command';
import NoOpCommand from "./commands/NoOpCommand";

export default class AlexaDevice {

    private readonly onCommands: Array<Command>;
    private readonly offCommands: Array<Command>;
    private slots: number = 3;

    constructor() {
        this.offCommands = new Array<Command>(this.slots);
        this.onCommands = new Array<Command>(this.slots);

        for (let i = 0; i < this.slots; i++) {
            this.offCommands[i] = new NoOpCommand();
            this.onCommands[i] = new NoOpCommand();
        }

    }

    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        if (offCommand === null || onCommand === null)
            throw new Error('IllegalArgumentException');

        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    activateSlot(slot: number) {
        this.onCommands[slot].execute();
    }

    deactivateSlot(slot: number) {
        this.offCommands[slot].execute();
    }

}