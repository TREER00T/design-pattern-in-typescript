import Command from './Command';
import Music from '../hardware/Music';
import KitchenLights from '../hardware/KitchenLights';

export default class EverythingOffCommand implements Command {

    private music: Music;
    private kitchenLights: KitchenLights;

    constructor(music: Music, kitchenLights: KitchenLights) {
        this.music = music;
        this.kitchenLights = kitchenLights;
    }

    execute() {
        console.log('--- PARTY TIME OVER! ---');
        this.kitchenLights.off();
        this.music.off();
        this.music.setVolume(0);
        this.music.setStation(0);
    }

}