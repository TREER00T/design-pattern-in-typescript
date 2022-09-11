import ElectricityVoltage from './ElectricityVoltage';
import SamsungPhone from './SamsungPhone';

export default class SamsungAdapter implements ElectricityVoltage {

    private samsungPhone: SamsungPhone;

    constructor(samsungPhone: SamsungPhone) {
        this.samsungPhone = samsungPhone;
    }

    off() {
        this.samsungPhone.unCharge();
    }

    on() {
        this.samsungPhone.charge();
    }


}