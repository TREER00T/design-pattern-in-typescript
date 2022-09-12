export default interface Handler {

    setNext(successor: any);

    handle(request: string);

    next(request: string);

}