import { IProduct } from ".";

export interface IOrderProducts {
  productId: number;
  quantity: number;
  product?: IProduct;
}

export interface IOrder {
  id: number;
  clientName: string;
  number: number;
  total: number;
  date: string;
  state: number;
  orderToProduct: IOrderProducts[]
}
