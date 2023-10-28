export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface IProductInNewOrder {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
}