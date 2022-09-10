export default abstract class Coffee {

    description: string = 'Unknown Coffee';
    cost: number = 0;


    getDescription(): string {
        return this.description;
    }

    getCost(): number {
        return this.cost;
    }
}