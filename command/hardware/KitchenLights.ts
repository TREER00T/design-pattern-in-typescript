import Status from './Status';

export default class KitchenLights implements Status{

    off() {
        console.log(`Turning off Kitchen Lights`);
    }

    on() {
        console.log(`Turning on Kitchen Lights`);
    }

}