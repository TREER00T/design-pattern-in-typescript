export default class FastFoodPriceVisitor {
    visit(fastFood) {
        fastFood.setPrice(fastFood.getPrice() * 2);
    }
}