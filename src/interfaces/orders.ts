import { IProductInOrder } from ".";

export interface IOrder {
  id: number;
  clientName: string;
  number: number;
  total: number;
  date: string;
  state: number;
  products: IProductInOrder[]
}
