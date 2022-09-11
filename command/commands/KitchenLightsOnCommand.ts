import Command from './Command';
import KitchenLights from '../hardware/KitchenLights';

export default class KitchenLightsOnCommand implements Command {

    private kitchenLights: KitchenLights;

    constructor(kitchenLights: KitchenLights) {
        this.kitchenLights = kitchenLights;
    }

    execute() {
        this.kitchenLights.on();
    }

}