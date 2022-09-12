export default abstract class Sandwich {

    makeBread() {
        console.log('Making Bread.');
        return this;
    }

    addSaled() {
        console.log('Adding Saled.');
        return this;
    }

    addSauces() {
        console.log('Adding Sauces.');
        return this;
    }

    addOther() {

    }

    abstract addTopping(): this;

    make() {
        return this.makeBread()
            .addSaled()
            .addTopping()
            .addSauces()
            .addOther();
    }

}