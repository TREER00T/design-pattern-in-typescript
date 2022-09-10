import Channel from './Channel';

export default interface Observer {

    update(): void;

    subscriberChannel(channel: Channel): void;

}