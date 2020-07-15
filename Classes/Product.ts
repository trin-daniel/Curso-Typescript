class Product {
  constructor(
    private name: string, 
    private price: number, 
    private discount: number = 0
    ){
    this.name;
    this.price;
    this.discount;
  }

  public summary():string{
    return `Este produto ${this.name} custa R$${this.hasDiscount().toFixed(2)}, (${this.discount * 100}% off)`;
  }

  public hasDiscount():number{
    const discount = this.price * this.discount;
    const price = this.price - discount;
    return price;
  }
}

const product = new Product('Xbox', 1560.40, 0.2);
console.log(product.summary());
