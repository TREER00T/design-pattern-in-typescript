import ElectricityVoltage from './ElectricityVoltage';

export default class Adapter implements ElectricityVoltage {

    on() {
        console.log('Samsung adapter get input electricity...');
    }

    off() {
        console.log('Samsung adapter stopped to get input electricity...');
    }

}