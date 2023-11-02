export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  stepQuantity: number;
  type: string;
  imgName: string;
}

export interface IProductInOrder extends IProduct {
  quantity: number;
}