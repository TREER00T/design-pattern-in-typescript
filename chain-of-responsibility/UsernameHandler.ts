import Validator from './Validator';

export default class UsernameHandler extends Validator {

    handle(request: string) {
        if (request === 'Username')
            return console.log('Valid Username');
        console.log('InValid Username');
    }

}