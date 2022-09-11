import Command from './Command';
import Music from '../hardware/Music';
import KitchenLights from '../hardware/KitchenLights';

export default class EverythingOnCommand implements Command {

    private music: Music;
    private kitchenLights: KitchenLights;

    constructor(music: Music, kitchenLights: KitchenLights) {
        this.music = music;
        this.kitchenLights = kitchenLights;
    }

    execute() {
        console.log('--- ITS PARTY TIME! ---');
        this.kitchenLights.on();
        this.music.on();
        this.music.setVolume(10);
        this.music.setStation(100.1);
    }

}