import Channel from './Channel';
import Observer from './Observer';

export default class Subscriber implements Observer {

    private readonly name: string;
    private channel: Channel;

    public update() {
        console.log(`Hey ${this.name}, Username ${this.channel.getUsername()} Has Uploaded Video And Title Of Video Is : ${this.channel.getTitle()}`);
    }

    constructor(name: string) {
        this.name = name;
    }

    subscriberChannel(channel: Channel) {
        this.channel = channel;
    }

}