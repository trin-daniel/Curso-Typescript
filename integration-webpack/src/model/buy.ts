export default interface Buy {
  name: string;
  price: number;
  discount: number;
  discountPrice(): number;
}