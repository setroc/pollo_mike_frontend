export interface IOrderProducts {
  productId: number;
  quantity: number;
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
