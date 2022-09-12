export default class FastFood {

    private price: number;

    constructor() {
        this.price = 1000;
    }

    setPrice(price: number) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    accept(visitor) {
       visitor(this);
    }
}