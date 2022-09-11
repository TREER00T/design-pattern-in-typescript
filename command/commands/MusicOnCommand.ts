import Command from './Command';
import Music from '../hardware/Music';

export default class MusicOnCommand implements Command {

    private music: Music;

    constructor(music: Music) {
        this.music = music;
    }

    execute() {
        this.music.on();
        this.music.setVolume(5);
        this.music.setStation(99.9);
    }

}
