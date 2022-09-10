import Subscriber from './Subscriber';
import Subject from './Subject';

export default class Channel implements Subject {

    private subs: Array<Subscriber> = new Array<Subscriber>();
    private title: string;
    private username: string;

    getTitle(): string {
        return this.title;
    }

    getUsername(): string {
        return this.username;
    }

    subscribe(sub: Subscriber) {
        this.subs.push(sub);
    }

    unsubscribe(sub: Subscriber) {
        this.subs.splice(this.subs.indexOf(sub),1);
    }

    notifySubscribers() {
        this.subs.forEach(sub => {
            sub.update();
        });
    }

    upload(username: string, title: string) {
        this.title = title;
        this.username = username;
        this.notifySubscribers();
    }

}