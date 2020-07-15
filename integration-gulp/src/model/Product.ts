import Buy from './buy';

class Product implements Buy {
  constructor(
    public name: string,
    public readonly price: number,
    public readonly discount: number,
  ) { }
  discountPrice(): number {
    return this.price * (1 - this.discount);
  }
}
export default Product;