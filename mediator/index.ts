import Helicopter from './Helicopter';
import Airplane from './Airplane';
import WatchtowerMediator from './WatchtowerMediator';


let helicopter = new Helicopter();
let airplane = new Airplane();
let watchtowerMediator = new WatchtowerMediator({Helicopter: helicopter, Airplane: airplane});
helicopter.fly();

