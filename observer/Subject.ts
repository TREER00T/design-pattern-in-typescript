import Subscriber from './Subscriber';

export default interface Subject {
    upload(username: string, title: string): void;

    subscribe(sub: Subscriber): void;

    unsubscribe(sub: Subscriber): void;

    notifySubscribers(): void;
}