import Validator from './Validator';

export default class PasswordHandler extends Validator {

    handle(request: string) {
        if (request === 'Password')
            return console.log('Valid Password');
        console.log('InValid Password');
    }

}