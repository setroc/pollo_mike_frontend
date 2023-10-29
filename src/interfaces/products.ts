export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  stepQuantity: number;
}

export interface IProductInNewOrder extends IProduct {
  quantity: number;
}