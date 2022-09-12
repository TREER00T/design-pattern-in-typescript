import Handler from './Handler';
import PasswordHandler from './PasswordHandler';
import UsernameHandler from './UsernameHandler';


let username = new UsernameHandler();
let password = new PasswordHandler();


console.log('Chain: Username > Password');
username.setNext(password);
username.handle('Username');
password.handle('Password');

console.log('\n');

console.log('Chain: Username > Password');
username.setNext(password);
username.handle('Usernames');
password.handle('Passwords');
