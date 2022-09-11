import Adapter from './Adapter';
import SamsungPhone from './SamsungPhone';
import SamsungAdapter from './SamsungAdapter';


let adapter = new Adapter();
let samsungPhone = new SamsungPhone();
let samsungAdapter = new SamsungAdapter(samsungPhone);


adapter.on();
samsungAdapter.on();
samsungPhone.charge();

adapter.off();
samsungAdapter.off();
samsungPhone.unCharge();
