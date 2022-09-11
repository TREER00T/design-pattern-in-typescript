import Status from './Status';

export default class Music implements Status{

    private volume: number;
    private station: number;


    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number) {
        console.log(`Setting volume to: ${volume}`);
        this.volume = volume;
    }

    getStation(): number {
        return this.station;
    }

    setStation(station: number) {
        console.log(`Setting station to: ${station}`);
        this.station = station;
    }

    off() {
        console.log(`Turning off Music`);
    }

    on() {
        console.log(`Turning on Music`);
    }

}