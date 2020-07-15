"use strict";
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.name;
        this.price;
        this.discount;
    }
    summary() {
        return `Este produto ${this.name} custa R$${this.hasDiscount().toFixed(2)}, (${this.discount * 100}% off)`;
    }
    hasDiscount() {
        const discount = this.price * this.discount;
        const price = this.price - discount;
        return price;
    }
}
const product = new Product('Xbox', 1560.40, 0.2);
console.log(product.summary());
//# sourceMappingURL=Product.js.map