export default class SecurityCodeCheck {

    private securityCode  = 1234;

    getSecurityCode(): number {
        return this.securityCode ;
    }

    isCodeCorrect(secCodeToCheck: number): boolean {
        return secCodeToCheck == this.getSecurityCode();
    }

}
