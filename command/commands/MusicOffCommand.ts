import Command from './Command';
import Music from '../hardware/Music';

export default class MusicOffCommand implements Command {

    private music: Music;

    constructor(music: Music) {
        this.music = music;
    }

    execute() {
        this.music.setVolume(0);
        this.music.setStation(0);
        this.music.off();
    }

}
