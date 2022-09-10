import Channel from './Channel';
import Subscriber from './Subscriber';



let maryamChannel = new Channel();

let subscriberAli = new Subscriber('ALi');
let subscriberReza = new Subscriber('Reza');
let subscriberHasan = new Subscriber('Hasan');

maryamChannel.subscribe(subscriberAli);
maryamChannel.subscribe(subscriberReza);
maryamChannel.subscribe(subscriberHasan);

subscriberAli.subscriberChannel(maryamChannel);
subscriberReza.subscriberChannel(maryamChannel);
subscriberHasan.subscriberChannel(maryamChannel);

maryamChannel.unsubscribe(subscriberHasan);


maryamChannel.upload('maryam','How to Write Better Code???');
