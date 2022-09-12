export default class Cookie {
    getValue(cookie) {
        console.log(`Check Cookie -> ${cookie}`);
        switch (cookie) {
            case 'userStatus':
                return cookie;
            case 'userId':
                return cookie;
        }
    }
}