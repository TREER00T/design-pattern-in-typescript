import AlexaDevice from './AlexaDevice';
import KitchenLights from './hardware/KitchenLights';
import KitchenLightsOnCommand from './commands/KitchenLightsOnCommand';
import KitchenLightsOffCommand from './commands/KitchenLightsOffCommand';
import EverythingOffCommand from './commands/EverythingOffCommand';
import Music from './hardware/Music';
import EverythingOnCommand from './commands/EverythingOnCommand';

let alexa1 = new AlexaDevice();

let kitchenLights1 = new KitchenLights();


alexa1.setCommand(0,
    new KitchenLightsOnCommand(kitchenLights1),
    new KitchenLightsOffCommand(kitchenLights1)
);


alexa1.activateSlot(0);
print(alexa1);
alexa1.deactivateSlot(0);


let alexa2 = new AlexaDevice();

let kitchenLights2 = new KitchenLights();
let music2 = new Music();


alexa2.setCommand(1,
    new EverythingOnCommand(music2, kitchenLights2),
    new EverythingOffCommand(music2, kitchenLights2)
);


alexa2.activateSlot(1);
print(alexa2);
alexa2.deactivateSlot(1);


function print(alexa: AlexaDevice) {
    console.log('\n');
    console.log(alexa);
    console.log('\n');
}