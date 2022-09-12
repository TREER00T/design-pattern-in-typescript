export default abstract class InfoTransaction {
    protected amount: number

    getAmount(): number {
        return this.amount;
    }
}