import Cookie from './Cookie';


export default class CookiesProxy {

    private cookies: {};

    constructor() {
        this.cookies = {};
    }

    getValue(cookie) {

        if (this.cookies[cookie])
            return this.cookies[cookie];

        this.cookies[cookie] = new Cookie().getValue(cookie);
        return this.cookies[cookie];
    }
}